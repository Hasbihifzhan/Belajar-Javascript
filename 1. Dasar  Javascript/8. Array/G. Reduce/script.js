// Reduce: melakukan proses sebanyaknya element miliksuatu array. nilai baliknya single value.

// contoh 1
const currentTotal = [1500, 20000, 4000, 19000, 32000]
const singleSubtotal = currentTotal.reduce((currentTotal, singleSubtotal) => {
    return currentTotal + singleSubtotal
})
console.log(singleSubtotal)

// prosesnya seperti ini
// callback    currentTotal  +  SingleSubtotal  =  nilai balik
// Proses 1    1500          +  20000           =  21500
// Proses 2    21500         +  4000            =  25500
// Proses 3    25500         +  19000           =  44500
// Proses 4    44500         +  32000           =  76500

// contoh 2
const examScore = [80, 85, 70, 90, 93, 77]
const total =examScore.reduce((total, scrore) => {
    return total + scrore;
});
console.log(total)