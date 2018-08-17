"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function VueDecorator(id, target) {
    return function (callback) {
        if (!target.$VueDecoratorsStore) {
            target.$VueDecoratorsStore = {};
        }
        if (!target.$VueDecoratorsStore[id]) {
            target.$VueDecoratorsStore[id] = [callback];
        }
        else {
            target.$VueDecoratorsStore[id].push(callback);
        }
    };
}
exports.VueDecorator = VueDecorator;
