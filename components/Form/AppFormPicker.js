import { useFormikContext } from 'formik';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Apppicker from '../AppPicker';
import Errormessage from './ErrorMessage';

const Appformpicker = ({items, name, placeholder}) => {

    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
        <Apppicker
            items={items}
            onSelectedItem={(item) => setFieldValue(name, item)}
            placeholder={placeholder}
            selectedItem={values[name]}
        />
        <Errormessage error={errors[name]} visible={touched[name]}></Errormessage>
        </>

    );
}

const styles = StyleSheet.create({})

export default Appformpicker;
