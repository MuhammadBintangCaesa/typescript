let namaSaya: any = "Muhammad Bintang";
let password: number = 123456;
let isLogin: boolean = false;

// nilai yang kosong // ini multi tipe data kalau pake I 
let umur: number | string | boolean; 

// umur saya di isi nilainya // ini error ya karena ga sesuai dengan tipe data awalnya
//umur = true; // Boolean

// agar lebih aman, kita bisa pake tipe data any atau multi tipe data
// agar terpediksi dan minim error

// array biasa
let gender: string [];
gender = ["Laki-laki", "Perempuan"];

//tuple array
let biodata: [string, number, boolean];
biodata = ["Muhammad Bintang", 20, false];

// costume data object
let temanSaya: object;
type teman = {
    nama: string,
    umur: number,
    isMarried: boolean
}
temanSaya = {
    nama: "Budi",
    umur: 21,
    isMarried: false // ? optional 
}

// function mirip kek yang td , bedanya kita bisa nentuin tipe data returnnya
// kalau ga sesuai bakal error
// kalau gaada returnnya bisa pake void
// kalau mau returnnya bebas bisa pake any
// kalau mau returnnya multi tipe data bisa pake | (or)
// jgn pake any mendingan langsung di deklarasiin aja datanya
function create(): number {
    return 2;
}

function create4(): void {
    let a = 1
    let b = 2
    let c = a + b;
    console.log("Hasilnya adalah " + c);
}

create4();

//function implicty
// karena bukan void jadi harus ada returnnya dan result harus di tampung 
function add(a: number, b: number) { // bisa kek gini kalau bukan void
    return a + b;
}

add(5, 2);


// ini arrow function
const create2 = (): string => "Hello World 2";

const result = create2();

console.log({ isLogin });   
console.log(namaSaya);
console.log({ password });
//console.log({ umur });
console.log({temanSaya})

//
console.log(create());
console.log(create2());