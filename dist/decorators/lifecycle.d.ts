import Vue from "vue";
export declare type LifecycleName = "beforeCreate" | "created" | "beforeDestroy" | "destroyed" | "beforeMount" | "mounted" | "beforeUpdate" | "updated" | "activated" | "deactivated";
export default function Lifecycle(target: Vue, propertyKey: LifecycleName, descriptor: PropertyDescriptor): any;
export default function Lifecycle(): any;
