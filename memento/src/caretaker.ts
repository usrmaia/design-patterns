import { ConcreteOriginator } from './concreteOriginator';
import { Memento } from './models/memento';

class Caretaker {
    private history: Array<Memento> = [];
    private originator: ConcreteOriginator;

    constructor(originator: ConcreteOriginator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.history.push(this.originator.save());
    }

    public undo(): void {
        if (!this.history.length) return;

        const memento: Memento | any = this.history.pop();

        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    public showHistory(): void {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.history) {
            console.log(memento.getName());
        }
    }
}

export { Caretaker };