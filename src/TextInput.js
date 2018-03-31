import React from 'react';
import {
    TextInput
} from 'react-native';
import {fontFamily} from "../config";

export default class Pext extends React.PureComponent {
    render() {
        return (

            <TextInput
                placeholderTextColor='#ddd'
                underlineColorAndroid='#ddd'
                {...this.props}
                style={[
                    {
                        fontFamily,
                        color: '#fff',
                        fontSize: 20
                    }, this.props.style]} />
        );
    }
}
