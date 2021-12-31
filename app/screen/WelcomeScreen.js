import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';


const WelcomeScreen = () => {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/pic1.jpg")}
        >
            <Text style={styles.title}>Sample Work</Text>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/githubpic1.png")}
                />
                <Text style={styles.logoText}>Hi, I am Salitha Ekanayaka</Text>
            </View>
            <AppButton title='HI' color="#F3C892" />
            {/* <View
                style={styles.loginButton}
            >
                <Text style={styles.text1}>Login</Text>
            </View> */}
            <View
                style={styles.registerButton}
            >
                <Text style={styles.text1}>Register</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',

    },
    title: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 20,
        position: 'absolute',
        top: 70
    },
    loginButton: {
        width: '90%',
        height: 70,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,

    },
    registerButton: {
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
        height: 70,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 10,
        borderColor: 'royalblue',
        borderRadius: 20

    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        //position: 'absolute',


    },
    logoText: {
        alignSelf: 'center',
        //top: 200,
    },
    text1: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,

    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: 300,
    }
});
export default WelcomeScreen;