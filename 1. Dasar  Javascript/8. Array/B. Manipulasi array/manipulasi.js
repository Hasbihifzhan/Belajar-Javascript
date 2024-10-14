// MANIPULASI ARRAY

// Menggunakan Cara Manual
// 1. Menambah isi array
    // var arr = [];
    // arr[0] = "Hasbi";
    // arr[1] = "Hifzhan";
    // arr[2] = "Muhammad";
    // arr[3] = "Helmi";

    // console.log(arr)
    // jika ada index yang terlewat maka index yang terlewat tersebut akan dibaca sebagai undefined

// 2. Menghapus isi array
    // var arr = ["Hasbi","Hifzhan","Muhammad","Helmi"];
    // arr[1] = undefined;
    // console.log(arr);

// 3. Menampilkan isi array
    // var arr = ["Hasbi","Hifzhan","Muhammad","Helmi"];
    // for( var i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

    // var arr = ["Hasbi","Hifzhan","Muhammad","Helmi"];
    // for( var i = 0; i < arr.length; i++) {
    //     console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
    // }

    // var arr = ["Hasbi","Hifzhan","Muhammad","Helmi"];
    // for( var i = 0; i < arr.length; i++) {
    //     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
    // }

// Menggunakan Method Pada Array

// 1. join : yang menggabungkan isi array dan mengubahnya menjadi "string"
    // var arr = ["Hasbi","Hifzhan","Muhammad","Helmi"];
    // console.log(arr.join());
    // jika tidak ingin menggunakan koma
        var arr = ["Hasbi","Hifzhan","Muhammad","Helmi"];
        console.log(arr.join(" - "));
// 2. push, pop, shift, unshift : untuk menambah atau menghapus elemen array
    // push & pop
    // push : untuk menambah elemen array diakhir array nya
    // bisa menambahkan beberapa elemen secara langsung
        // arr.push('hasbi');
        // console.log(arr.join(" - "));

    // pop : kebalikan dari push yaitu menghapus elemen array diakhir array nya
        // arr.pop();
        // console.log(arr.join(" - "));

    // unshift & shift
    // unshift : untuk menambah elemen baru diawal array nya
        arr.unshift("fizhbieries")
        console.log(arr.join(" - "));

    // shift : menghapus elemen diawal array nya
        // arr.shift();
        // console.log(arr.join(" - "));