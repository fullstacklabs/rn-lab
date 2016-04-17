/*
 *  @flow weak
 *  @yaya:module App
 *  @yaya:component Flow
 */

// #EXAMPLE of a deserialized data from JSON API
export type DESERIALIZED = {
  id: string,
};

// #EXAMPLE of a store. There can be more than 1 store.
export type STORE = {
//   loading?: boolean,
//   loaded?: boolean,
//   error?: Error,
//   data: Object|Array<Object>,
//   current: Object,
};

// #EXAMPLE of action passsed to reducer function
export type ACTION = {
  type: string,
//   params: Object,
};

// #EXAMPLE of flow for component's props
export type PROPS = {
  actions: Object,
  dispatch: Function,
  App: STORE,
};

// #EXAMPLE of flow for component's state
export type STATE = {
  updated: boolean,
};
