import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import defultStyles from "../app/config/styles";
const Apptext = ({ children, style, ...otherProps }) => {
    return (
        <Text style={[defultStyles.text, style]} {...otherProps}> {children} </Text>
    );
}

const styles = StyleSheet.create({

})

export default Apptext;
