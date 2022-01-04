import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../AppButton';
import { useFormikContext } from "formik";

const Submitbutton = ({ title }) => {

    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            title={title}
            onPress={handleSubmit}
        />
    );
}

const styles = StyleSheet.create({})

export default Submitbutton;
