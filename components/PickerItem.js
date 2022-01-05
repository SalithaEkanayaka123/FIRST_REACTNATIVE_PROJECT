import React from 'react';
import { View, StyleSheet, TouchableNativeFeedbackBase, TouchableOpacity } from 'react-native';

import Apptext from './AppText';

const Pickeritem = ({ item, label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Apptext style={styles.text}>
                {label}
            </Apptext>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,

    }
})

export default Pickeritem;
