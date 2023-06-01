import { ConcreteOriginator } from "./concreteOriginator";
import { Caretaker } from "./caretaker";

const originator = new ConcreteOriginator('Radom String');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log('');
caretaker.showHistory();

console.log('\nClient: Now, let\'s rollback!\n');
caretaker.undo();

console.log('\nClient: Once more!\n');
caretaker.undo();

console.log('');
caretaker.showHistory();