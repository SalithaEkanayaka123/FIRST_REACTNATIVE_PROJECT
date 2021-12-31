import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const Listitemdeleteaction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image
                    resizeMode='contain'
                    style={styles.image}
                    source={require('../app/assets/bin.png')}
                />
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9975D',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 30,
        height: 30,

    }
})

export default Listitemdeleteaction;
