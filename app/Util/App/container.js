/*
 *  @flow weak
 *  @yaya:module App
 *  @yaya:component Container
 */

import makeContainer from '../../Util/Lib/makeContainer';
import * as actionsApp from './actions';
import App from './view';

const stores = ['App'];

const actions = {...actionsApp,};

export default makeContainer(actions, stores, App);
