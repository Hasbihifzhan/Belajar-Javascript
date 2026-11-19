// 1. appendchild
// buat element baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// 2. insertBefore
// buat element baru
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");

// simpan tulisan ke dalam li
liBaru.appendChild(teksLiBaru);

// simpan liBaru di section B
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

// 3. removeChild & replaceChild
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

// buat element baru
const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru");

// simpan tulisan ke h2
h2Baru.appendChild(teksH2Baru);

// mengganti p4 menjadi element baru
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
