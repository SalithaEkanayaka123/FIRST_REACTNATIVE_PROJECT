import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const AppButton = ({ title, onPress, color = "#000" }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#95CD41',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        //width: '100%'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontStyle: 'normal',
        fontWeight: 'bold'
    }
})

export default AppButton;
