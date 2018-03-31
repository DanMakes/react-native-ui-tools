import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
  BackAndroid
} from 'react-native'
import {
  colors
} from '../../helpers/config'
class Modal extends Component {
  constructor () {
    super();

    this.state = {
      opacity: new Animated.Value(0),
      scale: new Animated.Value(0.8),
      offset: new Animated.Value(0)
    };
  }

  componentWillReceiveProps (props) {
    if (props.open && props.children !== this.state.children) {
      this.setState({ children: props.children });
    }

    if (props.open !== this.props.open) {
      if (props.open)
        this.open();
      else
        this.close();
    }
    if (props.offset !== this.props.offset) {
      this.animateOffset(props.offset);
    }
  }

  componentDidMount () {
    if (Platform.OS === 'android' && this.props.rrcloseOnTouchOutside) {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        if (this.state.open) {
          this.close();
          return true;
        }
        return false;
      });
    }
  }

  setPhase (toValue) {
    if (this.state.open != toValue) {
      const { animationDuration, animationTension } = this.props;
      Animated.timing(
        this.state.opacity,
        {
          toValue,
          duration: animationDuration
        }
      ).start();

      Animated.spring(
        this.state.scale,
        {
          toValue: toValue ? 1 : 0.8,
          tension: animationTension
        }
      ).start();

      setTimeout(() => {
        if (toValue)
          this.props.modalDidOpen();
        else {
          this.setState({ open: false, children: undefined });
          this.props.modalDidClose();
        }
      }, animationDuration);
    }
  }

  render () {
    const { opacity, open, scale, children,offset } = this.state;
    let containerStyles = [ styles.absolute, styles.container, this.props.containerStyle ];
let backStyle= { flex: 1, opacity, backgroundColor: this.props.overlayBackground };
    return (
      <View
        pointerEvents={open ? 'auto' : 'none'}
        style={containerStyles}>
        <TouchableOpacity
          style={styles.absolute}
          disabled={!this.props.closeOnTouchOutside}
          onPress={this.close.bind(this)}
          activeOpacity={0.75}>
          <Animated.View style={backStyle}/>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.defaultModalStyle,
            this.props.modalStyle,
            { opacity, transform: [ { scale },{translateY: offset} ] }
          ]}>
          {children}
        </Animated.View>
      </View>
    );
  }

  open () {
    this.setState({ open: true });
    this.setPhase(1);
  }

  close () {
    this.setPhase(0);
  }
  animateOffset(offset) {
    Animated.spring(
      this.state.offset,
      {toValue: offset}
    ).start();
  }

}

Modal.propTypes = {
  open: PropTypes.bool,
  overlayBackground: PropTypes.string,
  animationDuration: PropTypes.number,
  animationTension: PropTypes.number,
  modalDidOpen: PropTypes.func,
  modalDidClose: PropTypes.func,
  closeOnTouchOutside: PropTypes.bool,
  offset: PropTypes.number,
};

Modal.defaultProps = {
  open: false,
  overlayBackground: 'rgba(0, 0, 0, 0.75)',
  animationDuration: 200,
  animationTension: 20,
  modalDidOpen: () => undefined,
  modalDidClose: () => undefined,
  closeOnTouchOutside: true,
  offset: 0,
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.transparent,
      zIndex:1000
  },
  container: {
    justifyContent: 'center',
    // position: 'relative',

  },
  defaultModalStyle: {
    borderRadius: 8,
    margin: 20,
    // padding: 10,
    backgroundColor: colors.gray96
  },
});

export default Modal;
