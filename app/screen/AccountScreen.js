import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Customseperator from '../../components/CustomSeperator';
import Icon from '../../components/Icon';
import Listadaptercomponent from '../../components/ListAdapterComponent';
import Listitemseperator from '../../components/ListItemSeperator';
import Screen from './Screen';


const MenuItems = [
    {
        id: 1,
        title: "Instagram",
        //subtitle: "",
        images: require('../assets/instagram.png'),
    },
    {
        id: 2,
        title: "Facebook",
        //subtitle: "",
        images: require('../assets/facebook.png'),
    }
]

const MenuItems2 = [
    {
        id: 1,
        title: "Song List",
        //subtitle: "",
        images: require('../assets/songList.png'),
    },
]
const Accountscreen = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <Listadaptercomponent
                    title="Salitha Ekanayaka"
                    subtitle="Undergraduate At SLIIT"
                    image={require('../assets/githubpic1.png')}
                />
            </View>
            <Customseperator color='#EEEEEE' size={80} />
            <View style={styles.container}>

                <FlatList
                    data={MenuItems}
                    keyExtractor={(MenuItems) => MenuItems.id.toString()}
                    renderItem={({ item }) =>
                        <Listadaptercomponent
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.images}
                            onPress={() => { }}

                        >

                        </Listadaptercomponent>}

                    ItemSeparatorComponent={Listitemseperator}
                />
            </View>
            <Customseperator color='#EEEEEE' size={50} />
            <View style={styles.container}>
                <FlatList
                    data={MenuItems2}
                    keyExtractor={(MenuItems) => MenuItems.id.toString()}
                    renderItem={({ item }) =>
                        <Listadaptercomponent
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.images}
                            onPress={() => { }}
                        // ImageComponent={
                        //     <Icon
                        //         name={item.icon.name}
                        //         //size={item.icon.size}
                        //         backgroundColor={item.icon.backgroundColor}
                        //     //iconColor={item.icon.iconColor}
                        //     />
                        // }
                        // renderRightActions={() =>
                        //     <Listitemdeleteaction 
                        //     onPress={() => deleteMessage(item)} />}

                        >

                        </Listadaptercomponent>}

                    ItemSeparatorComponent={Listitemseperator}
                // onRefresh={() => {
                //     setMessages(
                //         [
                //             {
                //                 id: 2,
                //                 title: 'T2',
                //                 description: 'D2',
                //                 images: require('../assets/pic1.jpg')
                //             },
                //         ]
                //     )
                // }}
                // refreshing={refreshing}
                />
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    }
})

export default Accountscreen;
