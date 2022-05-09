// Underfined
/*  1. Underfined = sebuah kata kunci javascript
    2. Underfined = tipe data
    3. sebuah variabel yg belum ditambahkan nilai, maka artinya variabel tersebut merupakan tipe underfined.
    4. Underfined berbeda dengan NULL di bahasa pemprograman lain. */

// Underfined variabel

let name;
if (name === undefined) {
  console.info("undefined");
} else {
  console.info("defined");
}

// Underfined Array
const names = ["Zukri", "Adinalta"];
if (names[2] === undefined) {
  console.info("Array Undefined");
} else {
  console.info(`Array Defined`);
}

// Underfined Object Property

let person = {};

if (person.name === undefined) {
  console.info("Object Undefined");
} else {
  console.info("Object Defined");
}
