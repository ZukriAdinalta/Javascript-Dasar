// Konversi String Dan Number
/*  1. saat membuat aplikasi,kadang kita input dr pengguna selalu dlm bentuk string
    2. mengelolah data dlm bentuk number maka sangat disarankan konversi tipe data.   */

const value1 = "1";
const value2 = 2;
const sum = value1 + value2; //12
document.writeln(`${sum}`);
document.writeln(`</br>`);

// Melakukan Konversi String Dan Number
/*  1. mengkonversi dari string ke number (Bilangan Bulat) [parseInt(string)], 
    2. mengkonversi dari string ke number (Bilangan Pecahan) [parseFloat(string)], 
    3. mengkonversi dari string ke number (Bilangan Bulat atau Pecahan) [Number(string)], 
    4. mengkonversi dari number ke string  [number.toString()],  */
document.writeln(`<h4> Melakukan Konversi String Dan Number </h4>`);
const value3 = parseInt("1");
const value4 = 2;
const sum2 = value3 + value4; //12
document.writeln(`<p> ${sum2} </p>`);

document.writeln(`<p> ParseInt :  ${parseInt("1.1")}</p>`);
document.writeln(`<p> ParseFloat :  ${parseFloat("1.1")}</p>`);
document.writeln(`<p> Number :  ${Number("1.1")}</p>`);

const a = 1;
const b = 2;
const total = a.toString() + b.toString();
document.writeln(`<p> Number To String :  ${total}</p>`);

// Nan
/*  1. Jika ternyata data string kita konversi ke number  bukanlah data yg valid maka hasilnya adalah NaN (Not a Number)
    2. Nan Adalah number yg menyebutkan bahwa ini bukan number
    3. Jika NaN dioperasikan dgn data number lainnya, maka hasilnya akan menjadi NaN lagi.  
    */

// parseFloat dan parseInt jika kesalahan di belakang masih di tolerin kalau di depan maka hasilnya NaN
document.writeln(`<h4> Nan </h4>`);
document.writeln(`<p> ParseInt :  ${parseInt("Salah1.1")}</p>`);
document.writeln(`<p> ParseFloat :  ${parseFloat("1.1Salah")}</p>`);

// number tidak akan tolerin kesalahan apapun.
document.writeln(`<p> Number :  ${Number("salah1.1")}</p>`);
document.writeln(`<p> Number :  ${Number("1.1salah")}</p>`);

// Operasi Pada NaN

const c = Number("salah"); // NaN
const d = 100;
const hasil = c + d; // NaN

document.writeln(`<p> Hasil : ${hasil}</p>`);

//  IsNaN() Function
/*  1. mengecek apakah sebuah number itu NaN atau Bukan
    2. untuk melakukannya kita menggunakan function IsNaN(Number)
    3. Hasil nilinya boolean true jikan NaN, false jka bukan  */

document.writeln(`<h4> IsNaN() Function </h4>`);
document.writeln(`<p> ${isNaN(c)} </p>`);
document.writeln(`<p> ${isNaN(d)} </p>`);
