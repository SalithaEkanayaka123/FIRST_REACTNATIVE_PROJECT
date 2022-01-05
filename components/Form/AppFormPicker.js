import { useFormikContext } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Apppicker from '../AppPicker';
import Errormessage from './ErrorMessage';

const Appformpicker = ({ items, name, PickerItemComponent, placeholder, width, numberOfColomns }) => {

    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <Apppicker
                items={items}
                numberOfColomns={numberOfColomns}
                onSelectedItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <Errormessage error={errors[name]} visible={touched[name]}></Errormessage>
        </>

    );
}

const styles = StyleSheet.create({})

export default Appformpicker;
