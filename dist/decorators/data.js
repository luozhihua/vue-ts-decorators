"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../utils/core");
function Data() {
    function data(factory, target, propertyKey) {
        core_1.VueDecorator("Data", target)(function (v) {
            if (!factory) {
                var val_1 = v.getDefault(propertyKey);
                factory = function () { return val_1; };
            }
            v.storeData(propertyKey, factory);
        });
    }
    if (arguments.length < 3) {
        var args_1 = arguments;
        return function () {
            data.apply(this, [args_1[0]].concat(Array.from(arguments)));
        };
    }
    else {
        data.apply(this, [undefined].concat(Array.from(arguments)));
    }
    return;
}
exports.default = Data;
