import React from 'react';
import {
    View
} from 'react-native';

export default class Item extends React.PureComponent {
    render() {
        return (
            <View style={[{borderRadius:10,flexDirection:'row',alignItems:'center'},this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}
