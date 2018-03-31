import React from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';

export default class Spinner extends React.PureComponent {
    render() {
        if(this.props.active)
            return (
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator size={50}/>
                </View>
            );
        return null;
    }
}
