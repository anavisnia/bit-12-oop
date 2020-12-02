import { SingleDog } from './old-dogs/SingleDog.js';

const rexius = new SingleDog('Rexas', 'rudas', 'Vokeciu aviganis');
const briusus = new SingleDog('Briusus', 'pilkas', 'Lietuvos lenciuginis');

console.log(rexius);
console.log(briusus);

console.log(rexius.breed);
console.log(briusus.breed);

rexius.introduce();
briusus.introduce();

console.log(rexius.speed);
rexius.move(5);
rexius.move(5);

console.log(rexius.lovedPeople);
rexius.addLovedPerson('Ana');

/*

Gyvunai kaip objektai:
- turi 
    - varda
    - spalva
    - veisle
    - judejimo greitis = 0
- gali:
    - prisistatyk
    - isskleisti garsa
    -judeti

*/