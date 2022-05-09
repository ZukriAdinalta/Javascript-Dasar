// Operator Matematika
/* javascript mendukung operator mtk utk tipe data number, seperti operator aritmatika, operator augmented assignments, operator Unary dll. */

// Operator Aritmatika
/* tambah = +, kurang = -, kali = *, exponensial = **, pembagian = /, sisa bagi = %.  */

document.writeln("<h4> Operator Aritmatika </h4>");

let result = 1 + 2; //3
document.writeln("<p> 1 + 2 = " + result + "</p>");
let originResult = result;

result = result - 1; //2
document.writeln("<p> " + originResult + " - 1 = " + result + "</p>");
originResult = result;

result = result * 2; //4
document.writeln("<p> " + originResult + " x 2 = " + result + "</p>");

// Operator Augmented Assignments
// mempersingkat Operator Aritmatika.

document.writeln("<h4> Operator Augmented Assignments</h4>");

let resultAA = 1 + 2; //3
document.writeln("<p> 1 + 2 = " + resultAA + "</p>");
let originResultAA = resultAA;

resultAA -= 1; //2
document.writeln("<p> " + originResultAA + " - 1 = " + resultAA + "</p>");
originResultAA = resultAA;

resultAA *= 2; //4
document.writeln("<p> " + originResultAA + " x 2 = " + resultAA + "</p>");

// Operator Unary
/* cukup membutukan satu data. contohnya
menandakan nilai positif = (+), menandakan nilai negatif = (-), increment menaikan 1 angka = (++), Decrement, menurunkan 1 angka (--)  */

document.writeln("<h4> Operator Unary</h4>");

let resultU = +1; // menjadi positif
document.writeln("<p> " + resultU + "</p>");

resultU--; // result = result -1; atau result -=1;
document.writeln("<p> " + resultU + "</p>");

resultU++; // result = result +1; atau result +=1;
document.writeln("<p> " + resultU + "</p>");

resultU = -resultU; // menjadi negatif -1
document.writeln("<p> " + resultU + "</p>");
