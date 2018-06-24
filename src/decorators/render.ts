import Vue, {CreateElement, VNode} from "vue";
import { VueDecoratorTarget, VueDecorator } from "../utils/core";

export declare type RenderFunction = (createElement: CreateElement) => VNode;

export default function Render(target: Vue, propertyKey: "render", descriptor: TypedPropertyDescriptor<RenderFunction>): TypedPropertyDescriptor<RenderFunction>
export default function Render(): TypedPropertyDescriptor<RenderFunction>
export default function Render(this: Vue): TypedPropertyDescriptor<RenderFunction> {
    function render(target: VueDecoratorTarget, descriptor: PropertyDescriptor, propertyKey: 'render') {
        VueDecorator("Render", target)(v => {
            v.options[propertyKey] = descriptor.value;
            delete v.proto[propertyKey];
        });
    }
    if (arguments.length === 0) {
        return function (this: VueDecoratorTarget) {
            render.apply(this, arguments);
        } as any;
    } else {
        return render.apply(this, arguments) as any;
    }
}
