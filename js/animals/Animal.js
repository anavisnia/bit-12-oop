class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    intriduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailys yra ${this.color} spalvos.`);
    }

    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
}

export { Animal }