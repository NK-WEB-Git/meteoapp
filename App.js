import React from 'react';
import { View, StatusBar } from 'react-native';
import About from './components/About';
import Home from './components/Home';
import {TabNavigator} from 'react-navigation';

const Tabs = TabNavigator({
   Home: {
       screen: Home
   },
   About: {
       screen: About
   }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
            height: 2,
            backgroundColor: "#FFF"
        },
        style: {
            backgroundColor: '#a2273C',
            borderTopWidth: 1,
            borderColor: '#4e1522'
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <Tabs/>
            </View>
        );
    }
}
