import React, { Component } from "react"
import {
    Text,
    View
} from 'react-native'
import firebase from "firebase"

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

export default class FirebaseImp extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            data: "",
        })
    }

    render() {
        return (
            <View>
                <Text>Text From FirebaseImp: {this.state.data}</Text>
            </View>
        )
    }
}

export function GetRegisterItem() {
    return new Promise(function (resolve, reject) {
        var items = []
        firebase.database().ref('ctrl/title').once('value', (snap) => {
            snap.forEach(function (child) {
                if ((child.val() != '-')) {
                    items.push(child)
                    console.log(child.val())
                }
            })
        }).then(() => {
            resolve(items)
        })
    })
}

export function ToggleSwitch(name, val) {
    var item = {};
    item[name] = val
    firebase.database().ref('ctrl/state').update(item)
}

export function GetStateStatus(name) {
    return new Promise(function (resolve, reject) {
        firebase.database().ref('ctrl/state/' + name).once('value', (snap) => {
            if(snap.val() == 0) {
                resolve('Off')
            } else {
                resolve('On')
            }
        })
    })
}