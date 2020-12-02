class Cat {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name}: Miau miau!`);
    }
}

export { Cat }