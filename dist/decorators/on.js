"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../utils/core");
var util_1 = require("../utils/util");
function On() {
    function on(arg1, arg2, target, propertyKey, descriptor) {
        core_1.VueDecorator("On", target)(function (v) {
            var r = util_1.processEventArgs(arg1, arg2);
            var handler = function () {
                var target = r.targetFn ? r.targetFn(this) : this;
                var listener = descriptor.value.bind(this);
                target.$on(r.evtName || propertyKey, listener);
                this.$on("hook:destroyed", function () {
                    target.$off(r.evtName || propertyKey, listener);
                });
            };
            util_1.merge("beforeCreate", v.options, handler);
        });
    }
    var args = Array.from(arguments);
    if (args.length === 3) {
        if ("value" in args[2] && args[2]["value"] instanceof Function) {
            on.apply(this, Array(2).concat(args));
            return;
        }
    }
    args.length = 2;
    return function () {
        on.apply(this, args.concat(Array.from(arguments)));
    };
}
exports.default = On;
