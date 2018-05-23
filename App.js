import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FirebaseImp, { GetRegisterItem } from './components/firebase-service/FirebaseImp'
import NavBar from './components/NavBar'
import Simple from './components/Simple'
import ListItems from './components/ListItems'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    this.state = ({
      items: [],
    })

  }

  componentDidMount() {
    GetRegisterItem().then((data) => {
      this.setState(d => {
        return {items: data}
      }, () => this.forceUpdate())
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title="Smart Remote Control" />
        <View style={{ flex: 0.9 }}>
          {
            this.state.items.map(function (d, i) {
              return (<ListItems key={d.val()} title={d} />)
            })
          }
        </View>
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
