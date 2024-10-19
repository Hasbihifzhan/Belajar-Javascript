// membuat object angkot

function angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek; 
    this.penumpang = penumpang;
    this.kas = kas;
}
var angkot1 = new angkot('Hasbi', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new angkot('Hifzhan', ['Antapani', 'Ciroyom'], [], 0);

