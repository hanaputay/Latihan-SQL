console.log ("Looping Aktivitas");

for (let i = 1; i <= 20; i++){
    if (i % 3 === 0 && i % 2 !== 0){
        console.log(i + "- Mengikuti Uji kompetensi");
    } else if (i % 3 === 0 && i % 2 === 0){
        console.log(i + "- Mendapat Sertifikat");
    } else if (i % 2 !== 0){
        console.log(i + "- Apel Pagi");
    } else {
        console.log(i + "- Mengikuti Pelatihan");
    }
}