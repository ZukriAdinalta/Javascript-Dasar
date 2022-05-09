//If Expression
/*  1. If yang digunakan utk percabangan
    2. Percabangan artinya bisa di mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
      */

const examValue = 70;

if (examValue > 80) {
  document.writeln("<p> Good Joob </p>");
}
//else Expression
/*  1. blok if akan dieksekusi kondisi if bernilai true.
    2. melakukan eksekusi program tertentu jika kondisi if bernilai false, dan bisa dilakukan menggunakan else expression */
else {
  document.writeln("<p> Try Again Next Year</p>");
}

// Else If Expression
/* kadang dalam if,membutuhkan membuat beberapa kondisi maka bisa menggunakan else if expression (membuat beberapa percabangan) */

const Nilai = 76;
if (Nilai > 80) {
  document.writeln("<p> Niai A </p>");
} else if (Nilai > 70) {
  document.writeln("<p> Nilai B </p>");
} else if (Nilai > 60) {
  document.writeln("<p> Nilai C </p>");
} else {
  document.writeln("<p> Nilai D </p>");
}
