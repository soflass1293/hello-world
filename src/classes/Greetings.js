class Greetings {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

export default Greetings;
