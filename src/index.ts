import Vue from 'vue';
import Component, {mixins as Mixins} from 'vue-class-component';
import { Inject, Model, Prop, Provide, Watch, Emit} from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'
import Props from './decorators/props'
import Lifecycle from './decorators/lifecycle'
import Data from './decorators/data'
import Render from './decorators/render'
import On from './decorators/on'
import Once from './decorators/once'
import Filter from './decorators/filter'

export {
  Vue,
  Component,
  Mixins,
  Props,
  Prop,
  Watch,
  Model,
  Inject,
  Provide,
  Emit,

  // Vuety
  Lifecycle,
  Data,
  Render,
  On,
  Once,

  // vue-ts-decorate
  Filter,

  // vuex-class
  State,
  Getter,
  Action,
  Mutation,
  namespace
};
