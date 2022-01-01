import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function ViewImageScreen() {
    return (

        <View
            style={styles.container}
        >
            <View>
                <View
                    style={styles.closeIcon}
                >
                    <Image
                        resizeMode='cover'
                        source={require('../assets/close.png')}
                        style={styles.image1}
                    />
                </View>
                <View
                    style={styles.deleteIcon}
                >
                    <Image
                        resizeMode='cover'
                        source={require('../assets/bin.png')}
                        style={styles.image1}
                    />
                </View>
            </View>

            <View
                style={styles.imageContainer}
            >
                <Image
                    //resizeMode='contain'
                    style={styles.image}
                    source={require('../assets/pic2.jpg')}

                />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 400,
        //height: 600,
        alignSelf: 'center',
        marginTop: '30%',
        marginBottom: '1%'

    },
    image: {
        width: '100%',
        height: '100%',


    },
    image1: {
        width: '100%',
        height: '100%',
    },
    container: {
        backgroundColor: "#f0f",
        flex: 1,
    },
    closeIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 70,
        left: 30,
        // backgroundColor: '#000000'
    },
    deleteIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 70,
        right: 30,
    }
});
