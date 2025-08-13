let nasiGoreng = 25000
let mieGoreng = 22000
let capcay = 32000

console.log("Harga Nasi Goreng = Rp. ", nasiGoreng);
console.log("Harga Mie Goreng = Rp. ", mieGoreng);
console.log("Harga Capcay = Rp. ", capcay);

//harga total
let total = nasiGoreng + mieGoreng + capcay;
console.log("Harga Total = Rp. ", total);

//diskon
let diskon = 0.10;
let jumlahDiskon = total * diskon;

console.log("Diskon = 10%");

//harga setelah diskon
let totalSetelahDiskon = total - jumlahDiskon
console.log("Harga setelah diskon = ", totalSetelahDiskon);

//pembayaran
let pembayaran = 100000
let sisaUang = pembayaran - totalSetelahDiskon;

console.log("Pembayaran = Rp. ", pembayaran);
console.log("Kembalian = Rp. ", sisaUang);