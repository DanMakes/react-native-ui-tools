import React from 'react';
import {
    TextInput,
    Platform
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
                        borderWidth: Platform.OS === 'ios' ? 1 : 0,
                        borderColor: '#fff',
                        fontSize: Platform.OS === 'android' ? 20 : 16,
                        height: 60
                    }, this.props.style]} />
        );
    }
}
