import {StatusBar} from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store.js';

// Finley
import {COLORS} from './utils/Colors';
import HomePage from './finley/homepage';
import GettingStarted from './finley/getting-started';
import ConnectMailbox from './finley/connect-mailbox.jsx';
import SearchingMailbox from './finley/searching-mailbox.jsx';
import {
  HOME_ROUTE,
  GETTING_STARTED_ROUTE,
  CONNECT_MAILBOX_ROUTE,
  SEARCHING_FOR_MAILBOX_ROUTE,
} from './constants/routes.js';
import Menu from './components/Menu.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerShadowVisible: false,
          }}>
          <Stack.Screen
            name={HOME_ROUTE}
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={GETTING_STARTED_ROUTE}
            component={GettingStarted}
            options={{
              title: '',
              headerBackTitle: 'Back',
            }}
          />
          <Stack.Screen
            name={CONNECT_MAILBOX_ROUTE}
            component={ConnectMailbox}
            options={{
              title: '',
              headerBackTitle: 'Back',
            }}
          />
          <Stack.Screen
            name={SEARCHING_FOR_MAILBOX_ROUTE}
            component={SearchingMailbox}
            options={{
              title: '',
              headerBackTitle: 'Back',
            }}
          />
        </Stack.Navigator>
        <Menu />
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}
