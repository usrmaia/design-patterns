"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Originator = void 0;
const concreteMemento_1 = require("./concreteMemento");
/**
 * The Originator holds some important state that may change over time. It also
 * defines a method for saving the state inside a memento and another method for
 * restoring the state from it.
 */
class Originator {
    constructor(state) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }
    /**
     * The Originator's business logic may affect its internal state. Therefore,
     * the client should backup the state before launching methods of the
     * business logic via the save() method.
     */
    doSomething() {
        console.log('Originator: I\'m doing something important.');
        this.state = this.generateRandomString(30);
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }
    generateRandomString(length = 10) {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array
            .apply(null, [length])
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }
    /**
     * Saves the current state inside a memento.
     */
    save() {
        return new concreteMemento_1.ConcreteMemento(this.state);
    }
    /**
     * Restores the Originator's state from a memento object.
     */
    restore(memento) {
        this.state = memento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}
exports.Originator = Originator;
