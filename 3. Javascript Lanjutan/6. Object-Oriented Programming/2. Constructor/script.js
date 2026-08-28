// membuat convert color rgb dan hex menggunakan constructor

const hex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const color = (r,g,b) => {
    return `rgb${r},${g},${b}`
};

function convertColor (r,g,b) {
    const color ={};

    color.r = r
    color.g = g
    color.b = b


    color.rgb = function () {
        const {r, g, b} = this;
        return `rgb${r},${g},${b}`
    };

    color.hex = function () {
        const {r, g, b} = this;

        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return color;
}

// Membuat object menggunakan consturtor object 
// Menggunakan operator new: Operator ini newmemungkinkan pengembang untuk membuat instance dari tipe objek yang ditentukan pengguna atau dari salah satu tipe objek bawaan yang memiliki fungsi konstruktor.

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb${r},${g},${b}`

};

color.prototype.hex = function () {
    const {r, g, b} = this;

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
    const {r, g, b} = this;
    return `rgb${r},${g},${b},${a}`
};

// new Color(11,199,4).rgb()
// const obColor = new Color(12,200,89)
// objColor.rgb(
// new Color(11,199,4).hex()