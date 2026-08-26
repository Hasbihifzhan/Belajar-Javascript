// Spread Operator: mengubah suatu array atau object atau bahkan string menjado deret parameter untuk function

const angka = [1,2,3,4,5];
console.log(Math.max(angka)); //ini hasilnya akan nan
console.log(Math.max(...angka));

// Merge array dengan menggunakan spread operator

const number = [1,2,3,4,5,6,7,8,9]
const nama = ['alex', 'bimo', 'cici', 'delila', 'felix']

const campuranNum = [...number,0];
const campuranNam = [...nama, 'dodo'];
const campuranNumNam = [...number, ...nama];

console.log(campuranNum)
console.log(campuranNam)
console.log(campuranNumNam)

// Merge object dengan spread operator

const user = {
    name: 'John',
    email: 'johndoe@m.com',
};

const userBaru = {...user, id: 'john123', password: 'johndoe123'};

console.log(user)
console.log(userBaru)

// Rest Param: untuk mempersingkat ketika menulis parameter yang panjang

const sumAll = (...nums) => {
    return nums.reduce((total,el) => total + el);
};
console.log(sumAll(1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9))

const peserta = ['alex', 'bimo', 'cici', 'delila', 'felix']

const pemenang = (gold, silver, bronze, ...sisa) => {
    console.log(`Medali emas diraih oleh ${gold}`);
    console.log(`Medali silver diraih oleh ${silver}`);
    console.log(`Medali bronze diraih oleh ${bronze}`);
    console.log(`peserta lainnya ${sisa}`);
}
console.log(pemenang(...peserta));