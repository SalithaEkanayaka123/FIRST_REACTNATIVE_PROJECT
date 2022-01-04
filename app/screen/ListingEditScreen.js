import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Yup from "yup";
import { Appform, AppFormField } from '../../components/Form';
import Appformpicker from '../../components/Form/AppFormPicker';
import Submitbutton from '../../components/Form/SubmitButton';
import Screen from './Screen';

const validationSchema = Yup.object().shape(
    {
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(1000).label("Price"),
        description: Yup.string().label("Description"),
        category: Yup.object().required().nullable().label("Category"),

    }
);

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
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
                />
                <Appformpicker
                    items={categories}
                    name="category"
                    placeholder="Category"
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
