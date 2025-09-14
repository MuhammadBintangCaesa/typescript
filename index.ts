type pria = string; 
type wanita = string;

type gender = pria | wanita;
// type Gender = string | number; // union type
// union type
let budi: pria;
let sinta: wanita;

sinta = "sayaWanita";
budi = "sayaPria";

let sayaManusia: gender;
sayaManusia = "Budi Rejo";


// type ini tuh bisa bbanyak sesuai kebutuhan untuk interface atau object yang ktia buat
type Warna = // gunain type agar interface bisa leibh rapih dan lebih mudah dibaca
  | "hitam"
  | "putih"
  | "coklat"
  | "abu-abu"
  | "oren"
  | "krem"
  | "belang"
  | "albino"
  | "calico";

type jenisHewan = "kucing" | "anjing"; // kalau misalnya pake & ini di bacanya intersection type nah ini tuh artinya harus memenuhi semua type yang ada di dalamnya ga bisa beda seperti union type biasa atau menggunakan ataur

interface Hewan {
  nama: string;
  jenis: string;
  umur: number;
  warna: "hitam" | "putih" | "coklat" | "abu-abu" | "oren" | "krem" | "belang" | "albino" | "calico";
  habitat?: boolean; // optional property itu berbentuk ? tadannya itu wajib di isi sekarang bisa di isi bisa juga engga
}

interface Kucing extends Hewan {
    penyakit: string;
    harga: number;
}

interface Anjing extends Hewan {
    ras: string;
    penyakit: string;
    harga: number;
}

function createHewan(jenisHewan: Kucing | Anjing): void {
    console.log (`
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

const kucing: Kucing = {
    nama: "Kitty",
    jenis: "Kucing Persia",
    umur: 2,
    warna: "albino",
    habitat: true,
    penyakit: "Flu",
    harga: 2000000
};

const anjing: Anjing = {
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