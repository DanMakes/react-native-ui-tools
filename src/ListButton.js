import React from 'react';
import {
    StyleSheet,
    TouchableNativeFeedback, View,
    Platform,
    TouchableOpacity
} from 'react-native';
import {colors, fontFamily} from "../config";
import Text from './Text';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListButton extends React.PureComponent {
    render() {
        if (Platform.OS === 'android')
            return (
                <TouchableNativeFeedback
                    {...this.props}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={[styles.button, styles.listButton, this.props.style]}>
                        <Text style={{fontSize: 20, marginRight: 20, ...this.props.labelStyle}}>
                            {this.props.label}
                        </Text>
                        <Icon name={this.props.icon} size={30} style={this.props.iconStyle}/>
                    </View>
                </TouchableNativeFeedback>
            );

        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.button, styles.listButton, this.props.style]}
            >
                <Text style={{fontSize: 16, marginRight: 10, ...this.props.labelStyle}}>
                    {this.props.label}
                </Text>
                <Icon name={this.props.icon} size={this.props.iconSize || 25} style={this.props.iconStyle}/>
            </TouchableOpacity>
        );

    }
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: colors.main,
        fontSize: 16,
        fontFamily
    },
    listButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20,
        paddingVertical: 5,
        borderRadius: 0
    }
});
