// PARAMETER
// Parameter adalah variable yang ditulis di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function dipanggil.

// ARGUMENT
// Nilai yang dikirimkan ke parameter saat fungsi dipanggil

// contoh:

function tambah1(a,b) {
    return a + b;
}
// (a,b) = adalah parameter

var hasil1 = tambah1(2,3);
console.log(hasil1);
// (2,3) = adalah argument

//ada beberapa cara menuliskan argument:
// 1.  Menggunakan var
function tambah2(c,d) {
    return c + d;
}

var c = 10;
var d = 20;
var hasil2 = tambah2(c,d);
console.log(hasil2);

// 2. User yang memasukan angka
function tambah3(e,f) {
    return e + f;
}

var e = parseInt(prompt('Masukan nilai 1 :'));
var f = parseInt(prompt('Masukan nilai 2 :'));
var hasil3 = tambah3(e,f);
console.log(hasil3);

// 3. Bisa juga di gabung dengan operator aritmatika
function tambah4(g,h) {
    return g + h;
}

var g = parseInt(prompt('Masukan nilai 1 :'));
var h = parseInt(prompt('Masukan nilai 2 :'));
var hasil4 = tambah4(g + 2,h + 2);
console.log(hasil4);

// 4. bisa argumentnya berupa function
function tambah5(i,j) {
    return i + j;
}

function kali(k,l) {
    return k * l;
}

var hasil5 = kali(tambah5(1,2), tambah5(3,4));
console.log(hasil5)

// Jika parameter dan argumentnya tidak sesuai:
// 1.jika parameter lebih sedikit dari argument,maka argument kelebihannya akan diabaikan
function tambah6(m,n) {
    return m + n;
}

var coba1 = tambah6(5,10,20);
console.log(coba1)

// 2.jika parameternya lebih banyak dari argument,maka parameter kelebuhannya akan diisi dengan nilai undefined
function tambah7(o,p,q) {
    return o + p + q;
}

var coba2 = tambah7(5,10);
console.log(coba2)

// ARGUMENTS
// Array yang berisi nilai yang dikirimkan saat fungsi dipanggil
// Disebut juga sudo variable / variable semu

function contoh() {
    return arguments;
}

var coba3 = contoh(5,10,20,'hi',false);
console.log(coba3)

function tambah8() {
    var hasil6 = 0
    for( var r = 0; r < arguments.length; r++) {
        hasil6 += arguments[r];
    }
    return hasil6
}
var coba4 = tambah8(1,2,3);
console.log(coba4);
