// Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM
// kejadian tersebut bisa dilakukan oleh user (mouse event, keyboard event, dll)
// ataupun bisa dilakukan secara otomatis oleh API (animasi selesai dijalaankan, halaman selesai di load, dll)

// 1. event handler onclick
// inline html(sangat tidak disarankan)
const p3 = document.querySelector(".p3");

function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}

function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}

// di javascript langsung
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// 2. addeventlistener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("item baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

// event handler jika punya banyak event maka akan menimpa event yang pertama
