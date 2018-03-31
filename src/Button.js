import React from 'react';
import {
    StyleSheet,
    Text, TouchableNativeFeedback, View
} from 'react-native';
import {colors,fontFamily} from "../../helpers/config";

export default class Button extends React.PureComponent {
    render() {
        return (
            <TouchableNativeFeedback
                {...this.props}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={[styles.button, this.props.style]}>
                    {this.props.children}
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: colors.main,
        fontSize: 20,
        fontFamily
    }
});
