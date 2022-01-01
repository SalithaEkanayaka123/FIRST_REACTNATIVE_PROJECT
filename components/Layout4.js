import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../app/screen/Screen';
import Apppicker from './AppPicker';
import Apptextinput from './AppTextInput';

const Category = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
]
const Layout4 = () => {

    const [category, setCategory] = useState(Category[0]);
    return (
        <Screen>
            <Apppicker
                selectedItem={category}
                onSelectedItem={(item) => setCategory(item)}
                items={Category} icon="apps" placeholder="Category" />
            <Apptextinput icon="email" placeholder="Email" />
        </Screen>
    );
}

const styles = StyleSheet.create({})

export default Layout4;
