CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name TEXT NOT NULL,
  user_firstname TEXT NOT NULL,
  user_lastname TEXT NOT NULL,
  user_email TEXT NOT NULL UNIQUE,
  user_password TEXT NOT NULL,
  user_mobile TEXT NOT NULL,
  user_birthday DATE,
  created_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- CREATE TABLE movie_list( 
--   movie_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
--   rank int,
--   title TEXT,
--   fullTitle TEXT,
--   year INT,
--   image TEXT,
--   crew TEXT,
--   imDbRating FLOAT,
--   imDbRatingCount INT
--  );
 
 CREATE TABLE comments(
   comment_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
   movie_id TEXT,
   comment_by_email TEXT,
   comment text,
   user_name text
   created_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
 );


insert into comments (movie_id, comment_by_email, comment, like_count) values ('tt0071562', 'flukgoza@gmail.com', 'Very Good', '1');


insert into comments (movie_id, comment_by_email, comment, like_count) values ('tt0050083', 'flukgoza@gmail.com', 'Great!', '2');
insert into comments (movie_id, comment_by_email, comment, like_count) values ('tt0108052', 'flukgoza@gmail.com', 'Hello World', '1');
insert into comments (movie_id, comment_by_email, comment, like_count) values ('tt0167260', 'flukgoza@gmail.com', 'Very Very Good', '1')