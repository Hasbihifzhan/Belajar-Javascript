// Operator
// Operator adalah sistem operasi yang ada di bahasa pemrograman

// Jenis"nya
// 1. Operator Aritmatika : Sistem operasi Matematika 
// + - * / %
// KuKaBaTaKu = (), *, /, +, -

var nilai1 = 12
var nilai2 = 15

var penjumlahan = nilai1 + nilai2
var pengurangan = nilai2 - nilai1
var perkalian = nilai1 * nilai2

console.log(penjumlahan)
console.log(pengurangan)
console.log(perkalian)

// modulus adalah sisa hasil bagi 

var nilai3 = 10
var nilai4 = 5
var nilai5 = 7

var modulus1 = nilai3 % nilai4
var modulus2 = nilai3 % nilai5
console.log(modulus1)
console.log(modulus2)


// 2. Operator Assignment(penugasan) : Menugaskan ke suatu variable
//+= , -=, *=, /=,  %=

var nilai7 = 2
nilai7 += 2
nilai7 *= 2
nilai7 /= 2

console.log(nilai7)

// 3. Operator Perbandingan : Sistem operasi untuk membandingkan 2 buah nilai
// == >= <= != < >
// === >== <== !== 

var nilaiA = 20
var nilaiB = 20

console.log(nilaiA == nilaiB)
console.log(nilaiA >= nilaiB)
console.log(nilaiA <= nilaiB)

var nilaiC = 20
var nilaiD = "20"

console.log(nilaiC === nilaiD)

// 4. Operator Logika : Sistem operasi yang berupa logika pemrograman || && !

// || = or / atau
// Jika salah satu kondisi bernilai true maka hasilnya adalah true
console.log(true || true)
console.log(false || true)
console.log(false || false || false || true)
console.log(false || false)

// && = and / dan
// Jika salah satu kondisi bernilai false maka hasilnya adalah false
console.log(true && true)
console.log(true && false)
console.log(false && false)

// ! not / bukan
// Kebalikan atau lawan kata dari nilainya
console.log(!true)
console.log(!true)


// 5. Operator Ternary
// Opearator yang berupa 3 pembanding

var number = 35
console.log(number > 25 ? true : false)

var married = true
console.log(married == true ? "sudah menikah" : "Belum menikah")

// 6. Operator String : Operator yang berfungsi untuk menghubungkan string

var namaDepan = "Hasbi"
var namaBelakang = "Hifzhan"

var namaLengkap = namaDepan + namaBelakang
var namaLengkap2 = namaDepan + " " + namaBelakang

console.log(namaLengkap)
console.log(namaLengkap2)

// 7. Operator Typeof : Operator untuk menampilkan jenis tipe data

console.log(typeof(12))
console.log(typeof("12"))
console.log(typeof(true))
console.log(typeof("halo"))
console.log(typeof(null))