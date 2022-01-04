import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Appform = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                () => (
                    <>
                        {children}
                    </>
                )
            }

        </Formik>
    );
}

const styles = StyleSheet.create({})

export default Appform;
