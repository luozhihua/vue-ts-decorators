import Vue, { CreateElement, VNode } from "vue";
export declare type RenderFunction = (createElement: CreateElement) => VNode;
export default function Render(target: Vue, propertyKey: "render", descriptor: TypedPropertyDescriptor<RenderFunction>): TypedPropertyDescriptor<RenderFunction>;
export default function Render(): TypedPropertyDescriptor<RenderFunction>;
