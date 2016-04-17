/*
 *  @flow weak
 *  @yaya:module App
 *  @yaya:component Style
 */

import {StyleSheet} from 'react-native';
import * as global_style from '../../Util/Style';

const style = {
  container: {
    ...global_style.mixins.container,
    ...global_style.methods.flex(),
    backgroundColor: global_style.vars.colors.brand,
  },
};

export default StyleSheet.create(style);
