// Nullish Coalescing Operator
/*  1. Nullish value adalah null dan undefined 
    2. Nullish Coalescing Operator (??) adalah sama dgn tenary operator, yg membedakan adalah kondisi, jika bernilai null dan undefined, baru nilai default nya diambil */

// Tanpa Nullish Coalescing Operator

let parameter = null;
let data = parameter;
if (data === undefined || data === null) {
  data = "Data Default";
}
document.writeln(`<p> ${data} </p>`);

// mengunakan Nullish Coalescing Operator
let parameter2;
let data2 = parameter2 ?? "Data Default";
document.writeln(`<p> ${data2} </p>`);
