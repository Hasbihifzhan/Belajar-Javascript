// Tebak angka dari 1 - 10
// Kamu punya 3 kesempatan

// Masukan angka tebakan

// terlalu RENDAH
// ayo masih ada 2 kesempatan lagi

// terlalu TINGGI
// ayo masih ada 2 kesempatan lagi

// anda benar!
// angka yang dicari adalah :

// terlalu RENDAH
// kesempatan anda habis

// var chance = 3;
// while(chance >= 1 ) {
//     var user = prompt('tebak dari angka 1-10' + '\n kamu punya ' + chance + ' kesempatan');
//     var comp = Math.floor(Math.random() * 10) + 1;

//     if(user == comp) {
//         alert('anda benar' + '\n angka yang dicari ' + comp);
//         break;
//     } else if(chance == 1) {
//         alert('kesempatan anda telah habis ');
//         break;
//     } else if(user > comp ) {
//         alert('terlalu TINGGI' + '\n kamu punya ' + chance + ' kesempatan');
//     } else if(chance < comp) {
//         alert('terlalu RENDAH' + '\n kamu punya ' + chance + ' kesempatan');
//     }
// chance--
// }

// Permainan tebak angka
var lagi = true;
while(lagi){
// Jawaban komputer
var comp = Math.floor(Math.random() * 10) + 1;


var chance = 3;
while(chance > 0){
    if(chance == 3){
        alert('Selamat datang di permainan tebak angka\n anda punya 3 kesempatan');
    } else {
        alert('kamu masih punya ' + chance + ' kesempatan!, ayo coba lagi.');
    }


// Tebakan pemain
var p = prompt('masukan angka tebakanmu : 1 - 10');


// Aturan Main
if (p == comp){
    alert ('Kamu BENAR!');
    chance = 0;
} else if(p < comp){
    alert('Tebakanmu terlalu rendah');
    chance--;
} else {
    alert('Tebakanmy terlalu tinggi');
    chance--;
}
}
alert('Jawabannya adalah ' + comp);
lagi = confirm('Coba lagi?');
}