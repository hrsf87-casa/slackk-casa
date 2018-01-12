  CREATE TABLE IF NOT EXISTS $1 (
	"id" serial NOT NULL,
	"text" varchar(1024) NOT NULL,
  "username" varchar(1024) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT $1_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);