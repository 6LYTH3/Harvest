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
import FirebaseImp from './components/firebase-service/FirebaseImp'
import Actionbtn from './components/Actionbtn'
import NavBar from './components/NavBar'
import Simple from './components/Simple'
import ListItems from './components/ListItems'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <NavBar title="Harvest" />
        <View style={{flex: 0.9}}>
          <ListItems title='ไฟหน้าบ้าน'/>
          <ListItems title='ปั้มน้ำ'/>
          <ListItems title='ไฟห้องนอน'/>
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
