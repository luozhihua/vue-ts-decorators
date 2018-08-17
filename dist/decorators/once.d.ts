import Vue from "vue";
import { DecoratorFactory } from "../utils/core";
export default function Once(target: Vue, propertyKey: string): undefined;
export default function Once(eventName?: string, target?: (v: Vue) => Vue): DecoratorFactory<string>;
export default function Once(target: (v: Vue) => Vue, eventName?: string): DecoratorFactory<string>;
