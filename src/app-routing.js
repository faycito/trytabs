import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
//Dependencies
import { Router,Stack,Scene,Tabs } from 'react-native-router-flux'

//Pages
import HomeContainer from './views/home/containers/home.container'
import ContainerOnePage from './views/contain1/containers/contain1Page'
import ContainerTwoPage from './views/contain2/container/contain2Page'


export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Stack
                    key="root"
                >
                    <Stack
                        key="home"
                        title={'Mi Movistar Hogar'}
                        titleStyle={{textAlign:'center', width:'91%', color:'white' }}
                        navigationBarStyle={{textAlign:'center', backgroundColor:'#03a9f4'}}
                    >
                        <Tabs
                            key="homeTabbar"
                            routeName="homeTabbar"
                            inactiveBackgroundColor="rgba(0,0,0,.5)"
                            // lazy
                            tabBarOnPress={(e)=>{
                                console.warn(e.navigation.state.routes[0].params.tabBarLabel)
                            }}
                            showLabel={true}
                            // tabStyle={{backgroundColor:'green'}}
                            indicatorStyle={{backgroundColor:'#03a9f4', color:'green'}}
                            labelStyle={{color:'#03a9f4'}}
                            activeTintColor='#00aa00'
                            inactiveTintColor='red'
                            activeBackgroundColor={'red'}
                            tabBarPosition={'top'}
                            tabBarStyle={{backgroundColor:'white', color:'#03a9f4',}}
                            tabStyle={{color:'red'}}
                            navBar={HomeContainer}       
                            backToInitial
                            wrap            
                        >
                        
                        <Stack
                            key="tab_1"
                            title="Inicio"
                            tabBarLabel="Inicio"
                            titleStyle={{color:'red'}}
                            activeTintColor='red'
                            inactiveTintColor='red'
                            labelStyle={{color:'green'}}
                            tabStyle={{backgroundColor:'green'}}
                            
                            
                        >
                            <Scene
                                key="tab_#1_1"
                                component={ContainerOnePage}
                                title="tab1" 
                                titleStyle={{color:'red'}}
                                activeTintColor='red'
                                indicatorStyle='blue'
                                hideNavBar
                            />
                            
                        </Stack>
                        <Stack
                            key="tab_2"
                            title="Mi primer tab"
                            tabBarLabel="Recibos"
                            activeTintColor='red'
                            inactiveTintColor='red'
                            labelStyle={{color:'green'}}
                        >
                            <Scene
                                key="tab_#2_1"
                                component={ContainerTwoPage}
                                title="tab1" 
                                hideNavBar

                            />
                            
                        </Stack>
                        <Stack
                            key="tab_3"
                            title="Mi primer tab"
                            tabBarLabel="Ayuda"
                            activeTintColor='red'
                            inactiveTintColor='red'
                            labelStyle={{color:'green'}}
                        >
                            <Scene
                                key="tab_#3_1"
                                component={ContainerTwoPage}
                                title="tab1" 
                                hideNavBar

                            />
                            
                        </Stack>
                    </Tabs>
                    </Stack>
                </Stack>
            </Router>
        )
    }
}

const syles = StyleSheet.create({
    tabStyle:{
        backgroundColor:'white'

    }
})
