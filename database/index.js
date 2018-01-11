const { Client } = require('pg');
const path = require('path');
const fs = require('fs');

const client = new Client({
  connectionString: 'pg://Link:@localhost/slackk',
  // connectionString: process.env.DATABASE_URL,
  // ssl: true,
});

client
  .connect()
  .then(() => console.log('connected to postgres db'))
  .catch(e => console.error('error connecting to postgres db, ', e.stack));

const initializeMessages = () =>
  new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, '/schema/messages.sql'),
      'utf8',
      (err, data) => (err ? reject(err) : resolve(data)),
    );
  }).then(data => client.query(data));

const initializeUsers = () =>
  new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, '/schema/users.sql'),
      'utf8',
      (err, data) => (err ? reject(err) : resolve(data)),
    );
  }).then(data => client.query(data));

const postMessage = message =>
  client.query('INSERT INTO messages (text) VALUES ($1) RETURNING *', [message]);

const getMessages = () => client.query('SELECT * FROM messages').then(data => data.rows);

// TODO storing username and password as basic text. Change this later to more secure version.
const createUser = (params) => {
  return new Promise((resolve, reject) => client.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', params,
    (err, data) => {
      if (err) {
        if (err.code === '23505') {
          console.log('Duplicate entry');

          resolve(data, '23505');
        }
        reject(err);
      }
      resolve(data);
    })
  );
};


const login = params => client.query('SELECT * FROM users WHERE username = ($1) AND password = ($2)', params);

if (process.env.INITIALIZEDB) {
  initializeMessages()
    .then(console.log)
    .catch(console.log);

  initializeUsers()
    .then(console.log)
    .catch(console.log);
}

module.exports = {
  client,
  initializeMessages,
  postMessage,
  getMessages,
  login,
  createUser,
  initializeUsers,
};
