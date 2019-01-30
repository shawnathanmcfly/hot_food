CREATE DATABASE reservation_DB;

USE reservation_DB;

CREATE TABLE first_five (
  id INT NOT NULL AUTO_INCREMENT,
  guest_name VARCHAR(50) NULL,
  phone_number DECIMAL(12) NULL,
  email VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE waitlist (
  id INT NOT NULL AUTO_INCREMENT,
  guest_name VARCHAR(50) NULL,
  phone_number DECIMAL(12) NULL,
  email VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO first_five (guest_name, phone_number, email)
VALUES ("Guest1", 1111111111, "guest1@email.com");

INSERT INTO waitlist (guest_name, phone_number, email)
VALUES ("Guest7", 7777777777, "guest7@email.com");