// THIS
// this adalah sebuah keyword spesial yang secara otomatis didefinisikan pada setiap function  
    // console.log(this);
    // jika kita memunculkan this menggunkan console.log maka yang muncul di console web browser adalah "window"
    // "window" di isi secara default oleh javascript
    // "window" ini disebut juga object global

    // var a = 10;
    // console.log(this.a)
    // console.log(window.a)

//  cara 1 - function declaration
    // function halo() {
    //     console.log(this);
    //     console.log('halo');
    // }
    // this.halo();
    // this mengembalikan object global

// cara 2 - object literal 
    // var obj = {};
    // obj.halo = function() {
    //     console.log(this);
    //     console.log('halo');
    // }
    // obj.halo();
    // this mengembalikan object yang bersangkutan

// cara 3 - constructor
    // function Halo() {
    //     console.log(this);
    //     console.log('halo');
    // }
    // new Halo();
    // this mengembalikan object yang baru di buat (new)
