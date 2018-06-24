import Vue, {ComponentOptions} from "vue";

export type DecoratorFactory<TKey extends string> = (target: Vue, propertyKey: TKey) => any;
export type DecoratorCallback = (v: CallbackData) => void;

export interface VueDecoratorTarget extends Vue {
	$VueDecoratorsStore?: {
		[k: string]: DecoratorCallback[];
	};
}

export interface CallbackData {
	options: ComponentOptions<Vue>;
	getDefault: (key: string) => any;
	storeData: (key: string, factory: () => any) => void;
	proto: any;
	done: (cb: (data: DoneCallbackData) => void) => void;
}

export interface DoneCallbackData {
	options: ComponentOptions<Vue>;
	proto: any;
}

export function VueDecorator(id: string, target: VueDecoratorTarget): (callback: DecoratorCallback) => void {
	return function(callback: DecoratorCallback) {
		if (!target.$VueDecoratorsStore) {
			target.$VueDecoratorsStore = {};
		}
		if (!target.$VueDecoratorsStore[id]) {
			target.$VueDecoratorsStore[id] = [callback];
		} else {
			target.$VueDecoratorsStore[id].push(callback);
		}
	};
}
