import React, { Component } from "React"
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-swipeable'
import FirebaseImp, { ToggleSwitch, GetStateStatus } from './firebase-service/FirebaseImp'

export default class ListItems extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            swipeable: null,
            turn: 'Open',
            status: 'Off',
        })
    }

    toggleOnOFF = () => {
        this.handleUserBeganScrollingParentView()
        this.setState(p => {
            return { turn: p.turn == 'Open' ? 'Close' : 'Open' }
        }, () => {
            if (this.state.turn == 'Close') {
                ToggleSwitch(this.props.title.key, 1)
                this.setState(p => {
                    return { status: 'On'}
                })
            } else {
                ToggleSwitch(this.props.title.key, 0)
                this.setState(p => {
                    return { status: 'Off'}
                })
            }
        })
    }

    componentDidMount() {
        GetStateStatus(this.props.title.key).then((val) => {
            this.setState(p => {
                return {
                    status: val,
                    turn: val == 'On' ? 'Close' : 'Open'
                }
            })
        }).then(() => {
            setInterval(() => {
                GetStateStatus(this.props.title.key).then((val) => {
                    this.setState(p => {
                        return {
                            status: val,
                            turn: val == 'On' ? 'Close' : 'Open'
                        }
                    })
                })
            }, 2000)
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
                    <View style={this.state.status == 'Off' ? styles.listItemOff : styles.listItem}>
                        <Text style={[this.state.status == 'Off' ? styles.text_black : styles.text_white, styles.item]}>{this.props.title.val()}</Text>
                        {/* <Text style={styles.item_status}>{this.state.status}</Text> */}
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
        backgroundColor: '#3498db'
        // backgroundColor: 'paleturquoise'
    },
    listItemOff: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dfe6e9'
    },
    item: {
        fontSize: 16,
        fontWeight: "500"
    },
    item_status: {
        fontSize: 12,
        fontWeight: "100"
    },
    text_white: {
        color: '#fff'
    },
    text_black: {
        color: '#000'
    },
    rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: 'lightseagreen'
    },

  });