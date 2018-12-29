import React from 'react';
import {
  TextInput,
  Platform
} from 'react-native';
import { fontFamily } from "../config";

export default class Pext extends React.PureComponent {
  render() {
    return (
      <TextInput
        placeholderTextColor='#ddd'
        underlineColorAndroid='#ddd'
        {...this.props}
        onChangeText={(str) => {
          if (this.props.onChangeText) {
            let persianNumbers = [ /۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g ],
              arabicNumbers = [ /٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g ];
            for (let i = 0; i < 10; i++) {
              str = str.replace(persianNumbers[ i ], i).replace(arabicNumbers[ i ], i);
            }
            this.props.onChangeText(str);
          }
        }}
        style={[
          {
            fontFamily,
            color: '#fff',
            borderWidth: Platform.OS === 'ios' ? 1 : 0,
            borderColor: '#fff',
            fontSize: Platform.OS === 'android' ? 20 : 16,
            height: 60,
            textAlign: 'right'
          }, this.props.style ]}/>
    );
  }
}
