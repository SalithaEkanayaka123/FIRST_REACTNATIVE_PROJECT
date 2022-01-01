import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from "formik";
import Apptextinput from './AppTextInput';
import Errormessage from './ErrorMessage';

const Appformfield = ({ name, ...otherPops }) => {

    const { handleChange, handleSubmit, errors, setFieldTouched, touched } = useFormikContext();
    return (
        <>

            <Apptextinput
                // autoCapitalize="none"
                // autoCorrect={false}
                // icon="email"
                // keyboardType="email-address"
                //placeholder="Email"
                onBlur={() => setFieldTouched(name)}
                {...otherPops}
                //textContentType="emailAddress"
                onChangeText={handleChange(name)}
            />

            <Errormessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({})

export default Appformfield;
