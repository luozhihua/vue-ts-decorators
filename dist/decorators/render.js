"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../utils/core");
function Render() {
    function render(target, descriptor, propertyKey) {
        core_1.VueDecorator("Render", target)(function (v) {
            v.options[propertyKey] = descriptor.value;
            delete v.proto[propertyKey];
        });
    }
    if (arguments.length === 0) {
        return function () {
            render.apply(this, arguments);
        };
    }
    else {
        return render.apply(this, arguments);
    }
}
exports.default = Render;
