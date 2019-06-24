import React, { Component } from 'react'
import { Text, View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
//Dependencies
import {Scene, Tabs, Stack} from 'react-native-router-flux'
//Compoennetes
import ContainerOnePage from '../../contain1/containers/contain1Page'
import ContainerTwoPage from '../../contain2/container/contain2Page'
// import console = require('console');

export default class HomeContainer extends Component {
    constructor(){
        super()
        this.state={
            verModal: false
        }
    }
    render() {
        return (
            <View style={styles.container}
                onLayout={ (e) => {
                    console.warn(e.nativeEvent.layout.y)
                }}
            >

                <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({verModal:true})
                            }}
                        >
                    <Text> Movistar Total </Text>
                </TouchableWithoutFeedback>
                <Modal
                    visible={this.state.verModal}
                >
                    <View>
                        <Text>Dentro del Modal</Text>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({verModal:false})
                            }}
                        >
                    <Text> Contenedor 2 Hello world! </Text>
                </TouchableWithoutFeedback>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:60,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})