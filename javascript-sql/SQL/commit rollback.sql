use pegawai;

-- COMMIT - Tidak bisa rollback
start transaction;
insert into hobi (id, nama_hobi)
values (5,'Bersepeda');
commit;
rollback;

select * from hobi;

-- Tanpa COMMIT
start transaction;
insert into hobi (id, nama_hobi)
values (6,'Menulis');
rollback;


