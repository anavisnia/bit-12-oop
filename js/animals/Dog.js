import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, color, legCount, likePlaying, voice) {
        super(name, color, legCount, likePlaying, voice);
        this.name = name;
        this.color = color;
        this.legCount = 4;
        this.likePlaying = true;
        this.voice = 'Au au!';
    }
}

export { Dog }