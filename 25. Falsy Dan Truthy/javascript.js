// Falsy Dan Truthy
// Falsy
/*  1. Falsy atau falsey => value yg ketika didalam konteks diagap boolean / diagap false
    2. sala satu fitur dr javascript yg berguna kadang sering di bingungkan
    3. tidak hanya boolean tp diluar boolean jg bisa. */
/* Data Falsy diagap false => boolean false (false), number 0 dan -0 diangap false (0, -0), semua string kosong diagap false ("",'',``), null, underfined, NaN  */

//truthy
/*  1. truthy kebalikan dr falsy, dimana datanya diagap bernilai true.
    2. data yg bukan bernilai falsy itu nilai truthy */

// Kode Falsy Dan Truthy
let data = "";
if (data) {
  document.writeln(`<p> TRUE </p>`);
} else {
  document.writeln(`<p> FALSE </p>`);
}
