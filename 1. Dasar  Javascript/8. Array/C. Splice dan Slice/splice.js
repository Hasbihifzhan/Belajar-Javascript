// Lanjutan dari manipulasi array

// Menggunakan Method Pada Array

    var arr = ["Hasbi","Hifzhan","Muhammad","Helmi"];

// 3.slice & splice

    // slice : mengiris arraynya digunakan untuk mengambill beaberapa arraynya dan dijadikan array yang baru
    // slice menghasilkan array baru
    // slice(awal,akhir);
    var arr1 = ["Hasbi","Hifzhan","Muhammad","Helmi"];
    var arr2 = arr.slice(1,3);
    console.log(arr2.join(' - '));
    // jika kita ingin memunculkan index ke 1 & 2 maka penulisannya arr.slice(1,3) bukan (1,2)
    // index awalnya terbawa index akhirnya dikurangi 1

    // splice : menyambung/menambal bisa menyispkan elemen ditengah-tegah arraynya
    // splice(indexAwal, maudihapusberapa, elemenBaru1, elemenBaru2, .....)
    // arr.splice(2, 0, 'fizhbieries');
    // console.log(arr.join(" - "));