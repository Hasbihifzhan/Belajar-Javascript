// ARRAY
// Array adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variable), yang setiap elemennya memiliki index.
// Array itu sebuah variable yang dapat menampung lebih dari satu/banyak nilai

// Karakteristik
// 1. Disebut juga varieble jamak, yang mempunyai banyak element
// 2. Kumpulan pasangan key dan nilai / key and value pair
    var binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];
            // atau
    var binatang2 = []
    binatang2 = ['kucing','kelinci','monyet','panda','koala','sapi'];
// 3. Key adalah index pada array dengan tipe integer yang dimulai dari 0
    console.log(binatang[4]);
    console.log(binatang2[3]);
// 4. Array pada javascript bertipe object
    console.log(typeof(binatang));
    console.log(typeof(binatang2));
// 5. Array pada javascript memiliki fungsi / method lenght untuk menghitung jumlah elemen didalamnya
    console.log(binatang.length);
    console.log(binatang2.length);
// 6. Elemen pada array boleh memiliki tipe data yang bebeda
    var hari = ['senin','selasa','rabu'];
    var mhs = ['Hasbi','Hifzhan','Muhammad','Helmi'];
    var angka = [10,123,2002];
    var myArr = ['teks',2,false]
    var myFunc = function() {
        alert('Hello World!');
    };
    var myArr2 = ['teks',false,myFunc];
// array multi dimensi
    var myArr3 = ['teks',2,false,myFunc,[1,2,3]];
    console.log(myArr3[4][1]);
    