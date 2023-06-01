import { Memento } from "./memento";

interface Originator {
    save(): Memento;
    restore(memento: Memento): void;
}

export { Originator };