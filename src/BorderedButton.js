import React from 'react';
import {
    StyleSheet,
    Text, TouchableNativeFeedback, View
} from 'react-native';
import {fontFamily} from "../../helpers/config";

export default class BorderedButton extends React.PureComponent {
    render() {
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
    }
}

const styles = StyleSheet.create({
    borderedButton:{
        width: '90%',
        height: 50,
        marginBottom: 10,
        borderRadius: 10,
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
