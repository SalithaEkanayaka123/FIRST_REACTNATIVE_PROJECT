
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Accountscreen from '../screen/AccountScreen';
import Listingeditscreen from '../screen/ListingEditScreen';
import Signleviewscreen from '../screen/SignleViewScreen';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Cardscreen from '../screen/CardScreen';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarActiveBackgroundColor: 'red',
            tabBarInactiveBackgroundColor: 'white',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
        })}
    >
        <Tab.Screen

            name="Feed"
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="folder-edit-outline" size={size} color={color}
                />
            }}
            component={FeedNavigator}
        />
        <Tab.Screen
            name="Listning Edit"
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="clipboard-list-outline" size={size} color={color} />
            }}
            component={Listingeditscreen}
        />
        <Tab.Screen
            name="Account"
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
            }}
            component={Accountscreen}
        />
    </Tab.Navigator>
)

export default AppNavigator