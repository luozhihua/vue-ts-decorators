"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
exports.vueVersion = vue_1.default['version'].indexOf('1.') === 0 ? 1 : 2;
function processEventArgs(arg1, arg2) {
    var targetFn = null;
    var evtName = null;
    if (typeof arg1 === "string") {
        evtName = arg1;
        if (arg2 && typeof arg2 !== "string") {
            targetFn = arg2;
        }
    }
    else {
        if (arg1) {
            targetFn = arg1;
        }
        if (typeof arg2 === "string") {
            evtName = arg2;
        }
    }
    return { targetFn: targetFn, evtName: evtName };
}
exports.processEventArgs = processEventArgs;
function merge(key, options, handler) {
    if (!options[key]) {
        options[key] = [handler];
    }
    else if (options[key] instanceof Array) {
        options[key].push(handler);
    }
    else {
        options[key] = options[key].concat([handler]);
    }
}
exports.merge = merge;
function camelToKebabCase(str) {
    var kebab = str.replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); });
    if (kebab.charAt(0) === '-')
        kebab = kebab.substring(1);
    return kebab;
}
exports.camelToKebabCase = camelToKebabCase;
function parentMethods(target, instance) {
    if (Array.prototype['findIndex']) {
        Object.getOwnPropertyNames(target.prototype).forEach(function (prop) {
            instance[prop] = target.prototype[prop];
        });
    }
}
exports.parentMethods = parentMethods;
function getDeepValue(object, propertys) {
    var keys = [];
    if (typeof propertys === 'string') {
        keys = propertys.split('.');
    }
    else {
        throw new Error('Parameter propertys must be a string.');
    }
    return keys.reduce(function (o, p) { return (o || {})[p]; }, object);
    ;
}
exports.getDeepValue = getDeepValue;
