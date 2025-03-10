create database AutoSpace;
use AutoSpace;

create table car(
	id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(255),
    color VARCHAR(255),
    placa VARCHAR(255) NOT NULL
);

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


select * from users;
insert into users(username, password) values("claudio", "1234");