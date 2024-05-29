import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
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
import ConnectedMailbox from './finley/connected-mailbox.jsx';
import CreatePinCode from './finley/create-pin-code.jsx';
import {
  HOME_ROUTE,
  GETTING_STARTED_ROUTE,
  CONNECT_MAILBOX_ROUTE,
  CONNECTED_MAILBOX_ROUTE,
  CREATE_PIN_CODE_ROUTE,
} from './constants/routes.js';

// import {BleManager} from 'react-native-ble-plx';
// export const manager = new BleManager();

const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  // useEffect(() => {
  //   const instance = new BleManager();
  //   console.warn('instance', instance)
  // }, [])

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
            name={CONNECTED_MAILBOX_ROUTE}
            component={ConnectedMailbox}
            options={{
              title: '',
              headerBackTitle: 'Back',
            }}
          />
          <Stack.Screen
            name={CREATE_PIN_CODE_ROUTE}
            component={CreatePinCode}
            options={{
              title: '',
              headerBackTitle: 'Back',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}
