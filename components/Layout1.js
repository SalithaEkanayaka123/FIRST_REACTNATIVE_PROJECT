import React from 'react';

import {
    StyleSheet, Text, View, SafeAreaView, Image,
    TouchableWithoutFeedback, Platform, StatusBar
} from 'react-native';



function Layout1() {

    const handlePress = () => {
        console.log('text touched')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text
                numberOfLines={1}
                onPress={handlePress}
            >
                Hello I am salitha. My age is 22. My campus is SLIIT. In am an undergraduate in software engineering specification
            </Text>
            <TouchableWithoutFeedback
                onPress={() => console.log('image tapped')}
            >
                <Image source={
                    //require("..//assets/githubpic1.png")
                    require("../app/assets/githubpic1.png")
                }
                    style={
                        {
                            width: 200,
                            height: 200
                        }
                    }
                />
            </TouchableWithoutFeedback>


            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default Layout1;