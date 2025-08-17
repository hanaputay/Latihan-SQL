let headset = 225000
let mouse = 150000
let keyboard = 350000

//total belanja
let total = headset + mouse + keyboard

//menghitung diskon berdasarkan ketentuan
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

//hitung diskon
let jumlahDiskon = total * diskonPersen;

//hitung jumlah yang harus dibayar
let totalBayar = total - jumlahDiskon;
let bayar = 800000
let kembalian = bayar - totalBayar;

//tampilkan informasi
console.log("=====Rincian Pembelian=====");
console.log("Headset = Rp. ", headset);
console.log("Mouse = Rp. ", mouse);
console.log("Keyboard = Rp. ", keyboard);
console.log("\n")
console.log("Total Belanja = Rp. ", total);
console.log("Diskon = ", + (diskonPersen * 100) + "%");
console.log("Total Setelah Diskon = Rp. ", totalBayar);
console.log("Pembayaran = Rp. ", bayar);
console.log("Kembalian = Rp. ", kembalian);
