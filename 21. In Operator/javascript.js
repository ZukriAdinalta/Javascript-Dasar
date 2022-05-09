// In Operator
/* 1. in operator adalah utk menecek apakah sebuah property ada dlm object atau tidak.
  2. Jika property tersebut ada object maka hasilnya true, jita tdk ada maka false
  3. in juga bisa digunakan utk cek index di array */

let person = {
  firstName: "Zukri",
  lastName: "Adinalta",
};

if ("firstName" in person) {
  // nilai true
  console.info(`Hello ${person.firstName}`);
} else {
  console.info("hello");
}

// Peringatan
/*  1. in Operator hanya menegcek apakah sebuah properti atau index ada atau tidak.
    2. jadi walau pun nilai properti atau index nya undefined atau null maka tetap di anggap ada*/

const student = {
  firstName: "Zukri",
  middleName: undefined,
  lastName: "Adinalta",
};

if ("middleName" in student) {
  console.info(`Hello ${person.middleName} `);
} else {
  console.info(Hello);
}

const names = [null, "Zukri", null];
const result = 0 in names;
console.info(`${result} `);
