// Lanjutan dari manipulasi array

// Menggunakan Method Pada Array

// 6. filter & find
    // filter
    // untuk mencari nilai pada array dan mengembalikannya dalam bentuk array
    // bisa untuk banyak nilai
    var angka = [5,1,3,10,2,9,20,6,8,7,4];
    var angka2 = angka.filter(function(x) {
        return x > 5;
    });
    console.log(angka2.join(' - '));

    // find 
    // funsinya sama dengan filter akan tetapi tidak menghasilkan array tapi menghasilkan satu nilai saja
    // hanya untuk satu nilai saja
    var angka = [5,1,3,10,2,9,20,6,8,7,4];
    var angka2 = angka.find(function(x) {
        return x > 5;
    });
    console.log(angka2);
