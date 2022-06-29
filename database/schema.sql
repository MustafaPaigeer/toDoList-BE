CREATE DATABASE todolist;

CREATE TABLE users (
	id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  category VARCHAR(50) NOT NULL,
  description VARCHAR(200),
  status VARCHAR(50),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
);


-- Function to set current updated time to columns

CREATE OR REPLACE FUNCTION set_updated_at()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';


-- Create Trigger to updated column updated_at and set current time when upating rows

CREATE TRIGGER set_updated_at
    BEFORE UPDATE
    ON tasks
    FOR EACH ROW
EXECUTE PROCEDURE set_updated_at();