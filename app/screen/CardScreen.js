import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';


const List = [
    {
        id: 1,
        title: "Shopping store 1",
        subtitle: 100,
        images: require("../assets/shopping1.jpg"),
    },
    {
        id: 2,
        title: "Shopping store 2",
        subtitle: 200,
        images: require("../assets/shopping2.jpg"),
    },
    {
        id: 3,
        title: "Shopping store 3",
        subtitle: 300,
        images: require("../assets/shopping3.jpg"),
    },
    {
        id: 4,
        title: "Shopping store 4",
        subtitle: 400,
        images: require("../assets/shopping3.jpg"),
    },
]
const Cardscreen = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <FlatList
                data={List}
                keyExtractor={(lists) => lists.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subtitle={"$" + item.subtitle}
                        image={item.images}
                        onPress={() => navigation.navigate("ListingDetails", item)}

                    />

                    // <Listadaptercomponent
                    //     title={item.title}
                    //     subtitle={item.subtitle}
                    //     image={item.images}
                    //     onPress={() => { }}

                    // >

                    // </Listadaptercomponent>
                }
            />
            {/* <Card title="Shopping store 1" subtitle="$100"
                image={require("../assets/shopping1.jpg")} />
            <Card title="Shopping store 2" subtitle="$100"
                image={require("../assets/shopping2.jpg")} />
            <Card title="Shopping store 3" subtitle="$100"
                image={require("../assets/shopping3.jpg")} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F3C892',
        padding: 20,
        paddingTop: 100,
        overflow: 'scroll'

    }
})

export default Cardscreen;
