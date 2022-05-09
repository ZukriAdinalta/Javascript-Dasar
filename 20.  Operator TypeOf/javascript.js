//  Operator TypeOf
/*  1. TypeOf adalah yg digunakan untuk melihat tipe data sebuah value dan variable
    2. karena javascript merupakan dynamic  languange,jadi kadang kita memerlukan mengecek tipe data value dan variable.
    3. hasil dari operator typeof adalah string tipe datanya */

let data = true;
if (typeof data === "number") {
  alert("Number");
} else if (typeof data === "string") {
  alert("String");
} else if (typeof data === "boolean") {
  alert("Boolean");
} else if (typeof data === "object") {
  alert("object");
}
