// NodeList
// jika kita memilih salah satu simpul maka itu disebut node
// dan jika kita memilih lebih dari satu maka itu disebut NodeList

// HTMLCollection
// kumpulan node khusus yang tipenya element saja

// keduanya merupakan kumpulan node
// struktur datanya mirip array
// nodeList dapat berisi node apapunn sedangkan HTMLCollection harus berisi element HTML
// HTMLCollection bersifat live sedangkan nodeList tidak

// DOM Tree
// Struktur Hierarki

// Root Node
    // node yang menjadi sumber dari semua node lain di dalam DOM
    // secara default node tersebut adalah document

// Parent Node
    // node yang berada 1 tingkat diatas node yang lain
    // body adalah parent dari h1,p,p,div dan a
    // (contoh dari kasus kita)
    
// Child Node
    // node yang berada 1 tingkat dibawah node yang lain
    // tidak peduli tipe nodenya apa
    // h1 adalah child dari body
    // (contoh dari kasus kita)