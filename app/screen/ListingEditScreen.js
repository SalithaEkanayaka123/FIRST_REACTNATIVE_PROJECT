import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Yup from "yup";
import Categorypickeritem from '../../components/CategoryPickerItem';
import { Appform, AppFormField } from '../../components/Form';
import Appformpicker from '../../components/Form/AppFormPicker';
import Submitbutton from '../../components/Form/SubmitButton';
import Screen from './Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const validationSchema = Yup.object().shape(
    {
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(1000).label("Price"),
        description: Yup.string().label("Description"),
        category: Yup.object().required().nullable().label("Category"),

    }
);

const categories = [
    { label: "Facebook", value: 1, backgroundColor: 'blue', icon: 'facebook' },
    { label: "Instagram", value: 2, backgroundColor: 'red', icon: 'instagram' },
    { label: "Twitter", value: 3, backgroundColor: 'blue', icon: 'twitter' },
    { label: "Telegram", value: 4, backgroundColor: 'blue', icon: 'telegram' },
    { label: "Music", value: 5, backgroundColor: 'yellow', icon: 'music' },
    { label: "messenger", value: 6, backgroundColor: 'blue', icon: 'facebook-messenger' },
    { label: "Whatsapp", value: 7, backgroundColor: 'green', icon: 'whatsapp' },
    { label: "Teamviewer", value: 8, backgroundColor: 'blue', icon: 'teamviewer' },
    { label: "Chrome", value: 9, backgroundColor: 'yellow', icon: 'google-chrome' },
];

const Listingeditscreen = () => {
    return (

        <Screen style={styles.container}>
            <Appform
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}

                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >

                <AppFormField maxLength={255} name="title" placeholder="title" />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="price"
                    width={120}
                />
                <Appformpicker
                    PickerItemComponent={Categorypickeritem}
                    width="50%"
                    items={categories}
                    name="category"
                    placeholder="Category"
                    numberOfColomns={3}
                />
                <AppFormField
                    multiline
                    maxLength={255}
                    numberOfLines={3}
                    name="description"
                    placeholder="description"
                />
                <Submitbutton title="Post" />
            </Appform>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default Listingeditscreen;
