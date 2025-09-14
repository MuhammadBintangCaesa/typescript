"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type Gender = string | number; // union type
// union type
let budi;
let sinta;
sinta = "sayaWanita";
budi = "sayaPria";
let sayaManusia;
sayaManusia = "Budi Rejo";
function createHewan(jenisHewan) {
    console.log(`
        terimakasih telah membeli hewan dengan detail sebagai berikut:
        nama hewan: ${jenisHewan.nama}
        jenis hewan: ${jenisHewan.jenis}
        umur hewan: ${jenisHewan.umur} tahun
        warna hewan: ${jenisHewan.warna}
        habitat hewan: ${jenisHewan.habitat}
        ${'ras' in jenisHewan ? `ras hewan: ${jenisHewan.ras}` : ''}
        penyakit hewan: ${jenisHewan.penyakit}
        harga hewan: ${jenisHewan.harga}
    `);
}
//function createHewan(jenisHewan: Anjing): void {
//console.log (`
//  terimakasih telah membeli hewan dengan detail sebagai berikut:
//nama hewan: ${jenisHewan.nama}
//enis hewan: ${jenisHewan.jenis}
//umur hewan: ${jenisHewan.umur} tahun
/// warna hewan: ${jenisHewan.warna}
//habitat hewan: ${jenisHewan.habitat}
//${'ras' in jenisHewan ? `ras hewan: ${jenisHewan.ras}` : ''}
// penyakit hewan: ${jenisHewan.penyakit}
// harga hewan: ${jenisHewan.harga}
//`)
//};
const kucing = {
    nama: "Kitty",
    jenis: "Kucing Persia",
    umur: 2,
    warna: "albino",
    habitat: true,
    penyakit: "Flu",
    harga: 2000000
};
const anjing = {
    nama: "Buddy",
    jenis: "Anjing Golden Retriever",
    umur: 3,
    warna: "coklat", // kalau ga di masukin tipe habitatnya dia bakal undefined
    penyakit: "Tidak ada",
    ras: "Golden Retriever",
    harga: 3000000
};
createHewan(kucing);
createHewan(anjing);
//# sourceMappingURL=index.js.map