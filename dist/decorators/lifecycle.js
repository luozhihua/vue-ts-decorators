"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../utils/core");
function Lifecycle() {
    function lifecycle(target, propertyKey, descriptor) {
        core_1.VueDecorator("Lifecycle", target)(function (v) {
            if (!v.options[propertyKey]) {
                v.options[propertyKey] = [descriptor.value];
            }
            else if (v.options[propertyKey] instanceof Array) {
                v.options[propertyKey].push(descriptor.value);
            }
            else {
                v.options[propertyKey] = [v.options[propertyKey], descriptor.value];
            }
        });
    }
    if (arguments.length === 0) {
        return function () {
            lifecycle.apply(this, arguments);
        };
    }
    else {
        lifecycle.apply(this, arguments);
    }
    return;
}
exports.default = Lifecycle;
