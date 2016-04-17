/*
 *  @flow weak
 *  @yaya:module App
 *  @yaya:component View
 */

import React, {Component, Text} from 'react-native';
import _ from 'lodash';
import style from './style';
import type {PROPS, STATE, STORE} from './flow';

export default class App extends Component {

  _ready = {updated: 1};

  isReady() {
    return _.find(this.state, this._ready);
  }

  state: STATE = {
    updated: 0
  };

  componentWillReceiveProps(next_props: PROPS) {
    this.setState({updated: ++this.state.updated});
  }

  render(): Component {
    return (
      <Text>
        Hello! I am the Yaya component of the App module.
        Find me here /Users/francois/Projects/Yaya/rn-lab/app/Util/App.
        Enjoy coding!
      </Text>
    );
  }
}
