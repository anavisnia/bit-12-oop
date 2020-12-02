import { Pet } from './Pet.js';
class Rabbit extends Pet {
    constructor(name, color, legCount, likePlaying, voice) {
        super(name, color, legCount, likePlaying, voice);
        this.name = name;
        this.color = color;
        this.voice = 'Ch, ch';
        this.legCount = 4;
        this.likePlaying = false;
    }


}

export { Rabbit }