import React, { useState } from 'react';
import axios from 'axios';
import { View, Image, Text, Switch, StyleSheet } from 'react-native';

const FlipASwitch = navigation => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        if (isEnabled) {
            axios.get(`http://192.168.8.107/radiantlight/off`).then(res => { })
        } else {
            axios.get(`http://192.168.8.107/radiantlight/on`).then(res => { })
        }
    };

    return (
        <View style={styles.container}>
            <View>
                {isEnabled ?
                    <View>
                        <Text style={styles.titleText}>
                            Light On
                        </Text>
                        <Image source={require('../../../assets/Light.png')} style={styles.image}></Image>
                    </View>
                    :
                    <View>
                        <Text style={styles.titleText}>
                            Light Off
                        </Text>
                        <Image source={require('../../../assets/light_off.png')} style={styles.image}></Image>
                    </View>
                }
                <View style={styles.card}>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1A1A40',
    },
    switch: {
        paddingLeft: 18,
        paddingRight: 18,
    },
    image: {
        width: 299,
        height: 400,
        elevation: 2,
        marginTop: 6
    },
    card: {
        width : 200,
        height: 120,
        backgroundColor : 'rgb(163, 153, 233)',
        borderRadius : 3, 
        marginLeft : 50,
        flexDirection :'row',
        justifyContent :'center',
        alignItems : 'center',
    },
    titleText: {
        color: '#FFFF00',
        fontSize: 40,
        fontWeight: "bold",
        letterSpacing: 3,
        flexWrap: 'wrap',
        flexShrink: 1,
        lineHeight: 84,
        marginLeft: 75,
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
        textShadowColor: '#FFFF00',
    }
})

export default FlipASwitch;