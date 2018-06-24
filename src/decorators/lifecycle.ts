import Vue from "vue";
import {VueDecorator, VueDecoratorTarget} from "../utils/core";

export type LifecycleName = "beforeCreate" | "created" | "beforeDestroy" | "destroyed" | "beforeMount" | "mounted" | "beforeUpdate" | "updated" | "activated" | "deactivated";

export default function Lifecycle(target : Vue, propertyKey : LifecycleName, descriptor : PropertyDescriptor) : any
export default function Lifecycle() : any
export default function Lifecycle(this : Vue) : any {
  function lifecycle(target : VueDecoratorTarget, propertyKey : LifecycleName, descriptor : PropertyDescriptor) {
    VueDecorator("Lifecycle", target)(v => {
      if (!v.options[propertyKey]) {
        v.options[propertyKey] = [descriptor.value]as any;
      } else if (v.options[propertyKey]instanceof Array) {
        (v.options[propertyKey]as any).push(descriptor.value);
      } else {
        v.options[propertyKey] = [v.options[propertyKey], descriptor.value]as any;
      }
    });
  }
  if (arguments.length === 0) {
    return function (this : VueDecoratorTarget) {
      lifecycle.apply(this, arguments);
    };
  } else {
    lifecycle.apply(this, arguments);
  }
  return;
}
