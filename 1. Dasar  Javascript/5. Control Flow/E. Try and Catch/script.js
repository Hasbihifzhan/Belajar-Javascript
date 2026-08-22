// try and catch adalah statement dalam JavaScript yang digunakan untuk menangani error (exception).

function teriak(msg) {
    try {
        console.log(msg.toUppercase());
    } catch (error) {
        console.log(error);
        console.log('Silahkan isi dengan tipe data string')
    }
}

// tulis di console
// teriak('ojek')
// teriak(123)