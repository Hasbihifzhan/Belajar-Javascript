// Function
// Function adalah bagian kecil dari sebuah program yang dapat dipanggil berulang kali. 
// Function adalah blok kedoe yang dibuat untuk melakukan tugas spesifik
// Blok dapat dipanggil berulang kali
// Memudahkan penelusuran
// Reusability

// Cara kerja function:
// 1. Input : masukan bahan / material kedalam function
// 2. Function : akan melakukan seusatu terhadap bahan / material tadi
// 3. Output : menghasilkan sesuatu

// Function yang baik hanya mengerjakan 1 hal saja

// Syntaks Function

// 1. Built in function : function yang sudah tersedia di javascript
    // Alert - Console.log

// 2. Function Declaration
    // - Deklarasikan dengan key function
    // - Buat nama functionnya

    function handlerLamp(isActive) {
        // - Action
        // - Action atau kode yang dijalankan
        console.log('Lampu on CLICK ' + isActive)
    }

    // - Function harus dipanggil untuk menjalankan function
    handlerLamp()
    handlerLamp(true);
    handlerLamp(false);
    handlerLamp('Lampu menyala');

// Function memiliki 2 atribut yang harus dikenali
    // Parameter : nilai yang di assignkan saat deklarasi function (menerima nilai)
        // variabel yang berada di dalam kurung setelah nama function(isActive)
    // Argument  : nilai yang di assignkan saat pemanggilan function (mengirim nilai)
        // variabel yang berada di dalam kurung setelah pemanggilan(true)(false)('Lampu menyala')
    // ketika di pemanggilan kita tidak mengisi argumentnya maka hasilnya 'undefined'
        // handlerLamp()

// Contoh menghitung luas persegi panjang

    // function luasPersegiPanjang(p,l) {
    //         // Action
    //     let panjang = p
    //     let lebar = l
    
    //     let luas = panjang * lebar
    
    //     console.log(luas)
    // }
    
    // luasPersegiPanjang(8, 4);
    // luasPersegiPanjang(18, 2);
    // luasPersegiPanjang();
    
    // let prompPanjang = parseInt(prompt("Masukkan nilai panjang"))
    // let prompLebar = parseInt(prompt("Masukkan nilai lebar"))
    
    // luasPersegiPanjang(prompPanjang,prompLebar)