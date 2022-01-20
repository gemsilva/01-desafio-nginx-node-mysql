use nodedb;

create table people (id int not null auto_increment, name varchar(255), date_insert timestamp DEFAULT CURRENT_TIMESTAMP, primary key(id));

insert into people (name) values ('GABRIEL');