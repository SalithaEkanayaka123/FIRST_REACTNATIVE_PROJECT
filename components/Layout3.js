import React from 'react';
import { View } from 'react-native';

function Layout3(props) {
    console.log('text touched')
    return (
        <View style={{
            backgroundColor: '#ffffff',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            // alignContent: 'center',
            // flexWrap: 'wrap'
        }}>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: 100,
                height: 100
            }} />
            <View style={{
                backgroundColor: 'pink',
                width: 100,
                height: 100
            }} />
            <View style={{
                backgroundColor: 'tomato',
                width: 100,
                height: 100
            }} />
            {/* <View style={{
                backgroundColor: 'grey',
                width: 100,
                height: 100
            }} />
            <View style={{
                backgroundColor: 'greenyellow',
                width: 100,
                height: 100
            }} /> */}

        </View>
    );
}

export default Layout3;