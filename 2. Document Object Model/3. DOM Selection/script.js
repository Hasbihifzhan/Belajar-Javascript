// // DOM SELECTION

// //1. document.getElementById -> element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "grey";
// judul.innerHTML = "Halo Dunia";

// //2. document.getElementsByTagName -> HTMLCollection(mirip array)
// const p = document.getElementsByTagName("p");
// // p[2].style.backgroundColor = "lightblue";
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// // jika mengambil element meskipun ada 1, h1 bentuknya tetap HTML Collection, tuliskan indeksnya jika ingin membuatnya menjadi element
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// // 3. document.getElementByClasasName -> HTMLCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = " Ini diubah dari javascript";

// // 4. document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// // 5. document.query.SelectorAall()
// const p = document.querySelectorAll("p");
// // p[2].style.backgroundColor = "lightblue";
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// //NOTE: kita bisa mereset noode root (document.)
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = "orange";

// const sectionB = document.querySelector("section#b");
// const p4 = sectionB.getElementsByTagName("p")[0];
// p4.style.backgroundColor = "orange";
