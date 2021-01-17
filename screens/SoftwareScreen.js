import React from 'react';
import { CheckBox } from 'native-base'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import ScreenName from '../components/ScreenName.js'
import Header from '../components/Header.js'

export default class SoftwareScreen extends React.Component{
    static navigationOptions = {

    };
    state={
        selectedSW1:false,
        selectedSW2:false,
        selectedSW3:false,
        selectedSW4:false,
        selectedSW5:false,
        selectedSW6:false,   
      }

    render() {
        const {selectedSW1,selectedSW2,selectedSW3,selectedSW4,selectedSW5,selectedSW6} = this.state
        return (
            <React.Fragment>
                <Header />
                <View style={styles.container}>
                    <Text style={styles.header}>List of softwares for you</Text>
                    <View style={styles.item}>
                        <CheckBox checked={selectedSW1} color="#fc5185" onPress={()=>this.setState({selectedSW1:!selectedSW1})}/>
                        <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selectedSW1?"#fc5185":"gray",
                                fontWeight:this.state.selectedSW1? "bold" : "normal"
                            }}
                        >SAP Logon v.7.5</Text>
                    </View>
                    <View style={styles.item}>
                        <CheckBox checked={selectedSW2} color="#fc5185" onPress={()=>this.setState({selectedSW2:!selectedSW2})}/>
                        <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selectedSW2?"#fc5185":"gray",
                                fontWeight:this.state.selectedSW2? "bold" : "normal"
                            }}
                        >Eclipse v.Neon</Text>
                    </View>
                    <View style={styles.item}>
                        <CheckBox checked={selectedSW3} color="#fc5185" onPress={()=>this.setState({selectedSW3:!selectedSW3})}/>
                        <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selectedSW3?"#fc5185":"gray",
                                fontWeight:this.state.selectedSW3? "bold" : "normal"
                            }}
                        >HANA Studio v.2.0.3</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.header}>Other softwares available</Text>
                    <View style={styles.item}>
                        <CheckBox checked={selectedSW4} color="#fc5185" onPress={()=>this.setState({selectedSW4:!selectedSW4})}/>
                        <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selectedSW4?"#fc5185":"gray",
                                fontWeight:this.state.selectedSW4? "bold" : "normal"
                            }}
                        >Azure Data Studio v.1.25.1</Text>
                    </View>
                    <View style={styles.item}>
                        <CheckBox checked={selectedSW5} color="#fc5185" onPress={()=>this.setState({selectedSW5:!selectedSW5})}/>
                        <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selectedSW5?"#fc5185":"gray",
                                fontWeight:this.state.selectedSW5? "bold" : "normal"
                            }}
                        >Visual Studio Code v.1.52.0</Text>
                    </View>
                    <View style={styles.item}>
                        <CheckBox checked={selectedSW6} color="#fc5185" onPress={()=>this.setState({selectedSW6:!selectedSW6})}/>
                        <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selectedSW6?"#fc5185":"gray",
                                fontWeight:this.state.selectedSW6? "bold" : "normal"
                            }}
                        >IntelliJ Idea v.2020.3</Text>
                    </View>
                    <TouchableOpacity style={styles.submit}>
                        <Text style={{color:"white"}}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#364f6b",
        marginBottom: 40
    },
    item:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:20,
        padding:10,
        marginBottom:10,
        flexDirection:"row",
    },
    checkBoxTxt:{
        marginLeft:20
    },
    submit:{
        width:"80%",
        backgroundColor:"#fc5185",
        borderRadius:20,
        padding:10,
        alignItems:"center",
        marginTop:40
    },
});