import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from "formik";
import AppTextInput from '../AppTextInput';
import Errormessage from './ErrorMessage';

const Appformfield = ({ name, width, ...otherPops }) => {

    const { handleChange, handleSubmit, errors, setFieldTouched, touched } = useFormikContext();
    return (
        <>

            <AppTextInput
                // autoCapitalize="none"
                // autoCorrect={false}
                // icon="email"
                // keyboardType="email-address"
                //placeholder="Email"
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherPops}
            //textContentType="emailAddress"

            />

            <Errormessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({})

export default Appformfield;
