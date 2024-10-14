// REFACTORING
// Refactoring adalah sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah fungsionalitasnya.
// membuat kode lebih efisien

// Refactoring sederhana
// tanpa refactoring
    function jumlahVolumeDuaKubus(a, b) {
        var volumeA;
        var volumeB;
        var total;

        volumeA = a * a * a;
        volumeB = b * b * b;

        total = volumeA + volumeB

        return total;
    }
    console.log(jumlahVolumeDuaKubus(8, 3));

// Setelah menggunakan refactoring
    function jumlahVolumeDuaKubus(a, b) {
        return a * a * a + b * b * b;
    }
    console.log(jumlahVolumeDuaKubus(8, 3));