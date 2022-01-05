import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import defultStyles from "../app/config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Apptextinput = ({ icon, width = "100%", ...otherProps }) => {
    return (
        <View style={[styles.constainer, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} size={30} color='#000' style={styles.icon} />}
            <TextInput
                placeholderTextColor="#EA5C2B"
                style={defultStyles.text1} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({

    constainer: {
        backgroundColor: '#EEEEEE',
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        padding: 15,
        alignItems: 'center'
    },
    textInput: {
        fontSize: 18,
        fontFamily: 'Roboto',
        width: "100%",

    },
    icon: {
        marginRight: 10,

    },

})

export default Apptextinput;
