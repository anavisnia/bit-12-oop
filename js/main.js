import { Animal } from './animals/Animal.js';
import { Dog } from './animals/Dog.js';
import { Cat } from './animals/Cat.js';
import { Rabbit } from './animals/Rabbit.js';
import { Bird } from './animals/Bird.js';




const rikis = new Dog('Rikis', 'baltos');
const rainis = new Cat('Rainis', 'juoda');
const mimi = new Rabbit('Mimi', 'baltos');

const chip = new Bird('Chip', 'rudas', 2);

// rikis.sound();
// rainis.sound();

rikis.intriduce();
rainis.intriduce();
mimi.intriduce();

chip.intriduce();
chip.fly();
console.log(chip.wingsCount);