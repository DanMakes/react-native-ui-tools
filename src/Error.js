import React from 'react';
import {
    StyleSheet,
    TouchableNativeFeedback, View
} from 'react-native';
import {colors,fontFamily} from "../config";
import Text from './Text';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

export default class ListButton extends React.PureComponent {
    render() {
        if (!!this.props.error) {
            return (
                <View style={styles.errorBox}>
                    <Text style={styles.errorText}>
                        {this.props.error}
                    </Text>
                    <Icon name="ios-alert" style={styles.errorIcon}/>
                </View>
            )
        }
        else
            return <Text/>
    }
}