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

const Link = () => {
  const navigation = useNavigation();
  return (

    <Button
      title='click'
      onPress={() => navigation.navigate("Tweets", { id: 1 })}
    />
  )
}

const Tweets = ({ navigation, route }) => (
  <Screen>
    <Text> Tweets topic {route.params.id}</Text>
    {/* <Button
      title="View Tweets Details"
      onPress={() => navigation.navigate("Tweets")}
    /> */}
  </Screen>
)

const TweetDetails = ({ navigation }) => (
  <Screen>
    <Text> Tweet Details </Text>
    {/* <Button
      title="View Tweets"
      onPress={() => navigation.navigate("Tweets")}
    /> */}
    <Link />
  </Screen>
)

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "blue",
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerTintColor: "white",
    }}

    initialRouteName='TweetDetails'>
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        // headerStyle: {
        //   backgroundColor: "Tomato",
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // },
        // headerTintColor: "white",
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: "Tweet Details" })}
    />
  </Stack.Navigator>
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
    <NavigationContainer>
      <StackNavigator />
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
