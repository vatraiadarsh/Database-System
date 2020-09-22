drop database if exists cmj18001;

create database cmj18001;
use cmj18001;

create table categories(
id int primary key AUTO_INCREMENT,
name varchar(50),
added_date timestamp default CURRENT_TIMESTAMP,
modified_date timestamp null,
status tinyint(1)
);


-- inserting bulk/multiple values giving comma(",")
insert into categories(name,status)
values('Shampoo',1),('Soap',1),('Detergent',1),('Biscuits',1);

select * from categories;

create table items(
    id int primary key AUTO_INCREMENT,
    name varchar(50),
    price int,
    quantity int,
    added_date timestamp default CURRENT_TIMESTAMP,
    modified_date timestamp null,
    status tinyint(1)
);

-- putting the new column category_id in items after quantity
alter table items add column category_id int after quantity;

-- adding foreign key
alter table items add foreign key(category_id) references categories(id);

insert into items(name,price,quantity,category_id,status)
values('panteen',250,50,1,1),
('Dove',250,50,1,1),
('Liril',250,50,2,1),
('Lux',250,50,2,1),
('Okhati',250,50,2,1),
('Clinic Plus',100,100,1,1);

describe items;