import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';


const Landing = ({ navigation }) => {
    const [titleText, setTitleText] = useState("Radiant");
    const [title2Text, setTitle2Text] = useState(" Lighting");
    const [title3Text, setTitle3Text] = useState(" Home Automation");

    const switchToHomeScreen= ()=>{
        navigation.navigate('ScreenOptions')
    }
                        
    return (
        <View style={styles.container}>

            {<ImageBackground source={require('../../../assets/Stars.png')} resizeMode="contain" style={styles.starsStyle}></ImageBackground>}
            {<Text style={styles.titleText}>
                {titleText}
                <Text style={styles.innerTitleText}>
                    {title2Text}
                </Text>
            </Text>
            }
            <Text style={styles.outterTitleText}>
                {title3Text}
            </Text>
           
            <Image source={require('../../../assets/Light.png')} resizeMode="contain" style={styles.image}></Image>
            <TouchableHighlight style={styles.buttonsStyle}>
                <Button
                    title="Explore Rad Light"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={switchToHomeScreen}
                />
            </TouchableHighlight>

            <StatusBar style="auto" />
            <View style={{ flex: .2 }}><Text style={styles.footer}>Developed By Malcolm Tsimo © 2022</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A40',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 0
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    starsStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 0
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginBottom: 250
    },
    titleText: {
        color: '#FFFF00',
        fontSize: 40,
        fontWeight: "bold",
        letterSpacing: 3,
        flexWrap: 'wrap',
        flexShrink: 1,
        lineHeight: 84,
        marginTop: 180,
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
        textShadowColor: '#FFFF00',
    },
    innerTitleText: {
        color: '#FFF',
        letterSpacing: 3
    },
    outterTitleText: {
        color: '#FFF',
        letterSpacing: 3,
        fontSize: 20
    },
    buttonsStyle: {
        position: 'absolute',
        color: '#841584',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 10,
        top: 560,
        width: 250,
        shadowColor: 'rgba(46, 229, 157, 0.4)',
        shadowOpacity: 0.8,
        elevation: 0
    },
    footer: {
        color: '#FFF',
        position: 'relative',
        bottom: 0
    }
});

export default Landing;
