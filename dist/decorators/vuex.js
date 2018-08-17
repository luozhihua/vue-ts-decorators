import { getDeepValue } from '../utils/util';
export function Getter(getter) {
    return function (target, key) {
        if (!target.$$getters)
            target.$$getters = {};
        if (typeof getter === 'function') {
            target.$$getters[key] = getter;
        }
        else {
            target.$$getters[key] = function (state) {
                return getDeepValue(state, getter);
            };
        }
        delete target[key];
    };
}
export function Action(action) {
    return function (target, key) {
        if (!target.$$actions)
            target.$$actions = {};
        target.$$actions[key] = action;
        delete target[key];
    };
}
