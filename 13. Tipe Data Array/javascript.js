//Tipe Data Array
/*  1. Array adalah tipe data yg berisikan kumpulan data.
    2. array pd javascript memiliki sift dinamis, artinya datanya bisa bertambah  dgn sendirinya saat memasukan data ke dlm array
    3. tipe data aray menggunakan kurung kotak [] */

let arrayKosong = [];
let ArrayNama = ["Zukri", "Adinalta"]; //index array = 0 dan 1 panjang array 1 dan 2

// cara kerja Array
/*  1. setiap array akan disimpan dalam posisi berurutan, dimana urutan pertama adalah 0.
    2. setiap kita menambahkan array, otomatis data disimpan diuruan terakhir.
    3. Urutan di array disebut dengan index   */

const name = [];
name.push("Zukri");
name.push("Adinalta", 26, true);
console.table(name);

// Operasi Aray
/*  1. Array.push(value) menambah data ke Array
    2. array.length => utk mendapatkan panjang Array 
    3. array[index] => mendapat data di posisi index
    4. array[index]= value => mengubah data di posisi index
    5. delete array [index] => menghapus data di posisi index, tp index tdk bergeser*/

const names = [];
names.push("Zukri");
names.push("Adinalta", 26, true);

names[0] = "Kenzo";
names[1] = "Putra";

console.table(names);
console.table(names.length);
console.info(names[0]);
console.info(names[1]);

delete names[3];
console.table(names);

names.push("Tambah Lagi");
console.table(names); // tetap Array ke 3 di delete

names[3] = "Diubah Lagi";
console.table(names);

// Perlu Diingat
/*  1. data didlm array tidak ada batasnya.
    2. bisa memasukan data apapun ke dlm array.
    3. juga bisa memasukkan array ke dlm array */
names.push(["Desnando", "Siti", "Nazar", 1, 2, 3, 4, 5, 6]);
console.table(names);
