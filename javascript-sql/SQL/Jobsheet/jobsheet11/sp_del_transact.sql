use sekolah;

DELIMITER //
CREATE PROCEDURE sp_del_siswa(
	IN m_nis VARCHAR(18)
    )
BEGIN
	START TRANSACTION;
    DELETE FROM siswa WHERE nis = m_nis;
    SELECT * FROM siswa;
END //
DELIMITER ;

DROP PROCEDURE sp_del_siswa;