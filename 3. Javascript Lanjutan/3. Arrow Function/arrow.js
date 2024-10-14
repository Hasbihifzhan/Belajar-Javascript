// ARROW FUNCTION
// Arrow function adalah bentuk lain yang lebih ringkas dari Function Expression

// Function Expression
const tampilNama = function (nama) {
    return `halo, ${nama}`;
}
console.log(tampilNama('Hasbi'));

// cara membuat arrow function

// penulisan satu parameter
const tampilNama2 = (nama) => { return `Halo, ${nama};` }
console.log('Hasbi Hifzhan');
// jika parameter satu boleh tidak menggunakan kurung
const tampilNama3 = nama => { return `Halo, ${nama};` }
console.log('Hasbi Hifzhan Muhammad');

// penulisan parameter lebih dari satu
const tampilNama4 = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`;
}
console.log(tampilNama4('Hifzhan', 'Malam'));

// implisit return
// jika isi dari functionnya hanya return saja maka tidak usah menuliskan returnya dan tidak usah memakai {kurung kurawal}
const tampilNama5 = nama => `Halo, ${nama}`; 
console.log('Hasbi Hifzhan');

// jika tanpa parameter wajib menuliskan (kurung)
const tampilNama6 = () => `Hello World!`;
console.log(tampilNama6());

// contoh lain

    let mahasiswa = ['Hasbi Hifzhan', 'Hafizh Ismiraz', 'Hamzah Alfarisi'];

    // Function Expression
    let jumlahHuruf = mahasiswa.map(function (nama) {
        return nama.length;
    });
    console.log(jumlahHuruf);

    // Arrow Function
    let jumlahHuruf2 = mahasiswa.map(nama => nama.length);
    console.log(jumlahHuruf2)

    // Jika ingin mengembalikan dalam bentuk object bukan array
    let jumlahHuruf3 = mahasiswa.map(nama => ({nama: nama, jmlahHuruf: nama.length}));
    console.log(jumlahHuruf3);
    // agar lebih rapih
    console.table(jumlahHuruf3)