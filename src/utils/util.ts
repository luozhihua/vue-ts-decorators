import Vue from "vue";

export let vueVersion: number = Vue['version'].indexOf('1.') === 0 ? 1 : 2;
export type TargetOrEventName = string | ((v: Vue) => Vue) | undefined;

export function processEventArgs(arg1: TargetOrEventName, arg2: TargetOrEventName) {
	let targetFn: null | ((v: Vue) => Vue) = null;
	let evtName: null | string = null;
	if (typeof arg1 === "string") {
		evtName = arg1;
		if (arg2 && typeof arg2 !== "string") {
			targetFn = arg2;
		}
	} else {
		if (arg1) {
			targetFn = arg1;
		}
		if (typeof arg2 === "string") {
			evtName = arg2;
		}
	}
	return { targetFn, evtName };
}

export function merge<TKey extends string, THandler>(
	key: TKey,
	options: { [key in TKey]: THandler[] },
	handler: THandler
) {
	if (!options[key]) {
		options[key] = [handler];
	} else if (options[key] instanceof Array) {
		options[key].push(handler);
	} else {
		options[key] = [...options[key], handler];
	}
}

export function camelToKebabCase(str: string) {
	let kebab = str.replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`);
	if (kebab.charAt(0) === '-') kebab = kebab.substring(1);
	return kebab;
}

export function parentMethods(target: Function, instance: Object) {
	if (Array.prototype['findIndex']) {
		Object.getOwnPropertyNames(target.prototype).forEach(prop => {
			instance[prop] = target.prototype[prop];
		});
	}
}

export function getDeepValue(object: Object, propertys: string) {
	let keys: string[] = [];
	if (typeof propertys === 'string') {
		keys = propertys.split('.');
	} else {
		throw new Error('Parameter propertys must be a string.');
	}
	return keys.reduce((o, p) => (o || {})[p], object);;
}
