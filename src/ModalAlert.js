import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Linking,
    ScrollView,
    Platform,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import {
    colors,
    fontFamily
} from '../config'
import Modal from './Modal';
import Text from './Text';
import Spinner from './Spinner';
import Icon from 'react-native-vector-icons/Ionicons';


export default class ModalExample extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let modalContent = <View/>;
        if (this.props.loading)
            modalContent = <View style={{padding: 20}}>
                <ActivityIndicator size={50}/>
            </View>;
        else {
            modalContent = <View>
                <View style={[styles.header, this.props.headerStyle]}>
                    <View style={styles.header1}>
                        <View style={styles.rightHeader}>
                            {this.props.headerText && <Text style={[styles.headerText, this.props.headerTextStyle]}>
                                {this.props.headerText}
                            </Text>}
                            {this.props.headerIcon &&
                            <Icon name={this.props.headerIcon} size={this.props.iconSize ? this.props.iconSize : 30}
                                  style={[styles.icon,this.props.headerIconStyle]}/>
                            }
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.messageContainer}>
                    {this.props.children}
                </ScrollView>

                {this.props.actionButton && <View style={styles.bottomRow}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.actionButtonOnPress}
                    >
                        <Text style={styles.url}>
                            {this.props.actionButton}
                        </Text>
                    </TouchableOpacity>

                </View>
                }
            </View>
        }
        return (
            <Modal
                {...this.props}
                modalStyle={styles.modal}
                ref="modal"
            >
                {modalContent}
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    modal: {
        borderRadius: 8,
        backgroundColor: colors.white,
        zIndex: 1000
    },
    header: {
        paddingTop: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    header1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 12
    },
    rightHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    headerText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconClose: {
        color: colors.white,
        fontSize: 20
    },
    icon:{
        marginLeft:20
    },
    messageContainer: {
        padding: 10,
        maxHeight: 300,
        backgroundColor: colors.gray95
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        // margin: 16
    },
    button: {
        height: 45,
        alignItems: `center`,
        justifyContent: 'center',
        borderRadius: 8,
        shadowRadius: 3,
        shadowOpacity: 0.7,
        padding: 16,
        flex:1
    },
    row: {
        paddingRight: 4
    },
    url:{
        fontSize:18
    }
});