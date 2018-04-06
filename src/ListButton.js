import React from 'react';
import {
    StyleSheet,
    TouchableNativeFeedback, View
} from 'react-native';
import {colors,fontFamily} from "../config";
import Text from './Text';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListButton extends React.PureComponent {
    render() {
        return (
            <TouchableNativeFeedback
                {...this.props}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={[styles.button,styles.listButton,this.props.style]}>
                    <Text style={{fontSize:20, marginRight:20}}>
                        {this.props.label}
                    </Text>
                    <Icon name={this.props.icon} size={30} />
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
    },
    listButton:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingRight:20,
        paddingVertical:20
    }
});
