// Prototipe: mekanisme yang digunakan objek JavaScript untuk mewarisi fitur/method satu sama lain.

const arr = [1,2,3]
arr.hello = () => {
    console.log('hello world')
}
console.log(arr)
arr.hello()

const arr2 = [4,5,6]
console.log(arr2.hello) 
//ini hasilnya akan undefined / eror karna kita hanya mendefinisikan suatu function ke dalam onject array kedalam variable array biasa(arr) bukan arr2

// kalau kita buatnya didalam object array utama
Array.prototype.hello = () => { //ini adalah object utama dari arraynya
    console.log('hello world')
}

const kelas1 = [1,2,3]
const kelas2 = [4,5,6]

kelas1.hello()
kelas2.hello()
// ini kelas1.hello atau kelas2.hello bisa dijalankan karna kita mendefinisikannya di object utama dari arraynya bukan array yang baru saja kita definisikan
// kita mendefinisikan di parentnya/aobject utama maka setiap turunannya ketika kita membuat tipe data array dengan value apapun maka bisa memanfaatkan method yang baru saja kita tambahkan di dalaam prototypenya

// contoh lain
const kelas3 = [7,8,9]
Array.prototype.pop = () => {
    return 'pop dinonaktifkan'
}
console.log(kelas3.pop())