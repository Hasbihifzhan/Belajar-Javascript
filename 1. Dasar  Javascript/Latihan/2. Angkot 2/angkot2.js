var jmlangkot = 10;
var angkotberoperasi = 6;
var noangkot = 1;

while(noangkot <= angkotberoperasi) {
    console.log('Angkot No. ' + noangkot + ' angkot beroperasi dengan baik.');
noangkot++;
}

// for( var noangkot = 7; noangkot <= 10; noangkot++ ) {
//     console.log('Angkot No. ' + noangkot + ' sedang tidak beroperasi.')
// }

for( noangkot = angkotberoperasi + 1; noangkot <= jmlangkot; noangkot++ ) {
    console.log('Angkot No. ' + noangkot + ' sedang tidak beroperasi.')
}

// done..........