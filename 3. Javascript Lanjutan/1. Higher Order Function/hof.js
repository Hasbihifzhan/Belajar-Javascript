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

