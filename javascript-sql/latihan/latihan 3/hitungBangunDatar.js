//Fungsi untuk menghitung luas dan keliling persegi
function hitungLuasPersegi(sisi){
    return sisi * sisi;
}

function hitungKeliling(sisi){
    return 4 * sisi;
}

//Fungsi untuk menghitung luas dan keliling persegi panjang
function hitungLuasPP(panjang, lebar){
    return panjang * lebar;
}

function hitungKelilingPP (panjang, lebar){
    return 2 * (panjang + lebar);
}

//Fungsi untuk menghitung luas dan keliling lingkaran
function hitungLuasLingkaran(jari){
    return 3.14 * jari * jari;
}
function hitungKelilingLingkaran(jari){
    return 2 * 3.14 * jari;
}

//Fungsi untuk menghitung luas dan keliling segitiga sama sisi
function hitungLuasSegitiga (alas, tinggi){
    return 0.5 * alas * tinggi;
}
function hitungKelilingSegitiga(sisi){
    return 3 * sisi;
}



//Fungsi utama untuk menampilkan hasil
function tampilkanLuas(sisi, p, l, jari, alas, tinggi){
    console.log("=====MENGHITUNG LUAS DAN KELILING BANGUN DATAR=====");
    console.log(">> Luas Bangun Datar <<");
    console.log(`Luas Persegi Dengan Sisi ${sisi} Adalah ${hitungLuasPersegi(sisi)}`);
    console.log(`Luas Persegi Panjang Dengan Panjang ${p} Dan Lebar ${l} Adalah ${hitungLuasPP(p,l)}`);
    console.log(`Luas Lingkaran Dengan Jari - jari ${jari} Adalah ${hitungLuasLingkaran(jari).toFixed(2)}`);
    console.log(`Luas Segitiga Dengan Alas ${alas} Dan Tinggi ${tinggi} Adalah ${hitungLuasSegitiga(alas, tinggi)}`);
}

function tampilkanKeliling(sisi, p, l, jari, sisiSegitiga){
    console.log("\n")
    console.log(">> Keliling Bangun Datar <<");
    console.log(`Keliling Persegi Dengan Sisi ${sisi} Adalah ${hitungKeliling(sisi)}`);
    console.log(`Keliling Persegi Panjang Dengan Panjang ${p} Dan Lebar ${l} Adalah ${hitungKelilingPP(p,l)}`);
    console.log(`Keliling Lingkaran Dengan Jari - jari ${jari} Adalah ${hitungKelilingLingkaran(jari).toFixed(2)}`);
    console.log(`Keliling Segitiga Dengan Sisi ${sisiSegitiga} Adalah ${hitungKelilingSegitiga(sisiSegitiga)}`);
}

//Pemanggil fungsi
tampilkanLuas(8, 9, 3, 6, 6, 4);
tampilkanKeliling(8, 9, 3, 6, 6);