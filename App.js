import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Image,
  TouchableWithoutFeedback, Platform, StatusBar
} from 'react-native';
import Accountscreen from './app/screen/AccountScreen';
import Cardscreen from './app/screen/CardScreen';
import Messagescreen from './app/screen/MessageScreen';
import Screen from './app/screen/Screen';
import Signleviewscreen from './app/screen/SignleViewScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WelcomeScreen from './app/screen/WelcomeScreen';
import Icon from './components/Icon';
import Layout1 from './components/Layout1';
import Layout2 from './components/Layout2';
import Layout3 from './components/Layout3';
import Listadaptercomponent from './components/ListAdapterComponent';

export default function App() {

  // x.toString()
  return (
    // <Layout1 />
    // <WelcomeScreen />
    <Cardscreen />
    // <Signleviewscreen />

    // <Screen>
    //   <Icon name="email" size={50} backgroundColor='red' iconColor='#fff'> </Icon>
    // </Screen>
    // <ViewImageScreen />
    // <Messagescreen />
    // <Accountscreen />
    // <Listadaptercomponent title="Salitha" subtitle="Ekanayaka" ImageComponent={<Icon name="account" size={50} backgroundColor='red' iconColor='#fff' />} />
  );
}

const styles = StyleSheet.create({

});
