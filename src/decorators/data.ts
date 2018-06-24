import Vue from "vue";
import { VueDecoratorTarget, VueDecorator } from "../utils/core";

export default function Data(target: Vue, propertyKey: string): any;
export default function Data(factory?: () => any): any;
export default function Data(this: Vue): any | undefined {
	function data(factory: () => any | undefined, target: VueDecoratorTarget, propertyKey: string) {
		VueDecorator("Data", target)(v => {
			if (!factory) {
				const val = v.getDefault(propertyKey);
				factory = () => val;
			}
			v.storeData(propertyKey, factory);
		});
	}

	if (arguments.length < 3) {
		const args = arguments;
		return function(this: VueDecoratorTarget) {
			data.apply(this, [args[0], ...Array.from(arguments)]);
		};
	} else {
		data.apply(this, [undefined, ...Array.from(arguments)]);
	}
	return;
}
