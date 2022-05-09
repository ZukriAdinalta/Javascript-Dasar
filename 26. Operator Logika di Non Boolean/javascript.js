//  Operator Logika di Non Boolean
/*  1. operator logika AND (&&) dan OR (||) digunakan utk data boolean.
    2. Namun di javascript menggunakan operator (&&) dan OR (||)  untk tipe data non boolean */

// Operator OR OR (||) di Non Boolean
/*  1. OR (||)  membaca kiri ke kanan
    2. operator ini mengambil  nilai pertama yang truthy.
    3. tidak adaa nilai truthy maka nilai terakhir yg diambiil */

// Kode OR (||).
console.info("Hello" || ""); //Hello
console.info("" || []); // []
console.info("0" || "NOL"); //0
console.info(0 || "NOL"); // NOL
console.info(null || "NULL"); // NULL
console.info(undefined || "UNDEFINED"); //UNDEFINED
console.info(0 || false); // false

const person = {
  firstName: "Zukri",
  lastName: "Adinalta",
};
const names = person.firstName || person.lastName;
console.info(names);

// Operator AND (&&) di Non Boolean
/*  1. AND (&&) membaca kiri ke kanan
    2. operator ini mengambil  nilai pertama yang falsy.
    3. tidak adaa nilai falsy maka nilai terakhir yg diambiil */

// Kode AND (&&).
console.info("Hello" && ""); // ""
console.info("" && []); // ""
console.info("0" && "NOL"); // NOL
console.info(0 && "NOL"); // 0
console.info(null && "NULL"); // null
console.info(undefined && "UNDEFINED"); //undefined
console.info("undefined" && "null");
console.info(0 && false); // 0
