const fs = require('fs');

const teks = fs.readFileSync("film.json","utf-8");
const data = JSON.parse(teks);


//menulis data baru ke data.json
data.push({id: 1, judul : "Agak Laen", tahun : 2024, genre : "Horor, Komedi"});
data.push({id: 2, judul : "Habibie & Ainun", tahun : 2012, genre : "Drama, Romantis"});
data.push({id: 3, judul : "Dilan 1990", tahun : 2018, genre : "Romantis"});


//menyimpan (menulis ulang)
fs.writeFileSync("film.json", JSON.stringify(data, null, 2));
console.log("Daftar Film: ");

data.forEach(function(item,index) {
    console.log(`${item.id} ${item.judul} (${item.tahun}) - ${item.genre}`)
    
});
