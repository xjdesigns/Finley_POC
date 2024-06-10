import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useColorScheme, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useBLEContext, SET_MANAGER_TYPE} from './context/BLEContext.jsx';
import {COLORS} from './utils/Colors';
import Login from './finley/login';
import DevOptions from './finley/dev-options';

// Finley Gettting Started
import HomePage from './finley/homepage';
import GettingStarted from './finley/getting-started';
import ConnectMailbox from './finley/connect-mailbox';
import ConnectedMailbox from './finley/connected-mailbox';
import CreatePinCode from './finley/create-pin-code';
import {FnTabMenu} from './components/FnTabMenu';

// Finley App
import Home from './finley/app/home';
import Mail from './finley/app/mail';
import More from './finley/app/more';
import NotificationPreferences from './finley/app/notification-preferences';
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
  NOTIFICATIONS_PREF_ROUTE,
  YOUR_MAIL_ROUTE,
  DEV_OPTIONS_ROUTE,
} from './constants/routes.js';

// TODO: This needs a full build and tested on a physical device
const isLocal = process.env.EXPO_PUBLIC_ENV;
import {BleManager} from 'react-native-ble-plx';
import {XBLEManager} from 'xble_mimic_api';
export const manager = isLocal ? new XBLEManager() : new BleManager();

const Stack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();
const MailStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function FnTabMenuWrapper(props) {
  return <FnTabMenu {...props} />;
}

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
        name={NOTIFICATIONS_PREF_ROUTE}
        component={NotificationPreferences}
        options={{headerBackTitleVisible: false}}
      />
    </MoreStack.Navigator>
  );
}

function MailStackScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  return (
    <MailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
      }}>
      <MailStack.Screen
        name={YOUR_MAIL_ROUTE}
        component={Mail}
        options={{headerShown: false}}
      />
    </MailStack.Navigator>
  );
}

export default function Finley() {
  const [, bleDispatch] = useBLEContext();
  const {userToken} = useSelector(state => state.user);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  useEffect(() => {
    bleDispatch({type: SET_MANAGER_TYPE, payload: {manager}});
  }, [bleDispatch]);

  // useEffect(() => {
  //   console.warn('userToken', userToken);
  // }, [userToken]);

  const NavTheme = {
    dark: false,
    colors: {
      ...theme,
    },
  };

  return (
    <View style={baseStyle}>
      <NavigationContainer theme={NavTheme}>
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
              <Stack.Screen
                name={DEV_OPTIONS_ROUTE}
                component={DevOptions}
                options={{
                  title: '',
                  headerBackTitle: 'Back',
                }}
              />
            </Stack.Navigator>
          ) : (
            <Tab.Navigator tabBar={FnTabMenuWrapper}>
              <Tab.Screen
                name={HOME_ROUTE}
                component={Home}
                options={{headerShown: false}}
              />
              <Tab.Screen
                name={MAIL_ROUTE}
                component={MailStackScreen}
                options={{headerShown: false, tabBarBadge: 3}}
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
