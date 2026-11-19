// // Kasus 1 ketika klik x maka hilang semuanya
// Cara 1:
// const sectionA = document.querySelector(".container");

// const btnX = document.querySelector(".close");
// btnX.addEventListener("click", function () {
//   const card = document.querySelector(".card");
//   sectionA.removeChild(card);
// });

// Cara 2:
// const btnX = document.querySelector(".close");
// const card = document.querySelector(".card");

// btnX.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
// Cara 1:
// const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // Cara 1:
//     // close[i].parentElement.style.display = "none";
//     // Cara 2 (yang di rekomendasikan):
//     e.target.parentElement.style.display = "none";
//   });
// }

// Cara 2:
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
// Prevent Default = Mencegah Aksi Default
// Kasusnya kalau element closenya di ganti menjadi a/link
// e.preventDefault();
// e.stopPropagation();
// untuk menghilangkan efek bubbling dari event yab=ng bawah
//   });
// });

// Event bubbling
// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// Cara 3
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
