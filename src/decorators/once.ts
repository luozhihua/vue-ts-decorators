import Vue from "vue";
import { VueDecoratorTarget, VueDecorator, DecoratorFactory } from "core";
import { TargetOrEventName, processEventArgs, merge } from "utils/util";

export default function Once(target: Vue, propertyKey: string): undefined;
export default function Once(eventName?: string, target?: (v: Vue) => Vue): DecoratorFactory<string>;
export default function Once(target: (v: Vue) => Vue, eventName?: string): DecoratorFactory<string>;
export default function Once(this: Vue, ...a: any[]): DecoratorFactory<string> | undefined {
	function once(
		arg1: TargetOrEventName,
		arg2: TargetOrEventName,
		target: VueDecoratorTarget,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		VueDecorator("Once", target)(v => {
			let r = processEventArgs(arg1, arg2);
			const handler = function(this: Vue) {
        const target: Vue = r.targetFn ? r.targetFn(this) : this;
        const eventName = r.evtName || propertyKey
        const listener = () => {
          descriptor.value.bind(this);
          target.$off(eventName, listener);
        }

				target.$on(eventName, listener);
				this.$on("hook:destroyed", () => {
					target.$off(eventName, listener);
				});
			};
			merge("beforeCreate", v.options as any, handler);
		});
	}

	let args = Array.from(arguments);
	if (args.length === 3) {
		if ("value" in args[2] && args[2]["value"] instanceof Function) {
			once.apply(this, [...Array(2), ...args]);
			return;
		}
	}
	args.length = 2;
	return function(this: VueDecoratorTarget) {
		once.apply(this, [...args, ...Array.from(arguments)]);
	};
}
