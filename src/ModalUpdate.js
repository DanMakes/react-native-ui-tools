import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Linking,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import {
    colors,
    firstFont,
    iconFont
} from '../constants/AppConstants'
import Modal from './Modal';
import axios from 'axios'
import DeviceInfo from'react-native-device-info';
import Text from './Text';
import {Spinner} from 'native-base';
import SplashScreen from "rn-splash-screen";



export default class ModalExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            networkError:false,
            res: {
                android:{
                    versionCode: DeviceInfo.getBuildNumber(),
                    force: false,
                    details:[]
                },
                ios:{

                }
            }
        }
    }

    getVersionData = () => {
        this.setState({
            loading: true
        });
        axios.get('https://freevery.com/appVersion.json')
            .then((res) => {
                this.setState({res:res.data,loading:false,networkError:false})
            })
            .catch((error) => {
                this.setState({networkError:true})
            })
    };

    componentDidMount = () => {
        SplashScreen.hide();

        this.getVersionData();
    };

    render() {
        let res = this.state.res[Platform.OS];
        let currentVersion = DeviceInfo.getBuildNumber();
        let modalContent = <View />;
        if(this.state.loading)
            modalContent = <View style={{padding:20}}>
                <Text style={{textAlign:'center',marginBottom:20}}>در حال دریافت اطلاعات</Text>
                <Spinner />
            </View>;
        else{
            if(this.state.networkError){
                modalContent = <View style={{padding:20}}>
                    <Text style={{textAlign:'center'}}>عدم ارتباط با سرور</Text>
                    <TouchableOpacity onPress={this.getVersionData} style={{backgroundColor:'#ddd',padding:10,marginTop:20}}>
                        <Text style={{textAlign:'center'}}>تلاش مجدد</Text>
                    </TouchableOpacity>
                </View>
            }
            else{
                modalContent = <View>
                    <View style={styles.header}>
                        <View style={styles.header1}>
                            <View style={styles.rightHeader}>
                                <Text style={styles.headerText}>نسخه جدید رسید</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={styles.messageContainer}>
                        {res.force && <Text style={styles.forceUpdateText}>آپدیت ضروری</Text>}
                        <Text>نسخه اپلیکیشن شما: {DeviceInfo.getVersion()}</Text>
                        <Text>نسخه اپلیکیشن جدید: {res.versionName}</Text>
                        <Text>قابلیت ها:</Text>
                        {res.details.map((text,i)=>
                            <Text style={{color:colors.base}} key={i}> - {text}</Text>
                        )}
                    </ScrollView>

                    <View style={styles.bottomRow}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                Linking.openURL(res.url);
                            }}
                        >

                            <Text style={styles.url}>
                                دانلود
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            }
        }
        return (
            <Modal
                open={this.state.loading || this.state.networkError || res.versionCode !== DeviceInfo.getBuildNumber()}
                modalStyle={styles.modal}
                ref="modal"
                closeOnTouchOutside={!this.state.loading && !this.state.networkError && !res.force}
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
        zIndex:1000
    },
    header: {
        borderRadius: 8,
        paddingTop: 8,
        backgroundColor: colors.base
    },
    header1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 12,
        backgroundColor: colors.base
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
        fontFamily: firstFont,
        fontWeight: 'bold',
        textAlign:'center'
    },
    iconClose: {
        color: colors.white,
        fontFamily: iconFont,
        fontSize: 20
    },
    icon: {
        color: colors.white,
        fontSize: 24,
        fontFamily: iconFont,
    },
    iconFab: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8
    },
    messageContainer: {
        padding: 10,
        maxHeight: 300,
        backgroundColor: colors.gray95
    },
    version: {
        fontFamily: firstFont,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    changeLog: {
        fontFamily: firstFont,
        color: colors.gray46,
        textAlign: 'right',
        marginRight: 8,
        paddingBottom: 4,
        // margin:14
    },
    url: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'right',
        color: colors.base,
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
        padding: 16
    },
    row: {
        paddingRight: 4
    },
    forceUpdateText:{fontSize: 24, textAlign: 'center',margin:10,color:'red',borderBottomWidth:1,borderBottomColor:'#ddd'}
});