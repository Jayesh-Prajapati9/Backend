create table user (
    userId varchar(50) primary key,
    userName varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(50) not null
);