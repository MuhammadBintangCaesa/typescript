"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let namaSaya = "Muhammad Bintang";
let password = 123456;
let isLogin = false;
// nilai yang kosong // ini multi tipe data kalau pake I 
let umur;
// umur saya di isi nilainya // ini error ya karena ga sesuai dengan tipe data awalnya
//umur = true; // Boolean
// agar lebih aman, kita bisa pake tipe data any atau multi tipe data
// agar terpediksi dan minim error
// array biasa
let gender;
gender = ["Laki-laki", "Perempuan"];
//tuple array
let biodata;
biodata = ["Muhammad Bintang", 20, false];
// costume data object
let temanSaya;
temanSaya = {
    nama: "Budi",
    umur: 21,
    isMarried: false // ? optional 
};
// function mirip kek yang td , bedanya kita bisa nentuin tipe data returnnya
// kalau ga sesuai bakal error
// kalau gaada returnnya bisa pake void
// kalau mau returnnya bebas bisa pake any
// kalau mau returnnya multi tipe data bisa pake | (or)
// jgn pake any mendingan langsung di deklarasiin aja datanya
function create() {
    return 2;
}
function create4() {
    let a = 1;
    let b = 2;
    let c = a + b;
    console.log("Hasilnya adalah " + c);
}
create4();
//function implicty
function add(a, b) {
    return a + b;
}
add(5, 2);
// ini arrow function
const create2 = () => "Hello World 2";
const result = create2();
console.log({ isLogin });
console.log(namaSaya);
console.log({ password });
//console.log({ umur });
console.log({ temanSaya });
//
console.log(create());
console.log(create2());
//# sourceMappingURL=index.js.map