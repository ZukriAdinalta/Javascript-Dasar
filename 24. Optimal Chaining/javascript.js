// Optional Chaining
/*  1. Optional Chaining (?) merupakan digunakan utk mengamanankan kita ingin mengakses property sebuah object dari data nullish
    2. jika mencoba mengakses property dr sebuah object dari data nullish tanpa menggunakan Optional Chaining operator, maka akn terjadi error*/

// error mengakses property nullish
/* 
let person = {};
let country = person.address.country;
document.writeln(`<p> ${country} </p>`);
*/

// pengecekan menggunakan if

let person = {};
let say;

if (person.address !== undefined && person.address !== null) {
  say = person.address.country;
}
document.writeln(`<p> ${say} </p>`);

// Kode Optional Chaining

let tesk = {
  address: {
    country: "Indonesia",
  },
};
let country = tesk?.address?.country;
document.writeln(`<p> ${country} </p>`);
