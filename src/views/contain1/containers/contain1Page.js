import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ContainOnePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Contenedor 1 Hello world! </Text>
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