// OBJECT
// Objet adalah sebuah variable yang menyimpan nilai(properti) dan fungsi(method)

// tanpa object
    var mahasiswa =
    ['Hasbi Hifzhan', true, [2.90, 3.10, 3.25, 2.88, 3.04]]

    function IPKumuatif(IPsemester) {
        var total = 0;
        for( var i = 0; i < IPsemester.length; i++) {
            total += IPsemester[i]
        }
        return total/IPsemester.length
    };
    IPKumuatif(mahasiswa[2]);

// dengan object
    var mahasiswa2 = {
        nama : 'Hasbi Hifzhan',
        lulus : true,
        IPsemester2 : [2.90, 3.10, 3.25, 2.88, 3.04],
        IPKumuatif2 : function() {
            var total2 = 0;
            var ips = this.IPsemester2;
            for( var j = 0; j < ips.length; j++) {
                total2 += ips[j];
            }
            return total2/ips.length;
        }
    }
    mahasiswa2.IPKumuatif2();

// anatomi object
    var orang = {
        nama : 'Hasbi Hifzhan',
        umur : 22,
        pekerjaan : 'Pelajar',
        sapa : function() {
            return 'Hi, nama saya ' + this.nama +
            ' usia saya ' + this.umur + ' tahun, dan saya adalah seorang ' + this.pekerjaan;
        }
    }
// nama, umur, pekerjaan adalah variable yang berada di dalam object dan disebut juga properti
// dan masing" properti dipisahkan dengan koma

// function yang ada didalam object disebut method

// Cara membuat object literal
    var mhs = {
        nama : 'Hasbi Hifzhan',
        umur : 22,
        ips : [3.00, 2.50, 3.20],
        alamat : {
            jalan : 'Jl. abc No. 123',
            kota : 'Bandung',
            provinsi : 'Jawa Barat'
        }
    };
// bisa menaruh object di dalam object