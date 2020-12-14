DROP DATABASE items;
CREATE DATABASE items;
\c items;
DROP TABLE games;

CREATE TABLE games (
  id bigint PRIMARY KEY NOT NULL,
  item varchar(100),
  price real,
  imgUrl text[],
  system varchar(20)
);