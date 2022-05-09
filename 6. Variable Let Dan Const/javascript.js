//  Let dan Const
/*  1. sebelum 2015, kata kunci variable menggunakan var.
    2. versi ECMAScript 2015, untuk membuat variabel menggunakan let dan const.
    3. javascript sekarang tdk rekomendasikan var utk membuat variable, namun di ganti dgn let, hal ini karena ada masalah drdesan awal var. */
let fullName = "Zukri Adinalta";
let fistName = "Zukri";
let lastName = "Adinalta";

document.writeln(fullName);
document.writeln("</br>");
document.writeln(fistName);
document.writeln("</br>");
document.writeln(lastName);
document.writeln("</br>");

// Kata Kunci Const
/*  1. kata kunci let sm dgn var bisa di ubah-ubah sesuka hati
    2. kata kunci const, ketika sebuah variable sudah diisi variable maka variable itu gk bisa diubah.
    3. variable ini kadang juga di sebut constant. */

/* const gak bisa diubah
const aplikasi = "Belajar Javascript Dasar";
aplikasi = "gak mau belajar"; //error
document.writeln(aplikasi);
*/
