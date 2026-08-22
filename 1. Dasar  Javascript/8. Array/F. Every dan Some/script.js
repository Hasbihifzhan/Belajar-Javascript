// Ecvery dan Some mengembalikan nilai boolean.

// EVERY
// true pada saat seluruh nilai yang ada pada suatu array memiliki kriteria yang sama.
// False jika sebaliknya.
// True jika kriterianya sama semua

const examScore = [80, 85, 70, 90, 93, 77];
const isGraduate = examScore.every((score) => score >= 75);
console.log(isGraduate); 
// nilainya false karna ada salah satu nilaiyang tidak sesuai kriteria yaitu 70

// SOME
//  True jika salah satu isi dari array memiliki kriteria yang sama.
// false jika sama sekali ridak ada yang sesuai kritria
// Hanya salah satu yang memiliki kriteria yang sama maka akan true nilainya

const nilaiUjian = [80, 85, 70, 90, 93, 77];
const lulus = examScore.some((score) => score >= 75);
console.log(lulus);
// nilainya true karna cukup dengan sebagian saja yang kriterianya sama