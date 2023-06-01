"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteMemento = void 0;
class ConcreteMemento {
    constructor(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 30).replace('T', ' ');
    }
    getState() {
        return this.state;
    }
    getName() {
        return `${this.date} / (${this.state.substr(0, 9)}...)`;
    }
    getDate() {
        return this.date;
    }
}
exports.ConcreteMemento = ConcreteMemento;
