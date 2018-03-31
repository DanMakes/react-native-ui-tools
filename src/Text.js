import React from 'react';
import {
    Text
} from 'react-native';
import {fontFamily} from "../../helpers/config";

export default class Pext extends React.PureComponent {
    render() {
        return (

            <Text style={[{fontFamily,textAlign:'right'},this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}
