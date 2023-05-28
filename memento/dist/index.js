"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const originator_1 = require("./originator");
const caretaker_1 = require("./caretaker");
const originator = new originator_1.Originator('Super-duper-super-puper-super.');
const caretaker = new caretaker_1.Caretaker(originator);
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
