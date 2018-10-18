import React from 'react';
import {
  StyleSheet,
  Text, TouchableNativeFeedback, View,TouchableOpacity,
  Platform
} from 'react-native';
import {colors,fontFamily} from "../config";

export default class Button extends React.PureComponent {
  render() {
    if(Platform.OS === 'android')
      return (
        <TouchableNativeFeedback
          {...this.props}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={[styles.button, this.props.style]}>
            {this.props.children}
          </View>
        </TouchableNativeFeedback>
      );

    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.button, this.props.style]}>
        {this.props.children}
      </TouchableOpacity>
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
