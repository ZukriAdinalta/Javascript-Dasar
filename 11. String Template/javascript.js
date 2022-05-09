// String Template
/*  1. String Template dimana kita bisa mensubtitusi data dari luar string ke dlm string, seperti mengambil data variable atau bahkan melakukan operasi matematika.
    2. Untuk menggunakan String Template, cara perbuatan string harus menggunakan backtrick (``), bukan petik satu ('') atau petik dua (""). */

const firstName = "Zukri";
const lastName = "Adinalta";
// cara pakai backtrick
const template = `Name : ${firstName} ${lastName}`;
//cara lama
const lama = "Name : " + firstName + " " + lastName;

console.info(template);
console.info(lama);

// menambahakan Expression di string template
const fullName = "Zukri Adinalta";
const value = 80;
const template2 = `Nama : ${fullName}, Lulus ${value > 75}`;

console.info(template2);

//Multiline String
/*  1. String Template digunakan utk membuat string multi line
    2. kita cukup menambahkan enter di text nya */

const multilineString = `
  Nama Saya adalah Zukri Adinalta
  Umur saya 26 tahun
  Lulusan Uin suska riau
Mantap
`;
document.writeln("<pre>");
document.writeln(multilineString);
document.writeln("</pre>");
