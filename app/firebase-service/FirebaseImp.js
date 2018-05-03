import React, { Component } from "react"
import {
    Text,
    View
} from 'react-native'
import * as firebase from "firebase"

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBdy7Wicq27hfh07jjhOSitp5jMaWTolm4",
    authDomain: "iamgroot-4a11b.firebaseapp.com",
    databaseURL: "https://iamgroot-4a11b.firebaseio.com",
    projectId: "iamgroot-4a11b",
    storageBucket: "iamgroot-4a11b.appspot.com",
    messagingSenderId: "113113588687"
  };
firebase.initializeApp(config);

class FirebaseImp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        firebase.database().ref("user/name").on('value', (snap) => {
            this.state.data = snap.val()
        })
    }
    render() {
        return (
            <View>
                <Text>Text From FirebaseImp {this.state.data}</Text>
            </View>
        )
    }
}

export default FirebaseImp