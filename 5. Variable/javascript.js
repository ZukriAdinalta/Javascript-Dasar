// Variable
/*  1. variable adalah tempat utk menyimpan data.
    2. dgn menyimpan data di variable kita bisa manggil data itu kembali dengan menyebutkan nama varable.
    3. utk membuat variable di javascript kita menggunakan kata kunci var diikuti dng nama variable.
    4. javascript adalah dynamic languange, artinya javascript tidak terpaku harus menggunakan satu tipe data, bisa mengubah tipe data di variable yang sama.
    5. variable tidak boleh mengadung spasi.  */
var fullName;
var fistName;
var lastName;

// Mengubah value di variable
/*  1. setelah variable di deklarasikan, kita bisa mengubah value atau nilai di dlm variabel tersebut.
    2. untuk mengubahnya, kita bisa mengunakan perintah nama variable diikuti dgn tand sama dengan (=) lalu diikuti dgn valuenya.  */
fullName = "Zukri Adinalta";
fistName = "Zukri";
lastName = "Adinalta";

// membuat variabel langsung dgn value
/*  1. di javascrip kita bisa membuat variabel langsung dgn isi value.
    2. caranya menggunakan kata kunci var, diikuti nama variabel, lalu diikuti dgn tanda sama dengan (=), dan diikuti dgn value atau nilainya.*/

var fullNameValue = "Zukri Adinalta";
var fistNameValue = "Zukri";
var lastNameValue = "Adinalta";

// Mengakses Variable
/*  1. keutungan variable adalah variable bisa digunkan kembali
    2. mempermudah kita membutuhkan data berkali-kali.
    3. mengakses variable kita cukup menyebut nama variabel. */
document.writeln("<h4>Mengubah Value Di Variable</h4>");
document.writeln(fullName);
document.writeln("</br>");
document.writeln(fistName);
document.writeln("</br>");
document.writeln(lastName);
document.writeln("</br>");
document.writeln("<h4>Membuat Variabel Langsung Degan Value</h4>");
document.writeln(fullNameValue);
document.writeln("</br>");
document.writeln(fistNameValue);
document.writeln("</br>");
document.writeln(lastNameValue);
document.writeln("</br>");
