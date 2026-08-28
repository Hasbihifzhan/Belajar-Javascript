class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    colorName() {
        console.log('The color name is ' + this.name)
    }

    rgb() {
        const {r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
}

new Color();

// const skyColor = new Color(185, 243, 252, 'sky');
// console,log(skyColor)

// Contoh 2

