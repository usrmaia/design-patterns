interface Memento {
    getState(): string;
    // Metadata
    getName(): string;
    getDate(): string;
}

export { Memento };