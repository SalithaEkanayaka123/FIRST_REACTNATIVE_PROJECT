import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import Screen from './Screen';

const Textinputscreen = () => {

    const [name, setName] = useState("");

    return (
        <Screen>
            <TextInput
                secureTextEntry
                maxLength={200}
                keyboardType='numeric'
                onChangeText={text => setName(text)}
                placeholder='Name'
                style={
                    styles.textField1
                }
            />
            <Text>{name}</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    textField1: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,

    }
})

export default Textinputscreen;
