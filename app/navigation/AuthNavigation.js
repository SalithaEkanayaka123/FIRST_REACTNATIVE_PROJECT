import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listingeditscreen from "../screen/ListingEditScreen";
import Loginscreen from "../screen/LoginScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import React from 'react';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator
    >
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="Login"
            component={Loginscreen}
        // options={({ route }) => ({ title: "Home" })}
        />
        <Stack.Screen
            name="Edit screen"
            component={Listingeditscreen}
        // options={({ route }) => ({ title: "Home" })}
        />
    </Stack.Navigator>
)

export default AuthNavigator