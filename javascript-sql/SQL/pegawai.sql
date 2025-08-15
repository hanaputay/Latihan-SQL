create database pegawai;

use pegawai;

create table hobi(
id int primary key,
nama_hobi varchar(50) not null);
/* cara lain menulis PK
create table hobi(
id int auto_increment,
nama_hobi varchar (50) not null,
primary key (id)); */

create table asn(
nip char (18) primary key,
nama varchar (100),
id_hobi int,
foreign key(id_hobi)
references hobi (id));

alter table asn change nama nama_lengkap varchar(100);

rename table asn to pns;

show databases;
show tables;

drop table pns;
drop database pegawai;

insert into hobi values
(1,'Memasak'),
(2,'Olahraga'),
(3,'Menyanyi'),
(4,'Membaca');

delete from hobi;

insert into asn values
('123456789101112131','Rose',1),
('123456789101112132','Jasmine',2),
('123456789101112133','Daisy',3),
('123456789101112134','Lavender',2),
('123456789101112135','Orchid',1);

select * from hobi;
select * from asn;


update asn set nama = 'Sunflower' 
where nip = '123456789101112134';

delete from asn 
where nip = '123456789101112134';

select nip, nama from asn
where nip in ('123456789101112131','123456789101112135');

