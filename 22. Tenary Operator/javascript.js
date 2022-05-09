// Tenary Operator
/* `1. Tenary Operator adalah operator sederhana dr if statement
    2. Tenary Operator terdiri dr kondisi yg di evaluasi, jika nilanya true maka nilai pertama diambil, jika false maka nilai kedua diambil */

// tanpa tenary operator

const nilai = 60;
let ucapan;

if (nilai >= 75) {
  ucapan = "Selamat Anda LULUS";
} else {
  ucapan = "Silahkan Coba Lagi";
}

document.writeln(`<p> ${ucapan} </p>`);

// Dengan tenary operator

const value = 75;
const kata = value >= 75 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi";
document.writeln(`<p> ${kata} </p>`);
