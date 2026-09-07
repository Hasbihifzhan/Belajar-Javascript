// Call Stack Function: Mekanisme untuk interpreter untuk melacak lokasi skrip yang memanggil fungsi-fungsi kyang sedang dijalankan dan fungsi apa yang dipanggil dari dalam fungsi itu

// contoh call stack dengan rumus pythagoras

const perkalian = (x, y) => x * y;
const akar = x => perkalian(x, x);
const pythagoras = (a, b, c) => {
    return akar(a) + akar(b) === akar(c);
}

pythagoras(3, 4, 5);
// hasilnya bisa di coba di pythontutor.com/visualize