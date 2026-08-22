// HIGHER ORDER FUNCTION
// Higher Order Function adalah function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value

// dalam javascript function disebut juga Firt Class Function
// Javascript memperlakukan function sebagai object

function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
    selesai();
};

function selesai() {
    alert('Selesai mengerjakan tugas!');
}

kerjakanTugas('Pemrogrmaan Web', selesai);

// function kerjakanTugas : ini disebut higher order function
// dan jika punya function sebagai argument maka itu disebut callback
// function kerjakanTugas(matakuliah, selesai)
// (selesai) disini adalah sebagai callback

// FUNCTION SEBAGAI ARGUMENT FUNCTION LAIN
function duakali(func) {
    func();
    func();
}

function lemparDadu() {
    const hasil = Math.floor(Math.random() * 6) + 1;
    console.log(hasil);
}
duakali(lemparDadu())

// FUNCTION DENGAN RETURN VALUE FUNCTION LAGI
function hasilnyaAdalahFunction() {
    const rand = Math.random();
    if (rand > 0.1) {
        return function () {
            console.log('Selamat, angkanya lebih besar');
        };
    } else {
        return function () {
            console.log('Maaf, mungkin bisa coba lagi');
        };
    }
}

const hasil = hasilnyaAdalahFunction
hasil()