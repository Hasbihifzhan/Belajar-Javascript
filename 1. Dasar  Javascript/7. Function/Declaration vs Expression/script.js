// FUNCTION DECLARATION
// rumusnya :
    // function identifieer (parameter list -optional) {functionbody}

// contoh
    function tampilpesan (nama) {
        alert('halo' + nama);
    }

// lebih fleksibel (dapat ditulis dimanapun)
    // karena konsep hoisting
// lebih mudah dipahami 

// FUNCTION EXPRESSION
// rumusnya :
    // function identifieer -optional (parameter list -optional) {functionbody}

// contoh
    var tampilpesan = function (nama) {
        alert('halo' + nama);
    }
    // harus disimpan kedalam ekspresi
    // sperti kita simpan dia ke dalam variable

// harus didefinisikan terlebih dahulu sebelum dipanggil
// lebih powerfull :
    // sebagai closure
    // sebagai argumen untuk function lain
    // IIFE (Immediately Invoked Function Expression)