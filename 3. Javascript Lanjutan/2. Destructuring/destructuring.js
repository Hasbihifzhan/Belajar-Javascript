// DESTRUCTURING
// destructurimg adalah expression pada javascript yang membuat kita dapat 'membongkar' nilai dari array atau properti dari object kedalam variable terpisah

// Destructuring Array
    const perkenalan = ['halo', 'nama', 'saya', 'Hasbi Hifzhan'];
    
    // langsung memetakan tiap elemennya pada variable tearpisah
    // const[salam, satu, dua, nama] = perkenalan;
    // console.log(salam);
    // console.log(satu);
    // console.log(dua);
    // console.log(nama);
    
    // skip items
    // kita juga bisa melo melompati var yang ada pada array
    // kita tinggal menghapus nama variable nya tapi tidak dengan koma nya
    // const[salam, , , nama] = perkenalan;
    // console.log(salam);
    // console.log(nama);

    // swap items
    // let a = 1;
    // let b = 2;
    // console.log(a);
    // console.log(b);

    // [a,b] = [b,a];
    // console.log(a);
    // console.log(b);
    
    // return value pada function
    function coba() {
        return [1, 2];
    }

    const [a, b] = coba();
    console.log(b);

    // rest parameter


