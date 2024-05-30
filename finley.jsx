import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useColorScheme, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from './utils/Colors';
import Login from './finley/login.jsx';

// Finley Gettting Started
import HomePage from './finley/homepage';
import GettingStarted from './finley/getting-started';
import ConnectMailbox from './finley/connect-mailbox.jsx';
import ConnectedMailbox from './finley/connected-mailbox.jsx';
import CreatePinCode from './finley/create-pin-code.jsx';
import {FnTabMenu} from './components/FnTabMenu.jsx';

// Finley App
import Home from './finley/app/home.jsx';
import Mail from './finley/app/mail.jsx';
import More from './finley/app/more.jsx';
import {
  LOGIN_ROUTE,
  HOME_ROUTE,
  MAIL_ROUTE,
  MORE_ROUTE,
  GETTING_STARTED_ROUTE,
  CONNECT_MAILBOX_ROUTE,
  CONNECTED_MAILBOX_ROUTE,
  CREATE_PIN_CODE_ROUTE,
  SETTINGS_MORE_ROUTE,
} from './constants/routes.js';

// import {BleManager} from 'react-native-ble-plx';
// export const manager = new BleManager();

const Stack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TestView = () => {
  return (
    <View>
      <Text>Another More</Text>
    </View>
  );
};

function MoreStackScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  return (
    <MoreStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
      }}>
      <MoreStack.Screen
        name={SETTINGS_MORE_ROUTE}
        component={More}
        options={{headerShown: false}}
      />
      <MoreStack.Screen
        name="Test"
        component={TestView}
        options={{headerBackTitleVisible: false}}
      />
    </MoreStack.Navigator>
  );
}

export default function Finley() {
  const {userToken} = useSelector(state => state.user);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  // useEffect(() => {
  //   const instance = new BleManager();
  //   console.warn('instance', instance)
  // }, [])

  // useEffect(() => {
  //   console.warn('userToken', userToken);
  // }, [userToken]);

  return (
    <View style={baseStyle}>
      <NavigationContainer>
        <>
          {userToken === '' ? (
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
                name={LOGIN_ROUTE}
                component={Login}
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
          ) : (
            <Tab.Navigator tabBar={FnTabMenu}>
              <Tab.Screen
                name={HOME_ROUTE}
                component={Home}
                options={{headerShown: false}}
              />
              <Tab.Screen
                name={MAIL_ROUTE}
                component={Mail}
                options={{headerShown: false}}
              />
              <Tab.Screen
                name={MORE_ROUTE}
                component={MoreStackScreen}
                options={{headerShown: false}}
              />
            </Tab.Navigator>
          )}
        </>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
