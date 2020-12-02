import {Animal} from './Animal.js';

class Pet extends Animal {
    constructor (name, color, legCount, likePlaying, voice) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.legCount = 0;
        this.likePlaying = false;
        this.voice = '';
    }

    walk() {
        console.log(`${this.name} gali vaiksciuoti.`);
    }
}

export { Pet }