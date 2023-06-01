"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caretaker = void 0;
class Caretaker {
    constructor(originator) {
        this.history = [];
        this.originator = originator;
    }
    backup() {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.history.push(this.originator.save());
    }
    undo() {
        if (!this.history.length)
            return;
        const memento = this.history.pop();
        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }
    showHistory() {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.history) {
            console.log(memento.getName());
        }
    }
}
exports.Caretaker = Caretaker;
