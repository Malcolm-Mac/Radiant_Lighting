import React, { useState } from 'react';
import axios from 'axios';
import { View, StyleSheet } from 'react-native';

const Brightness = navigation => {

    axios.get(`http://192.168.8.107/getlightreadings`).then(response => {
        console.log(response);
    })

    return (
        <View style={styles.container}>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1A1A40',
    }
})

export default Brightness;