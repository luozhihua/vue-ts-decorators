import Vue, { ComponentOptions } from "vue";
export declare type DecoratorFactory<TKey extends string> = (target: Vue, propertyKey: TKey) => any;
export declare type DecoratorCallback = (v: CallbackData) => void;
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
export declare function VueDecorator(id: string, target: VueDecoratorTarget): (callback: DecoratorCallback) => void;
