import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Yup from "yup";
import { AppFormField, Appform, ErrorMessage, SubmitButton } from '../../components/Form/index'
import Screen from './Screen';

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

            <Appform
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationShema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                    name="email"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    secureTextEntry
                    placeholder="Password"
                    textContentType="password"

                />


                <SubmitButton
                    title="Login"
                />
            </Appform>


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
