import { Pet } from './Pet.js';

class Cat extends Pet {
    constructor(name, color, legCount, likePlaying, voice) {
        super(name, color, legCount, likePlaying, voice);
        this.name = name;
        this.color = color;
        this.legCount = 4;
        this.likePlaying = false;
        this.voice = 'Miau miau!';
    }
}

export { Cat }