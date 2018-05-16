import React, { Component } from "React"
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-swipeable'

export default class ListItems extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            swipeable: null,
            turn: 'Open',
        })
    }

    toggleOnOFF = () => {
        this.handleUserBeganScrollingParentView()
        this.setState(p => {
            return { turn: p.turn == 'Open' ? 'Close' : 'Open' }
        })
    }

    swipeable = null
    handleUserBeganScrollingParentView() {
        this.swipeable.recenter();
    }

    render() {
        const rightButtons = [
            <TouchableHighlight onPress={this.toggleOnOFF} style={styles.rightSwipeItem}><Text>{this.state.turn}</Text></TouchableHighlight>,
        ];

        return (
            <View style={styles.container}>
                <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
                    <View style={styles.listItem}>
                        <Text style={styles.item}>{this.props.title}</Text>
                    </View>
                </Swipeable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 2,
        alignItems: 'center'
    },
    listItem: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'paleturquoise'
    },
    item: {
        fontSize: 16,
        fontWeight: "500"
    },
    rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: 'lightseagreen'
    },

  });