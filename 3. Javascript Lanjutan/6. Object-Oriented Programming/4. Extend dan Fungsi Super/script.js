// Konsep oop membuat hal segeneral mungkin dan kita meminimalisir rpetitif atau membuat hal yang sama
// Contoh disini adalah di kucing dan anjing ada hal yang sama yang ditulis yaitu name dan age dan makan

// class Kucing {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     makan() {
//         return`${this.name} lagi makan`
//     }

//     meong() {
//         return 'Meeoong'
//     }
// }

// class Anjing {
//      constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     makan() {
//         return`${this.name} lagi makan`
//     }

//     gongong() {
//         return 'guk guk'
//     }
// }

// seharusnya kita tidak engulang hal yang sama dan membuat hal yang generalnya terlebih dahulu

class Peliharaan { //parent class/object
     constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makan() {
        return `${this.name} lagi makan`
    }
}

// kita menggunakan extend untuk menghubungkan object chiled ke parentnya
// kita bisa menggunakan super jika ingin mengubah =suatu nilai di dalam parent tapi tidak mempengaruhi child lainnya

class Kucing extends Peliharaan{ //child class/object
    constructor(name, age, lives) {
        super(name, age) //jadi ini sudah otomatis memanggil name dan age nya yang ada di dalam parentnya
        this.lives = lives
    }
    meong() {
        return 'Meeoonng'
    }
}

class Anjing extends Peliharaan{ //child class/object
    gongong() {
        return 'guk guk'
    }
}