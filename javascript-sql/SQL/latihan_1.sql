create database latihan_1;

use latihan_1;

create table buku(
Kode_Buku char (4) primary key,
Judul_Buku varchar (30) not null,
Pengarang varchar (20) not null,
Penerbit varchar (20) not null);

create table pengembalian(
Kode_pinjam char (4),
Kode_Buku char (4),
Tgl_Kembali date not null,
Denda numeric(9,0) not null,
primary key(kode_pinjam,kode_buku),
foreign key(kode_pinjam) 
references peminjaman (kode_pinjam),
foreign key(kode_buku)
references buku(kode_buku)
); 