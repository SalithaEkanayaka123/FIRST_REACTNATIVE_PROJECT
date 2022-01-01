import React from 'react';
import { View, StyleSheet } from 'react-native';

const Customseperator = ({ size = 1, color = '#000' }) => {
    return (
        <View style={{
            width: '100%',
            height: size,
            backgroundColor: color
        }} >

        </View>
    );
}

const styles = StyleSheet.create({
    seperator: {

    }
})

export default Customseperator;
