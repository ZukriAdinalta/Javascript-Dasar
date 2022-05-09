// Break And Continue
/*  1. pada switch, kita sebuah mengenal kata kunci break, yaitu utk menghentikan case dalam switch.
    2. sm dgn perulangan, break digunakan utk menghetikan seluruh perulangan.
    3. Namun berbeda dgn continue, continue digunakan utk menghetikan perulangan saat ini. lalu melanjutkan ke perulangan selanjutnya. */

// kode break
document.writeln(`<h4> Kode Break </h4>`);
let counter = 1;
while (true) {
  document.writeln(`<p> Perulangan Ke ${counter} </p>`);
  counter++;

  if (counter > 10) {
    break;
  }
}

// Kode Continue
document.writeln(`<h4> Kode Continue </h4>`);
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    //jika i dibagi 2 sama dengan 0 (Bilangan Ganjil)
    continue;
  }
  document.writeln(`<p>Perulangan Ganjil Ke-${i} </p>`);
}
