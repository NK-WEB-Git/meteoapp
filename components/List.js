import React from 'react';
import { Text, ActivityIndicator } from 'react-native'
import { GlobalStyle } from '../Style';
import axios from 'axios';


export default class List extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            // title: `Meteo / ${navigation.state.params.city}`
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            city: 'Montpellier',// this.props.navigation.state.params.city,
            report: null
        };
        this.fetchWather();
    }

    fetchWather() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&cnt=10&mode=jspn&&APPID=684d293255732696b9cab72562a124e3`)
            .then((response) => {
                this.setState({report: response.data});
            });
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={GlobalStyle.color} size="large"/>
            )
        } else {
            return (
                <Text>Salut les gens</Text>
            );
        }
    }
}