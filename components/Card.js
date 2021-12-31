import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Apptext from './AppText';

const Card = ({ title, subtitle, image }) => {
    return (
        <View style={styles.card}>
            <Image
                //resizeMode='contain'
                style={styles.image}
                source={image}
            />
            <View style={styles.detailsContainer}>
                <Apptext style={styles.title}>{title}</Apptext>
                <Apptext style={styles.subtitle}>{subtitle}</Apptext>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 10
    },
    detailsContainer: {
        padding: 20,
        paddingLeft: 30,
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        color: '#064635',
        fontWeight: 'bold'
    }
})

export default Card;
