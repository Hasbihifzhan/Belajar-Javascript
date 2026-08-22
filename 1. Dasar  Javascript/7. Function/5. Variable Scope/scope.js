// SCOPE ADA 3:
// 1. Block scope : tidak untuk javascript
// 2. Function scope : javascript menggunakan function scope
// 3. global scope / window scope
    var a = 1;
//var a adalah global scope yaitu yang bisa digunakan dimanapun di dalam program kita / berada di luar

// function scope
    function tes () {

    }
    tes()
// kita telah membuka function scope
// yang dimana variable apapun yang ada didalam function tersebut itu berlaku hanya untuk function tersebut saja

// jika kita memasukan var b didalam functionnya dan memanggil var nya diluar function maka tidak akan dikenali(var nya undefined)
// var b ini disebut local scope karna ada didalam function
    function tes () {
        var b = 2;
    }
    tes();
    console.log(b);

// jika kita menaruh console.lognya didalam function maka akan tampil var nya
    function tes2 () {
        var c = 2;
        console.log(c);
    }
    tes2();
// jika diluar kita tidak bisa mengakses var local
// jika didalam function kita bisa mengakses var global
    function tes3 () {
        var d = 2;
        console.log(a);
    }
    tes3();

// jika diluar kita tidak bisa mengakses var local
    function tes4 () {
        var e = 2;
    }
    tes4();
    console.log(e);

// jika kita menggunakan var yang antara global dan local jika kita memunculkannya maka yang akan muncul var lokalnya
    function tes5 () {
        var a = 2;
        console.log(a);
    }
    tes5();

// jika kita menuliskan 2 buah variable yang sama dan berbeda scopenya
// dan jika kita menyimpan consolenya maka yang muncul adalah yang global dan disebut name conflict
    function tes6 () {
        // name conflict
        var a = 2;
    }
    tes6();
    console.log(a);

// name conflict yang dimana kita memiliki 2 buah var yang namanya sama tapi scopenya berbeda, dan tidak akan menimpa satu sama lain

// jika tidak menggunakan var maka yang muncul adalah yang ada di dalam function karna akan otomatis membuat variable local
// akan tetapi jika tidak ada maka akan mencari yang ada diluar functionnya dan akan memanggil global function
    function tes7 () {
        a = 2;
    }
    tes7();
    console.log(a);

// jika kita menghapus var a yang global scope maka yang muncul tetap munculnya yang berada dalam functionnya akan tetapi yang sebeenarnya muncul adalah nilai yang global karna secara otomatis javascript membuat variable global
    function tes8 () {
        a = 2;
    }
    tes8();
    console.log(a);

// jika ingin memunculkan var local maka harus dibuat keyword var didalam functionnya
    // function tes9 () {
    //     var a;
    //     a = 2;
    // }
    // tes9();
    // console.log(a);
// atau cara lainnya menggunakan "use strict"
    "use strict";

    function tes10 () {
        var a;
        a = 2;
    }
    tes10();
    console.log(a);

// jika kita menambahkan parameter dan argumen di dalam functionnya 
    var f = 1;
    function tes11(f) {
        console.log(f);
    }
    tes11(2);
    // jika kasusnya seperti ini maka yang akan muncul adalah nilai dari parameternya
    // karna parameter mengirimkan nilainya ke argumen dan mencetak di console lognya
    // dan variable globalnya tidak akan berguna
    // jika kita membuat argument maka selalu menjadi local variable meskipun tidak membuat variablenya

// jika kita membuat semua varnya sama
    var g = 1;
    function tes12(g) {
        console.log(g)
    }
    tes(g);
    console.log(g)
    // maka yang muncul akan ada 2 nilai, global dan localnya

    // LExical Scope
    function lamarkerja() {
        const jabatan = 'Programmer';

        function orangDalam() {
            let kenalan = `Orang dalam bisa menetukan ${jabatan}`;
            console.log(kenalan)
        }
        orangDalam();
    }