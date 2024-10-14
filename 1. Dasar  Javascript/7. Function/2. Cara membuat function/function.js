// Cara membuat function
// 1. Keyword function : untuk memberitahu interpreter kita mulai menulis function
// 2. Membungkus dengan {}
// 3. Memberi nama function yang jelas
// 4. Tuliskan (parameter/argumen) setelah nama function
// 5. Return: telah selesai / berhenti berjalan

// Contoh kasus
// Menjumlahkan volume 2 buah kubus

// Kode tanpa function

    // var a = 8;
    // var b = 3;
    // var volumeA;
    // var volumeB;
    // var total;

    // volumeA = a * a * a;
    // volumeB = b * b * b;

    // total = volumeA + volumeB;

    // console.log(total);

// Kode ini dengan function

    function jumlahVolumeDuaKubus(a, b) {
        var volumeA;
        var volumeB;
        var total;

        volumeA = a * a * a;
        volumeB = b * b * b;

        total = volumeA + volumeB

        return total;
    }

//  Cara menjalankan function
//  Bisa memunculkan secara berulang ulang

    console.log(jumlahVolumeDuaKubus(8, 3));
    console.log(jumlahVolumeDuaKubus(10, 15));
