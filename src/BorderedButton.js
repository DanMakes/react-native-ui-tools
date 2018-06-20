import React from 'react';
import {
    StyleSheet,
    Text, TouchableNativeFeedback, View,TouchableOpacity,
    Platform
} from 'react-native';
import {fontFamily} from "../config";

export default class BorderedButton extends React.PureComponent {
    render() {
        if(Platform.OS === 'android')
            return (
                <TouchableNativeFeedback
                    {...this.props}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={[styles.borderedButton, this.props.style]}>
                        <Text style={[styles.borderedButtonText, this.props.textStyle]}>
                            {this.props.children}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            );


        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.borderedButton, this.props.style]}>
                <Text style={[styles.borderedButtonText, this.props.textStyle]}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    borderedButton:{
        width: '100%',
        height: 50,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderedButtonText:{
        color: '#fff',
        fontSize: 20,
        fontFamily
    }
});
