import React from 'react';
import {
    StyleSheet, Text, View, SafeAreaView, Image,
    TouchableWithoutFeedback, Platform, StatusBar, Dimensions
} from 'react-native';

import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

const Layout2 = () => {
    console.log('app executed')

    const { landscape } = useDeviceOrientation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: '100%',
                height: landscape ? '100%' : '90%',
            }}>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'dodgerblue',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default Layout2;