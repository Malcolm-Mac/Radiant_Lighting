import React from 'react';
import { View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import axios from 'axios';

const ScreenOptions = ({ navigation }) => {

    const switchToSwitchScreen= ()=>{
        navigation.navigate('FlipASwitch')
    }

    const switchToScheduleScreen= ()=>{
        navigation.navigate('home')
    }

    const switchToVoiceScreen= ()=>{
        navigation.navigate('RecordVoice')
    }


    const switchToTemperatureScreen= ()=>{
        navigation.navigate('LightTemperature')
    }
    

    const switchToBrightnessScreen= ()=>{
        navigation.navigate('Brightness')
    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableHighlight style={styles.buttonsStyle}>
                    <Button
                        title="Switch The Light"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={switchToSwitchScreen}
                    />
                </TouchableHighlight>
            </View>

            <View>
                <TouchableHighlight style={styles.buttonsStyle}>
                    <Button
                        title="Check Temperature"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={switchToTemperatureScreen}
                    />
                </TouchableHighlight>
            </View>

            <View>
                <TouchableHighlight style={styles.buttonsStyle}>
                    <Button
                        title="Check Brightness"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={switchToBrightnessScreen}
                    />
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A40',
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 0
    },
    buttonsStyle: {
        color: '#841584',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 10,
        top: 4,
        width: 250,
        shadowColor: 'rgba(46, 229, 157, 0.4)',
        shadowOpacity: 0.8,
        elevation: 6
    },
})

export default ScreenOptions;