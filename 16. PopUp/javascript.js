// Alert Prompt dan Confirm
/*  1. alert digunakan untuk memberi peringatan
    2. prompt digunakan utk meminta input string pengguna browser dlm bentuk popup input text.
    3. confirm digunakan untuk memintak input boolean dr pengguna browser dlm bentuk popup input pilihan */

//  Kode alert
/*  alert("Selamat Belajar"); */

//  Kode Prompt
/* const name = prompt("siapa nama anda?");
alert(`Selamat Datang ${name}`); */

// Kode Confirm
const masuk = confirm("Anda yakin mau masuk");
if (masuk) {
  const name = prompt("siapa nama anda");
  alert(`Selamat Datang ${name}`);
} else {
  alert("Selamat Tinggal");
}
