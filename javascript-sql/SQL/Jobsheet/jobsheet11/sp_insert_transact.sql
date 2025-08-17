use sekolah;

DELIMITER $$
CREATE PROCEDURE sp_insert_siswa(
	IN m_nis VARCHAR(18),
    IN m_nama varchar(11),
    IN m_kd_agama int
    )
BEGIN
	START TRANSACTION;
    INSERT INTO siswa VALUES (m_nis, m_nama, m_kd_agama);
    SELECT * FROM siswa;
    SELECT * FROM log_siswa;
    COMMIT;
END $$
DELIMITER ;