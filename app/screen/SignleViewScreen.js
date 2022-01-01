import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Apptext from '../../components/AppText';
import Listadaptercomponent from '../../components/ListAdapterComponent';

const Signleviewscreen = () => {
    return (
        <View>
            <Image
                //resizeMode='contain'
                style={styles.image}
                source={require('../assets/shopping1.jpg')}
            />
            <View style={styles.detailsContainer}>
                <Apptext style={styles.title}>Shopping Cart 1</Apptext>
                <Apptext style={styles.subtitle}>$100</Apptext>
            </View>
            <Listadaptercomponent title="Salitha Ekanayaka" subtitle="undergraduate" image={require("../assets/githubpic1.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 500,
        marginBottom: 10
    },
    detailsContainer: {
        padding: 20,
        paddingLeft: 30,
    },
    title: {
        marginBottom: 7,
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#F0BB62',
        fontWeight: 'bold'
    }
})

export default Signleviewscreen;
