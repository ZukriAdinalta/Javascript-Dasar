// Operator Logika
/* operator logika adalah operator untk 2 buah data boolean. 
    Dan (&&), atau (||), kebalikan (!) */
// operator && (Dan)
/* jika nilai 1 true && nilai 2 true hasilnya true
  jika nilai 1 true && nilai 2 false hasilnya false 
  jika nilai 1 false && nilai 2 true hasilnya false
  jika nilai 1 false && nilai 2 false hasilnya false*/

// operator || (atau)
/* jika nilai 1 true || nilai 2 true hasilnya true
  jika nilai 1 true || nilai 2 false hasilnya true 
  jika nilai 1 false || nilai 2 true hasilnya true
  jika nilai 1 false || nilai 2 false hasilnya false*/

// operator ! (kebalikan) => operator unary
/* jika operator ! nilai 2 true hasilnya false
  jika opartor ! nilai 2 false hasilnya true */

let nilaiUjian = 78;
let nilaiAbsen = 70;

let lulusUjian = nilaiUjian > 75;
document.writeln("<h4> Operator && (Dan) </h4>");
document.writeln("<p> Ujian : " + lulusUjian + "</p>");
let lulusAbsen = nilaiAbsen > 75;
document.writeln("<p> Absen : " + lulusAbsen + "</p>");

let lulus = lulusUjian && lulusAbsen;
document.writeln("<p> Hasil Kelulusan : " + lulus + "</p>");

// contoh variable var
var aku = 20;
var kamu = 19;

var benar = aku > kamu;
var salah = aku < kamu;

// operator && (and)
var hasil = benar && salah;
document.write(`${benar} && ${salah} = ${hasil}<br/>`);

// operator || (or)
var hasil = benar || salah;
document.write(`${benar} || ${salah} = ${hasil}<br/>`);

// operator ! (not)
var hasil = !benar;
document.write(`!${benar} = ${hasil}<br/>`);
