// Label
/*  1. Label adalah digunakan dgn kata kunci break dan continue
    2. secara default kita melakukan break atau continue, akan melakukan terhadap perulangan dimana break dan continue
    3. menggunakan label, bisa melakukan break dan continue terhadap perulangan yg kita ingin, asalkan perulangan menggunakan kata label
    4. Membuat label, digunakan nama label lalu diikuti dgn titik (:) */

// Kode Label
/*
loopi: for (let i = 0; i < 100; i++) {
  loopj: for (let j = 0; j < 10; j++) {
    document.writeln(`<p> ${i} - ${j} </p>`);
  }
} */

// Kode break dan continue di label
loopi: for (let i = 0; i < 10; i++) {
  loopj: for (let j = 0; j < 100; j++) {
    if (j > 10) {
      continue loopi;
    }
    document.writeln(`<p> ${i} - ${j} </p>`);
  }
}
