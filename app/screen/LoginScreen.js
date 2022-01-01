import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from '../../components/AppButton';
import Apptextinput from '../../components/AppTextInput';
import Screen from './Screen';
import Apptext from '../../components/AppText';
import Errormessage from '../../components/ErrorMessage';
import Appformfield from '../../components/AppFormField';

const Loginscreen = () => {

    const validationShema = Yup.object().shape(
        {
            email: Yup.string().required().email().label("Email"),
            password: Yup.string().required().min(4).label("Password"),
        }
    );
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/pic2.jpg")}
            />

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationShema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <Appformfield
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress"
                            name="email"
                        />

                        <Appformfield
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            secureTextEntry
                            placeholder="Password"
                            textContentType="password"

                        />


                        <AppButton
                            title="Login"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>


        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 20,
        //position: 'absolute',


    },
})

export default Loginscreen;
