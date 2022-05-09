// Tipe Data Object
/*  1. Tipe data object adalah tipe data yang mirip dengan data array.
    2. Yang membedakan aalah index pada tipe data object bisa digunakan string.
    3. index di object biasanya disebut attribut atau properties, bukan index.
    4. kalau tipe object kita gunakan kurung kurawal {}  */

const person = {};
// menambahkan atau mengubah
person["nama"] = "Zukri Adinalta";
person["alamat"] = "indonesia";
person["umur"] = 30;

console.table(person);

// menghapus
delete person["umur"];
console.table(person);

// Membuat Object Dengan Properties
const orang = {
  "Nama Lengkap": "Zukri Adinalta", //kalau lebih 1 kata gunakan 2 kutip ("")
  alamat: "Cangkeh",
  umur: 26,
};

console.table(orang);

// Mengakses Property Object
console.info(`Nama : ${orang["Nama Lengkap"]}`);
console.info(`Alamat : ${orang.alamat}`);
console.info(`Umur : ${orang.umur}`);
