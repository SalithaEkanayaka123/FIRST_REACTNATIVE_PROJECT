import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Image,
  TouchableWithoutFeedback, Platform, StatusBar, Button
} from 'react-native';
import Accountscreen from './app/screen/AccountScreen';
import Cardscreen from './app/screen/CardScreen';
import Listingeditscreen from './app/screen/ListingEditScreen';
import Loginscreen from './app/screen/LoginScreen';
import Messagescreen from './app/screen/MessageScreen';
import Screen from './app/screen/Screen';
import Signleviewscreen from './app/screen/SignleViewScreen';
import Textinputscreen from './app/screen/TextInputScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WelcomeScreen from './app/screen/WelcomeScreen';
import Apppicker from './components/AppPicker';
import Apptextinput from './components/AppTextInput';
import Icon from './components/Icon';
import Layout1 from './components/Layout1';
import Layout2 from './components/Layout2';
import Layout3 from './components/Layout3';
import Layout4 from './components/Layout4';
import Listadaptercomponent from './components/ListAdapterComponent';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from './app/navigation/AuthNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const Link = () => {
  const navigation = useNavigation();

  return (

    <Button
      title='click'
      onPress={() => navigation.navigate("Settings", { id: 1 })}
    />
  )
}

function HomeScreen({ navigation, route }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Home! {route.params.id}</Text> */}
      <Text>Home!</Text>
      <Button
        title='click'
        onPress={() => navigation.navigate("Settings", { id: 1 })}
      />
    </View>
  );
}

function SettingsScreen({ navigation, route }) {
  console.log(route?.params?.id)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!  {route?.params?.id}</Text>
      <Button
        title='click'
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
  <Stack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "blue",
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   headerTintColor: "white",
  // }}

  // initialRouteName='Home'
  >
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
      }}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
    // options={({ route }) => ({ title: "Home" })}
    />
  </Stack.Navigator>
)

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveBackgroundColor: 'red',
      tabBarInactiveBackgroundColor: 'white',
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'black',
    })}
  >
    <Tab.Screen

      name="Home"
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="Settings"
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="phone-settings" size={size} color={color} />
      }}
      component={SettingsScreen}
    />
  </Tab.Navigator>
)

export default function App() {

  // x.toString()
  return (
    // <Layout1 />
    // <WelcomeScreen />
    // <Cardscreen />
    // <Textinputscreen />
    // <Signleviewscreen />
    // <Screen>
    //   <Apppicker icon="apps" placeholder="Category" />
    //   <Apptextinput icon="email" placeholder="Email" />
    // </Screen>
    // <Layout4 />
    // <Loginscreen />
    // <Listingeditscreen />
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      {/* <StackNavigator /> */}
      {/* <TabNavigator /> */}
      <AppNavigator />
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>

    // <Screen>
    //   <Apptextinput placeholder='name' icon = "email"/>
    //   {/* <Icon name="email" size={50} backgroundColor='red' iconColor='#fff'> </Icon> */}
    // </Screen>
    // <ViewImageScreen />
    // <Messagescreen />
    // <Accountscreen />
    // <Listadaptercomponent title="Salitha" subtitle="Ekanayaka" ImageComponent={<Icon name="account" size={50} backgroundColor='red' iconColor='#fff' />} />
  );
}

const styles = StyleSheet.create({

});
