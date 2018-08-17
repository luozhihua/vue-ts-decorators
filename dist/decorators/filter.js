"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var util_1 = require("../utils/util");
function Filter(filterName, local) {
    return function (target) {
        var _a;
        var newInstance = new target();
        util_1.parentMethods(target, newInstance);
        var options = {};
        if (newInstance.filter) {
            options.filter = newInstance.filter.bind(newInstance);
        }
        else {
            for (var key in newInstance) {
                var isFunc = typeof newInstance[key] === 'function';
                if ((key === 'read' || key === 'write') && isFunc) {
                    options[key] = newInstance[key].bind(newInstance);
                }
            }
        }
        if (!filterName) {
            console.warn("[vue-ts-decorate] Parameter 'filterName' must be set in filters");
        }
        if (local) {
            return _a = {}, _a[filterName] = options.filter ? options.filter : options, _a;
        }
        else {
            if (options.filter) {
                vue_1.default.filter(filterName, options.filter);
            }
            else {
                vue_1.default.filter(filterName, options);
            }
            return vue_1.default.filter(filterName);
        }
    };
}
exports.default = Filter;
