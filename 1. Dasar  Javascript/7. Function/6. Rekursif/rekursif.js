// REKURSIF
// Rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
// pastikan jika menggunakan rekursif harus berakhir dan menghasilkan nilai
// seamua looping bisa dibuat rekursifnya, tapi tidak sebaliknya

// Contoh
    // function tampilAngka(n) {
    //     console.log(n)
    //     return tampilAngka(n-1)
    // }
    // tampilAngka(10);
    // pemanggilan ini tidak akan berakhir

// kondisi akhirnya disebut Base Case
// yaitu kondisi akhir dari rekursif yang menghasilkan nilai
    function tampilAngka(n) {
        if( n === 0) return;
        console.log(n)
        return tampilAngka(n-1)
    }
    tampilAngka(10);

// contoh lainnya menggunakan faktorial
    function faktorial(m) {
        if ( m === 0 ) return 1;
        return n * faktorial(m-1);
    }

