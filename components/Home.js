import React from 'react';
import {TextInput, Image, View, Button} from 'react-native';
import {GlobalStyle, InputStyle} from '../Style';
import { StackNavigator } from 'react-navigation';
import List from './List';

class Home extends React.Component {

    static navigationOptions = {
        title: 'Rechercher une ville',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: () => (
            <Image
                source={require('./icons/home.png')}
                style={GlobalStyle.icon}
            />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            city: 'Montpellier'
        };
    }

    setCity(city) {
        this.setState({city});
    }

    submit() {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render() {
        return (
            <View style={GlobalStyle.container}>
                <TextInput
                    style={InputStyle}
                    onChangeText={(text) => this.setCity(text)}
                    value={this.state.city}
                />
                <Button color={GlobalStyle.color} onPress={() => this.submit()} title="Rechercher"/>
            </View>
        )
    }
}

const navigationOptions = {
    headerStyle: GlobalStyle.header,
    headerTitleStyle: GlobalStyle.headerStyle
};

export default StackNavigator({
    Result: {
        screen: List,
        navigationOptions
    },
    Home: {
        screen: Home,
        navigationOptions
    }
})
