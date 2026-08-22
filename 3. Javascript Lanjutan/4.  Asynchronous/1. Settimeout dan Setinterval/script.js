// setTimeout & setInterval: callback function yang bukan berasal dari array. Fungsinya untuk memberikan waktu jeda dan melakukan perulangan setiap waktu yang ditentukan
// setTimeout: setiap 1 detik
// setInterval: setiap 2 detik

// setTimeout
console.log('Halo...')
setTimeout(() => {
    console.log('masih disana gak?');
},5000); //proses akan dieksekusi setelah 5 detik
console.log('saya pergi ya...')

// setInterval
const interval = setInterval(() => {
    console.log(Math.random());
},2000); //proses akan di eksekusi setelah 2 detik
clearInterval(interval)//ini untuk memberhentikan loopingnya