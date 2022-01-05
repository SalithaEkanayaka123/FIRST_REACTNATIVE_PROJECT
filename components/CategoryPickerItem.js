import React from 'react';
import { View, StyleSheet } from 'react-native';
import Apptext from './AppText';
import Icon from './Icon';

const Categorypickeritem = ({ item, onPress }) => {
    console.log(item)
    return <View style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
        <Apptext style={styles.label}> {item.label} </Apptext>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: "4%",
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default Categorypickeritem;
