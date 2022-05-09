/*  1. tipe data string atau text = yang berisi kumpulan kosong atau lebih karakter.
    2. tipe data string memerlukan petik dua("") atau petik satu('') sebelum dan sesudah isi textnya. */
document.writeln("Zukri Adinalta");
document.writeln("</br>");
// Menambah string
// data string bisa di gabungkan menggunakan operator + plus
document.writeln("Nama Depan :" + " Zukri");
document.writeln("</br>");
document.writeln("Nama Belakang :" + " Adinalta");
document.writeln("</br>");
document.writeln("Umur : " + 26 + " Tahun");
document.writeln("</br>");

// Escape Sequence
/* javascript mendukung Escape Sequence di string. Escape sequence merupakan karakter khusus, seperti enter, tab dll
  contoh : \n => enter, \t => tab, \' => ', \" => ", \\ => \   */
document.writeln("<textarea cols='100' rows='10'>");
document.writeln("Zukri \nAdinalta");
document.writeln("\\Home\\Adinalta");
document.writeln("' Zukri Adinalta '");
document.writeln('" Belajar Javascript " ');
document.writeln("</textarea>");
