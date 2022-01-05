import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Icon = ({ name, size = 40, backgroundColor = '#000', iconColor = '#ffffff' }) => {
    console.log(iconColor)
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Icon;
