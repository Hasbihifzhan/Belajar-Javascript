// KASUS 1: MENGUBAH WARNA BACKGROUN DENGAN BUTTON
// cara 1
// const ubahBtn = document.querySelector("body");
// function ubahWarna() {
//   ubahBtn.style.backgroundColor = "lightblue";
// }
// ubahBtn.onclick = ubahWarna;

// cara 2
const ubahWarna = document.getElementById("btn");
btn.onclick = function () {
  //   document.body.style.backgroundColor = "lightblue";
  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

// KASUS 2: KETIKA BUTTON DI KLIK MENGUBAH WARNA BACKGROUND DENGAN RANDOM
// membuat tombol
const tRandom = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tRandom.appendChild(teksTombol);
tRandom.setAttribute("type", "button");
ubahWarna.after(tRandom);

// membuat event
tRandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// KASUS 3: MGUBAH WARNA BACKGROUND MENGGUNAKAN SLIDER
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// KASUS 4: MERUBAH WARNA BACKGROUND MENGGUNAKAN KURSOR
document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  // event.clientX & event.clientY
  // ukuran browser
  // console.log(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);

  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
