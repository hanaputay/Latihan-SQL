let sepatu = [
    {nama: "New Balance NB530", harga: 390000},
    {nama: "Nike Vomero 5", harga: 350000},
    {nama: "Adidas Samba", harga: 180000},
    {nama: "Onitsuka Tiger Mexico", harga: 420000}
];

let total = 0;
console.log("=====Rincian Belanja Sepatu=====")

//tampilkan daftar dan total
for (let i = 0; i < sepatu.length; i++){
    console.log(`${i + 1}. ${sepatu[i].nama} - Rp ${sepatu[i].harga}`);
    total += sepatu[i].harga;
}

console.log("\n")
console.log(`Total Belanja: Rp ${total}`);

//DISKON
let diskonPersen = 0;
if (total < 250000){
    diskonPersen = 0;
} else if (total >= 250000 && total <= 499999){
    diskonPersen = 0.05;
} else if (total >= 500000 && total <= 799999){
    diskonPersen = 0.10;
} else if(total >= 800000){
    diskonPersen = 0.15;
}


let jumlahDiskon = total * diskonPersen;

//hitung jumlah yang harus dibayar
let totalBayar = total - jumlahDiskon;
let bayar = 1200000
let kembalian = bayar - totalBayar;

console.log(`Diskon = ${diskonPersen * 100}%`);
console.log(`Total Setelah Diskon = Rp ${totalBayar}`);
console.log(`Pembayaran = Rp ${bayar}`);
console.log(`Kembalian = Rp ${kembalian}`);
