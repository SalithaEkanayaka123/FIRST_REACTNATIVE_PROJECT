import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import defultStyles from "../app/config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Apptext from './AppText';
import Screen from '../app/screen/Screen';
import Pickeritem from './PickerItem';

const Apppicker = ({ icon, placeholder, items, selectedItem, onSelectedItem, width = '100%', PickerItemComponent = Pickeritem, numberOfColomns = 1 }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.constainer, { width }]}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={30}
                            color='#000'
                            style={styles.icon}
                        />}
                    {
                        selectedItem ? (
                            <Apptext style={styles.text}>{selectedItem.label}</Apptext>
                        ) : (
                            <Apptext style={styles.placeholder}>{placeholder}</Apptext>
                        )
                    }

                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={30}
                        color='#000'

                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColomns}
                        renderItem={
                            ({ item }) =>
                                <PickerItemComponent
                                    item={item}
                                    label={item.label}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectedItem(item);
                                        console.log(item)
                                    }}
                                />
                        }
                    />
                </Screen>

            </Modal>
        </>

    );
}

const styles = StyleSheet.create({

    constainer: {
        backgroundColor: '#EEEEEE',
        borderRadius: 25,
        flexDirection: 'row',
        marginVertical: 10,
        padding: 15,
        alignItems: 'center'
    },
    text: {
        flex: 1

    },
    placeholder: {
        color: '#548CFF',
        flex: 1

    },
    icon: {
        marginRight: 10,

    },

})

export default Apppicker;
