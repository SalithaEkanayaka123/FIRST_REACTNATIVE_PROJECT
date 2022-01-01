import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import defultStyles from "../app/config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Apptext from './AppText';
import Screen from '../app/screen/Screen';
import Pickeritem from './PickerItem';

const Apppicker = ({ icon, placeholder, items, selectedItem, onSelectedItem }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.constainer}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={30}
                            color='#000'
                            style={styles.icon}
                        />}
                    <Apptext style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Apptext>
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
                        renderItem={
                            ({ item }) =>
                                <Pickeritem
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
        width: '100%',
        marginVertical: 10,
        padding: 15,
        alignItems: 'center'
    },
    text: {
        flex: 1

    },
    icon: {
        marginRight: 10,

    },

})

export default Apppicker;
