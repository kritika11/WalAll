import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';

import ScreenName from '../components/ScreenName.js'

export default class HolidayScreen extends React.Component{
    static navigationOptions = {

    };

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Text style={styles.header}>Public Holidays</Text>
                    <View style={styles.item}>
                        <Image style={styles.img} resizeMode='contain' source={require('../assets/public-holiday.png')}/>
                    </View>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    img:{
        flexDirection:'row',
        flex:1,
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:20,
        padding:10,
        marginBottom:10,
        flexDirection:"row",
    },
    header:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#364f6b",
        marginBottom: 40
    },
    item:{
        marginTop:0,
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:20,
        padding:10,
        marginBottom:10,
        flexDirection:"row",
    },
});