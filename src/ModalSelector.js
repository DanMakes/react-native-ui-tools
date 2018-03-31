import React from 'react';
import {
    View
} from 'react-native';
import {fontFamily} from "../../helpers/config";
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from './Text';

export default class Selector extends React.PureComponent {
    render() {
        return (
            <ModalSelector
                {...this.props}
                style={{width: '100%', backgroundColor: '#fff', borderRadius: 10,marginVertical:10,...this.props.style}}
                optionTextStyle={{fontSize: 20, fontFamily}}
                overlayStyle={{flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.9)'}}
                animationType="fade"
                cancelContainerStyle={{backgroundColor: 'transparent'}}
                cancelStyle={{backgroundColor: '#fff'}}
                cancelTextStyle={{fontFamily, fontSize: 20}}
                cancelText='لغو'
            >
                <View style={{
                    flexDirection:'row',
                    paddingVertical:10,
                    paddingHorizontal:15,
                    alignItems:'center'
                }}>
                    <Icon name="ios-arrow-down" size={30} color='#333' />
                    <Text style={{
                        flex:1,
                        color: '#333',
                        fontSize: 20,
                        fontFamily,
                        textAlign: 'right'
                    }}>
                        {this.props.label}
                    </Text>
                </View>
            </ModalSelector>
        );
    }
}
