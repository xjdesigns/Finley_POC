import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme, View, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setUserToken, setStatus} from './store/user.js';
import {COLORS} from './utils/Colors';
import Login from './finley/login';
import DevOptions from './finley/dev-options';
import {LOADING_STATUS, LOADED_STATUS} from './constants/status.js';

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
// import {BleManager} from 'react-native-ble-plx';
// export const manager = new BleManager();

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
  const dispatch = useDispatch();
  const {userToken, status} = useSelector(state => state.user);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  // useEffect(() => {
  //   const instance = new BleManager();
  //   console.warn('instance', instance)
  // }, [])

  useEffect(() => {
    if (!userToken) {
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            // Check token is valid or refresh
            dispatch(setUserToken({token: value}));
          } else {
            dispatch(setStatus({status: LOADED_STATUS}));
          }
        } catch (e) {
          // error reading value
          dispatch(setStatus({status: LOADED_STATUS}));
        }
      };
      getData();
    }
  }, [userToken, dispatch]);

  const baseStyle = {
    flex: 1,
  };

  const loadingStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const NavTheme = {
    dark: false,
    colors: {
      ...theme,
    },
  };

  return (
    <>
      {status === LOADING_STATUS && (
        <View style={loadingStyle}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {status === LOADED_STATUS && (
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
      )}
    </>
  );
}
