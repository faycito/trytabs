import React, { Component } from 'react'
import { Text, View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'

export default class ContainTwoPage extends Component {
    
    constructor(){
        super()
        this.state={
            verModal: false
        }
    }

    componentWillMount(){
        console.warn("willmount")
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback
                onPress={() => {
                    this.setState({verModal:true})
                }}
                >
                    <Text> Contenedor 2 Hello world! </Text>
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
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    }
})