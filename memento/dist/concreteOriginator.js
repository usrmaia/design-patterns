"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteOriginator = void 0;
const concreteMemento_1 = require("./concreteMemento");
class ConcreteOriginator {
    constructor(state) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }
    doSomething() {
        console.log('Originator: I\'m doing something important.');
        this.state = this.generateRandomString(30);
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }
    generateRandomString(length = 10) {
        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array
            .from({ length }, () => charSet[Math.floor(Math.random() * charSet.length)]).join('');
    }
    save() {
        return new concreteMemento_1.ConcreteMemento(this.state);
    }
    restore(memento) {
        this.state = memento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}
exports.ConcreteOriginator = ConcreteOriginator;
