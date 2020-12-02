import { Pet } from './Pet.js';

class Bird extends Pet {
    constructor(name, color, wingsCount) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.wingsCount = 2;
    }

    fly() {
        if (this.wingsCount === 0) {
            console.log(`${this.name} negali skraidyt, nes neturi sparnu :/.`);
        } else {
            console.log(`${this.name} gali skristi turedamas ${this.wingsCount} sparnus.`);
        }
    }

}

export { Bird }