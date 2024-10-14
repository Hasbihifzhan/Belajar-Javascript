// Lanjutan dari manipulasi array

// Menggunakan Method Pada Array

// 4. Foreach & Map
    // foreach
    // foreach tidak mengembalikan array
    var angka = [1,2,3,4,5,6,7,8,9,];
    angka.forEach(function(e) {
        console.log(e);
    });

    var nama = ['Hasbi','Hifzhan','Muhammad','Helmi'];
    nama.forEach(function(e, i){
        console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
    })

    // map
    // map itu mengembalikan nilai array
    var angka2 = [1,2,3,4,5,6,7,8,9,];
    var angka3 = angka.map(function(e) {
        return e * 2;
    });
    console.log(angka3.join(' - '));

// 5. sort
    // untuk mengurutkan isi arraynya
    var angka4 = [5,1,3,2,9,6,8,7,4];
    console.log(angka4.join(' - '));
    angka4.sort();
    console.log(angka4.join(' - '));

    // mengurutkan angka awalnya saja
    var angka5 = [5,1,3,10,2,9,20,6,8,7,4];
    angka5.sort();
    console.log(angka5.join(' - '));

    // jika ingin mengurutkan yang benar harus menambahkan sebuah function perbandingan angkanya
    var angka6 = [5,1,3,10,2,9,20,6,8,7,4];
    angka6.sort(function(a,b) {
        return a-b;
    });
    console.log(angka6.join(' - '));