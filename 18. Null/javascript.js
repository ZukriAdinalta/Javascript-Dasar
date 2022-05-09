// Null
/*  1.  Null merupakan representasi data kosong
    2. Null berbeda dgn Undefined, null berarti variable sudah ditambahkan  value nya hanya saja value nya null
    3. sedangkan underfined variable belum ditambahkan value apapun */

let names = null;
if (names === undefined) {
  console.info("Selamat Datang undefined");
} else if (names === null) {
  console.info("selamat datang null");
} else {
  console.info(`Hallo ${names}`);
}
