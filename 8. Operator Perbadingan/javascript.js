// Operator Perbadingan
/*  1. Operator Perbadingan adalah operasi utk membadingkan 2 buah data.
    2. operasi yg menghasikan nilai boolean (bnar/salah)
    3. jika nilai operasi benar maka nilainya true dan jika salah nilainya false */
/* lebih dari (>), kurang dari (<), lebih dari sama dgn (>=), kurang dari sama dengan (<=), sama dengan (==), sama dengan dan sama tipe data (===), tidak sama dengan (!=), tidak sama dengan dan tidak sama tipe (!==) */

let result = 5 == "5"; // true
document.writeln("<p>" + result + "</p>");

result = 5 === "5"; // false
document.writeln("<p>" + result + "</p>");

result = 5 > 10; // false
document.writeln("<p>" + result + "</p>");

result = 5 < 10; // true
document.writeln("<p>" + result + "</p>");

result = 5 != "5"; // false
document.writeln("<p>" + result + "</p>");
