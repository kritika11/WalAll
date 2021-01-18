import React from 'react';
import {View, StyleSheet } from 'react-native';

import ScreenName from '../components/ScreenName.js'

export default class ITHelpScreen extends React.Component{
    static navigationOptions = {

    };

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <ScreenName name={'IT Help'} />
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});