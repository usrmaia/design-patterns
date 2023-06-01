"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitRandomTime = void 0;
async function waitRandomTime() {
    await randomTime();
}
exports.waitRandomTime = waitRandomTime;
function randomTime() {
    const randomDelay = Math.random() * 1000;
    return new Promise(resolve => setTimeout(resolve, randomDelay));
}
