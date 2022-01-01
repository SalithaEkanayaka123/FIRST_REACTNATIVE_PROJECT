import React, { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import Listadaptercomponent from '../../components/ListAdapterComponent';
import Constants from "expo-constants";
import Screen from './Screen';
import Listitemseperator from '../../components/ListItemSeperator';
import Listitemdeleteaction from '../../components/ListItemDeleteAction';

const Initialmessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        images: require('../assets/pic1.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        images: require('../assets/pic1.jpg')
    },
]
const Messagescreen = () => {

    const [messages, setMessages] = useState(Initialmessages);
    const [refreshing, setRefreshing] = useState(false);


    const deleteMessage = (message) => {
        setMessages(messages.filter(m => m.id !== message.id));
    }
    return (
        <Screen>

            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <Listadaptercomponent
                        title={item.title}
                        subtitle={item.description}
                        image={item.images}
                        onPress={() => { }}
                        renderRightActions={() =>
                            <Listitemdeleteaction onPress={() => deleteMessage(item)} />}

                    >

                    </Listadaptercomponent>}

                ItemSeparatorComponent={Listitemseperator}
                onRefresh={() => {
                    setMessages(
                        [
                            {
                                id: 2,
                                title: 'T2',
                                description: 'D2',
                                images: require('../assets/pic1.jpg')
                            },
                        ]
                    )
                }}
                refreshing={refreshing}
            />
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'dodgerblue',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

})

export default Messagescreen;
