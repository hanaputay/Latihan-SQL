let daftarBelanja = [];
daftarBelanja.push("Beras", "Minyak", "Gula");
daftarBelanja.push("Telur", "Sayur", "Buah");

//cari index, lalu hapus dengan slice
let indexMinyak = daftarBelanja.indexOf("Minyak");
if (indexMinyak !== -1){
    daftarBelanja.splice(indexMinyak, 1);
}

//urutkan array
daftarBelanja.sort();

//tampilkan
console.log("Daftar Belanja Ibu Lily : ");
for (let i = 0; i < daftarBelanja.length; i++){
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}
