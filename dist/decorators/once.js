"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../utils/core");
var util_1 = require("../utils/util");
function Once() {
    function once(arg1, arg2, target, propertyKey, descriptor) {
        core_1.VueDecorator("Once", target)(function (v) {
            var r = util_1.processEventArgs(arg1, arg2);
            var handler = function () {
                var _this = this;
                var target = r.targetFn ? r.targetFn(this) : this;
                var eventName = r.evtName || propertyKey;
                var listener = function () {
                    descriptor.value.bind(_this);
                    target.$off(eventName, listener);
                };
                target.$on(eventName, listener);
                this.$on("hook:destroyed", function () {
                    target.$off(eventName, listener);
                });
            };
            util_1.merge("beforeCreate", v.options, handler);
        });
    }
    var args = Array.from(arguments);
    if (args.length === 3) {
        if ("value" in args[2] && args[2]["value"] instanceof Function) {
            once.apply(this, Array(2).concat(args));
            return;
        }
    }
    args.length = 2;
    return function () {
        once.apply(this, args.concat(Array.from(arguments)));
    };
}
exports.default = Once;
