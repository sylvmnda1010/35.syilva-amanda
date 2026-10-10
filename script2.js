// alert("Hello,world!");
let usia = 15;
let hari = "Sabtu";
let member = "ya";
let hargaAwal = 50000;
let diskonUsia = 0;
let penyesuaianHari = 0;
if (usia < 5) {
    diskonUsia = 1.0; // Gratis
} else if (usia <= 12) {
    diskonUsia = 0.50; // Diskon 50%
} else if (usia >= 60) {
    diskonUsia = 0.30; // Diskon 30%
}
if (hari == "Senin" || hari == "Selasa" || hari == "Rabu" || hari == "Kamis") {
    penyesuaianHari = -0.10; // Diskon tambahan 10%
} else if (hari == "Jumat") {
    penyesuaianHari = 0; // Tidak ada diskon/tambahan
} else if (hari == "Sabtu" || hari == "Minggu") {
    penyesuaianHari = 0.20; // Harga naik 20%
}
let hargaSetelahAturan = hargaAwal - (hargaAwal * diskonUsia) + (hargaAwal * penyesuaianHari);
let hargaAkhir = hargaSetelahAturan;
if (member == "ya") {
    hargaAkhir = hargaSetelahAturan - (hargaSetelahAturan * 0.15);
}
alert(
    "DETAIL PERHITUNGAN TIKET:\n" +
    "Usia: " + usia + " tahun\n" +
    "Hari: " + hari + "\n" +
    "Member: " + member + "\n" +
    "----\n" +
    "Harga Tiket Akhir: Rp" + hargaAkhir
);













// var nama = "manda";
// let umur = 15;
// let status = (umur >= 17) ? "dewasa" : "anak-anak"
// let aktif = true;
// let kosong = null;

// alert ( " hai nama saya " + nama + " umur saya  " + umur); // manda 15
// console.log(umur);//15
// console.log (status); //anak-anak
// console.log(aktif);//true
// console.log(kosong);//null

// let x = 10;

// switch (x) {
//     case x==10:
//         console.log("x is 10");
//         break;
//     case x==20:
//         console.log("x is 20");
//         break;
//     default:
//         console.log("x is not 10 or 20");

// }
// if (x==10) {
//    console.log("x is 10");
// }else if (x==20) {
//     console.log("x is 20");
// }else {
//     console.log("x is not 10 or 20");
// }

