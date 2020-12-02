// import Animal
class Pet extends Animal {
    constructor(name, furColor) {
        super();
        this.name = name;
        // this.fur = 'rudas';
        this.fur = furColor;
    }

    intriduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailys yra ${this.fur} spalvos.`);
    }

    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
}

export { Pet }