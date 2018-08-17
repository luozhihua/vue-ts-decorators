import Vue from "vue";
import { DecoratorFactory } from "../utils/core";
export default function On(target: Vue, propertyKey: string): undefined;
export default function On(eventName?: string, target?: (v: Vue) => Vue): DecoratorFactory<string>;
export default function On(target: (v: Vue) => Vue, eventName?: string): DecoratorFactory<string>;
