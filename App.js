/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FirebaseImp from './app/firebase-service/FirebaseImp'
import Actionbtn from './app/Actionbtn'
import NavBar from './app/NavBar'
import Simple from './app/Simple'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <NavBar title="Harvest" />
        <View style={{flex: 0.9}}>
          <Simple />
        </View>
        <Actionbtn style={{flex: 0.1}} onPress={() => console.log('Cancel Pressed')} title="Add" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
});
