use sekolah;

DELIMITER $$
CREATE FUNCTION fn_info_siswa(p_nis VARCHAR(10))
RETURNS VARCHAR(100)
DETERMINISTIC
BEGIN
	DECLARE v_nama_siswa VARCHAR(50);
    DECLARE v_nama_agama VARCHAR(50);
    
    SELECT s.nama, a.nama
    INTO v_nama_siswa, v_nama_agama
    FROM siswa s
    JOIN agama a ON s.kd_agama = a.kode
    WHERE s.nis = p_nis;
    RETURN CONCAT(v_nama_siswa, ' - ', v_nama_agama);
END $$
DELIMITER ;



