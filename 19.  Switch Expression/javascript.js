// Switch Statement
/* 1. Switch adalah statement percabangan yg sama  dgn if, namun lebih sederhana cara pembuatan.
  2. Kondisi switch statement hanya utk perbadingan == */

let nilai = "C";

// Mengunakan switch
switch (nilai) {
  case "A":
    document.writeln("<p> Anda Lulus Dengan Nilai Memuaskan </p>");
    break;
  case "B":
  case "C":
    document.writeln("<p> Anda Lulus </p>");
    break;
  case "D":
    document.writeln("<p> Anda Tidak Lulus </p>");
    break;
  default:
    document.writeln("<p> Anda Tidak Lulus, Mungkin Salah Jurusan </p>");
}
// Menggunakan If
if (nilai === "A") {
  document.writeln("<p> Anda Lulus Dengan Nilai Memuaskan </p>");
} else if (nilai === "B" || nilai === "C") {
  document.writeln("<p> Anda Lulus </p>");
} else if (nilai === "D") {
  document.writeln("<p> Anda Tidak Lulus </p>");
} else {
  document.writeln("<p> Anda Tidak Lulus, Mungkin Salah Jurusan </p>");
}
