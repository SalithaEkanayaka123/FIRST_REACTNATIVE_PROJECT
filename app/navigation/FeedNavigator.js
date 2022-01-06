import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Cardscreen from '../screen/CardScreen';
import Signleviewscreen from '../screen/SignleViewScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator
        headerMode="screen"
    >
        <Stack.Screen
            name="Listings"
            component={Cardscreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="ListingDetails"
            component={Signleviewscreen}
            options={{
                headerShown: false
            }}
        // options={({ route }) => ({ title: "Home" })}
        />
    </Stack.Navigator>
)

export default FeedNavigator