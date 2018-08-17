import Vue from "vue";
export declare let vueVersion: number;
export declare type TargetOrEventName = string | ((v: Vue) => Vue) | undefined;
export declare function processEventArgs(arg1: TargetOrEventName, arg2: TargetOrEventName): {
    targetFn: ((v: Vue) => Vue) | null;
    evtName: string | null;
};
export declare function merge<TKey extends string, THandler>(key: TKey, options: {
    [key in TKey]: THandler[];
}, handler: THandler): void;
export declare function camelToKebabCase(str: string): string;
export declare function parentMethods(target: Function, instance: Object): void;
export declare function getDeepValue(object: Object, propertys: string): any;
