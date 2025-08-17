function bagiAngka(a,b){
    try{
        if (b === 0){
            throw new Error ("Error: Tidak bisa membagi dengan nol!")
        }
        let hasil = a / b;
        console.log("Hasil pembagian : ", hasil);
    } catch (error){
        console.log(error.message);
    }

}

let angka1 = 10;
let angka2 = 5;

bagiAngka(angka1, angka2);

console.log("Program selesai.");
