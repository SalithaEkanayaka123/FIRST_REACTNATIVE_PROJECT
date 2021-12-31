import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';

const Apptext = ({ children, style }) => {
    return (
        <Text style={[styles.text, style]}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    }
})

export default Apptext;
