import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class Simple extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            counter: 0,
        })
    }

    increment = () => {
        this.setState(p => {
            return { counter: (p.counter + 1) }
        })
    }

    render() {
        return (
            <View>
                <Text>{this.state.counter}</Text>
                <Button
                    onPress={this.increment}
                    title="Increment"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
            </View>
        )
    }
}