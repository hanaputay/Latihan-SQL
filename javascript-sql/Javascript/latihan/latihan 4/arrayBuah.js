let buah = [];
buah.push("Apel", "Mangga", "Jeruk", "Semangka", "Pisang", "Anggur", "Nanas");

//urut sesuai alfabet
buah.sort();
console.log(buah);
console.log("");

//menampilkan semua elem array dengan angka urut
for (let i = 0; i < buah.length; i++){
    console.log((i+1) + ". " + buah[i]);
}
