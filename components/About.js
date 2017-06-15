import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {GlobalStyle} from '../Style';

export default class About extends React.Component {

    static navigationOptions = {
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: () => (
            <Image
                source={require('./icons/user.png')}
                style={GlobalStyle.icon}
            />
        ),
    };

    search() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={GlobalStyle.container}>
                <Text style={GlobalStyle.title}>A propos de l'application</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur illo magnam modi vero vitae? Id iusto, quaerat!
                    Commodi, dicta dolores explicabo illum in laborum minus, nemo,
                    nisi possimus repellat tempora?
                </Text>
                <Button color={GlobalStyle.color} onPress={() => this.search()} title="Rechercher une ville"/>
            </View>
        );
    }
}
