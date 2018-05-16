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

    GetName() {
        firebase.database().ref('user/name').once('value', (snap) => {
            this.setState(d => {
                return { data: snap.val() }
            })
        })
    }

    componentDidMount() {
        setInterval(() => {
            this.GetName()
        }, 5000)
    }
    render() {
        return (
            <View>
                <Text>Text From FirebaseImp: {this.state.data}</Text>
            </View>
        )
    }
}

let items = []
export function GetRegisterItem() {
    firebase.database().ref('ctrl/title').once('value', (snap) => {
        snap.forEach(function (child) {
            if ((child.val() != '-')) {
                items.push(child)
            }
        })
    })
}

export function GetItems() {
    return items
}