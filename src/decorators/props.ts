import Vue from 'vue';
import { VueDecorator, VueDecoratorTarget } from 'core';

export default function Props(target: Vue, propertyKey: string): any;
export default function Props(factory?: () => any): any;
export default function Props(this: Vue): any | undefined {
  function props(factory: () => any | undefined, target: VueDecoratorTarget, propertyKey: string) {
    VueDecorator('Props', target)(v => {
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
      props.apply(this, [args[0], ...Array.from(arguments)]);
    };
  } else {
    props.apply(this, [undefined, ...Array.from(arguments)]);
  }
  return;
}
