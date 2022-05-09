// For Loop
/*  1. For Adalah salah satu kunci utk melakukan perulangan
    2. blok kode yg digunakan akan selalu diulangi selama kondisi for terpenuhi. */

// Sintak Perulangan For
/*  for(init statement; kondisi; post statement) {
    // blok perulangan 
  };
  penjelasan: 
  1. Init statement => akan dieksekusi hanya sekali diawal sebelum perulangan.
  2. kondisi => dilakukan pengecekan dlm setiap perulangan, jika true pelurangan akan dilakukan jika false perulangan dihentikan.
  3. post statement => akan di eksekusi setiap diakhir perulangan.
  4. Init statement dan post statement => tdk wajib diisi, jika kondisi tidak disi maka diagap benilai true
  */

// Kode - perulangan tanpa henti
/* for (;;) {
  alert("For Loop");
} */

// kode Perulangan denga kondisi
document.writeln(`<h5>Perulangan dengan Kondisi</h5>`);
let counter = 1;
for (; counter <= 5; ) {
  document.writeln(`<p> Perulangan Ke ${counter} </p>`);
  counter++;
}

// kode Perulangan denga kondisi Init statement
document.writeln(`<h5>Perulangan dengan Init statement</h5>`);
for (let counter = 1; counter <= 6; ) {
  document.writeln(`<p> Perulangan Ke ${counter} </p>`);
  counter++;
}

// kode Perulangan denga kondisi Post statement
document.writeln(`<h5>Perulangan dengan Post Statement</h5>`);
for (let counter = 1; counter <= 7; counter++) {
  document.writeln(`<p> Perulangan Ke ${counter} </p>`);
}
