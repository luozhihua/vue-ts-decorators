"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../utils/core");
function Props() {
    function props(factory, target, propertyKey) {
        core_1.VueDecorator('Props', target)(function (v) {
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
            props.apply(this, [args_1[0]].concat(Array.from(arguments)));
        };
    }
    else {
        props.apply(this, [undefined].concat(Array.from(arguments)));
    }
    return;
}
exports.default = Props;
