// Do While Loop
/*  1. Do While Loop => Perulangan yg mirip dgn while. pebedaan pada pengecekan kondisi
    2.pengecekan while loop dilakukan diawal sebelum dilakukan, sedngkan di do while dilakukan setelah perulangan dilakukan.
    3. dalam do while loop minimal dilakukan sekali perulangan walaupun kondisi tdk bernilai true. */

//kode perulangan do while loop
let counter = 1;
do {
  document.writeln(`<p>Perulangan Ke ${counter} </p>`);
  counter++;
} while (counter <= 10);
