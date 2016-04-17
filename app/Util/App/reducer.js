/*
 *  @flow weak
 *  @yaya:module App
 *  @yaya:component Reducer
 */

import _ from 'lodash';
import * as types from './constants';
import type {STORE, ACTION} from './flow';

const initial_state: STORE = {
};

export default function reducer(state: STORE = initial_state, action: ACTION)
: STORE {
  switch (action.type) {
  // case types.MY_ACTION:
  //   return {...state,};
  default:
    return state;
  }
}
