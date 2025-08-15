use sekolah;

SELECT siswa.nis, siswa.nama, agama.nama
FROM siswa
JOIN agama ON siswa.kd_agama = agama.kode
WHERE agama.nama IN ('Islam', 'Protestan');

