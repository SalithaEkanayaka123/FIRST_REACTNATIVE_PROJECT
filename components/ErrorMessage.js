import React from 'react';
import { View, StyleSheet } from 'react-native';
import Apptext from './AppText';

const Errormessage = ({ error, visible }) => {

    if (!visible || !error) return null;
    return (
        <Apptext style={styles.error}>
            {error}
        </Apptext>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})

export default Errormessage;
