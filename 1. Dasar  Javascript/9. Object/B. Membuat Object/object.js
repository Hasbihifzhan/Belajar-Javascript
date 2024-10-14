// Cara Membuat Object pada Javascript
// 1. Object Literal
    var mhs = {
        nama : 'Hasbi Hifzhan',
        nrp : "1234567890",
        email : 'hasbihifzhan@gmail.com',
        jurusan : 'Teknik Informatika'
    }
// 2. Function Declaration
    function buatObjectMahasiswa(nama, nrp, email, jurusan) {
        var mhs = {};
        mhs.nama = nama;
        mhs.nrp = nrp;
        mhs.email = email;
        mhs.jurusan = jurusan;
        return mhs;
    }
    // diatas adalah cara membuat objectnya

    var mhs2 = buatObjectMahasiswa('Hasbi', '987654321', 'hasbi@gmail.com', 'Teknik Industri')
    // diatas adalah cara untuk membuat isinya

    // function declaration lebih simpe pembuatannya daripada literal karan bisa membuat deklarasinya 1 kali dan functionnya berkali-kali

// 3. Constructor Function(keyword new)
    function Mahasiswa(nama, nrp, email, jurusan) {
        // var this = {};
        this.nama = nama;
        this.nrp = nrp;
        this.email = email;
        this.jurusan = jurusan;
        // return this;
    }
    var mhs3 = new Mahasiswa('Hifzhan', '1234554321', 'hifzhan@gmail.com', 'Teknik Mesin');
    // Wajib menuliskan new, jika tidak maka javascriptnya akan berasumsi bahwa kita memanggil objectnya menggunakan function declaration

// 4. object.create(dipelajari nanti)