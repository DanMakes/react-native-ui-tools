import {colors} from './config';
module.exports = {
    rtl:{
        textAlign:'right'
    },
     container: {
        flexGrow:1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: colors.main,
        padding: 20
    },
    controlPanel: {
        flex: 1,
        backgroundColor:'#fbfbfb',
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: '#d8d7d7',
    },
    row: {
        flexDirection:'row'
    },
    rowReverse: {
        flexDirection: 'row-reverse'
    },
    col: {
        flexDirection:'column'
    },
    flex1:{
        flex:1
    },
    h3:{
      fontSize: 20
    },
    h4:{
        fontSize: 18
    },
    h5:{
        fontSize: 16,
        padding: 10
    },
    borderBottom:{
      borderBottomWidth: 1,
      borderBottomColor: '#ddd'
    },
    tabHeader:{
        backgroundColor:'#efefef',
        padding:10,
        width:'100%'
    },
    tabBody:{
        backgroundColor:'#fff',
        padding:10,
        width:'100%'
    },

    playButton: {
        padding: 20
    },

    errorBox:{
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:20,
        backgroundColor:'white',
        borderRadius:50,
        flexDirection:'row'
    },
    errorText:{
        color: 'red',
        textAlign:'center',
        marginRight:10
    },
    errorIcon:{
        color:'red',
        fontSize:25
    },
    input:{
    },
    inputIcon:{ color: colors.white,fontSize:24,position:'absolute',right:10 },

};
