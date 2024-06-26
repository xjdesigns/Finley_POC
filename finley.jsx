import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme, View, ActivityIndicator, Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Linking from 'expo-linking';
import {useSelector, useDispatch} from 'react-redux';
import {FnTabMenu} from './components/FnTabMenu';
import {
  setUserToken,
  setStatus,
  updateEnv,
  setFinishedInitialSetup,
} from './store/user.js';
import {setIsSearching} from './store/mail.js';
import {COLORS} from './utils/Colors';
import Login from './finley/login';
import DevOptions from './finley/dev-options';
import {LOADING_STATUS, LOADED_STATUS} from './constants/status.js';

// Finley Gettting Started
import HomePage from './finley/homepage';
import CreateAccount from './finley/create-account.jsx';
import ConnectMailbox from './finley/connect-mailbox';
import ConnectedMailbox from './finley/connected-mailbox';
import Notifications from './finley/notifications.jsx';
import ConnectUSPS from './finley/connect-usps.jsx';
import CompletedUSPS from './finley/completed-usps.jsx';
import PremiumEmail from './finley/premium-email.jsx';
import FlagInstall from './finley/flag-install.jsx';

// Finley App
// import Home from './finley/app/home';
import Mail from './finley/app/mail';
import Mailbox from './finley/app/mailbox.jsx';
import MailDetails from './finley/app/mail-details.jsx';
import MailViewer from './finley/app/mail-viewer.jsx';
import ScanMail from './finley/app/scan-mail.jsx';
// import ConversationSearch from './finley/app/conversation-search.jsx';
import More from './finley/app/menu.jsx';
import NotificationPreferences from './finley/app/notification-preferences';
import Firmware from './finley/app/firmware.jsx';
import DevTesting from './finley/app/dev-testing.jsx';
import {
  LOGIN_ROUTE,
  HOME_ROUTE,
  MAILBOX_ROUTE,
  IN_YOUR_MAILBOX_ROUTE,
  MAIL_ROUTE,
  YOUR_MAIL_ROUTE,
  MAIL_DETAILS_ROUTE,
  MAIL_VIEWER_ROUTE,
  SCAN_MAIL_ROUTE,
  FIRMWARE_ROUTE,
  FLAG_INSTALL_ROUTE,
  MENU_ROUTE,
  DEV_TESTING_ROUTE,
  CREATE_ACCOUNT_ROUTE,
  CONNECT_MAILBOX_ROUTE,
  CONNECTED_MAILBOX_ROUTE,
  NOTIFICATIONS_ROUTE,
  CONNECT_USPS_ROUTE,
  COMPLETED_USPS_ROUTE,
  PREMIUM_EMAIL_ROUTE,
  SETTINGS_MENU_ROUTE,
  NOTIFICATIONS_PREF_ROUTE,
  DEV_OPTIONS_ROUTE,
} from './constants/routes.js';

// TODO: This needs a full build and tested on a physical device
// import {BleManager} from 'react-native-ble-plx';
// export const manager = new BleManager();

const Stack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();
const MailStack = createNativeStackNavigator();
const YourMailStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function FnTabMenuWrapper(props) {
  return <FnTabMenu {...props} />;
}

function MenuStackScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const baseOptions = {
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTintColor: theme.text,
  };

  return (
    <MoreStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
      }}>
      <MoreStack.Screen name={SETTINGS_MENU_ROUTE} component={More} />
      <MoreStack.Screen
        name={NOTIFICATIONS_PREF_ROUTE}
        component={NotificationPreferences}
        options={{
          headerBackTitleVisible: false,
          ...baseOptions,
        }}
      />
      <MoreStack.Screen
        name={DEV_TESTING_ROUTE}
        component={DevTesting}
        options={{
          headerBackTitleVisible: false,
          ...baseOptions,
        }}
      />
    </MoreStack.Navigator>
  );
}

function MailboxStackScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  // TODO: I am repeating myself now, add to the base style hook
  const baseOptions = {
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTintColor: theme.text,
    headerBackTitleVisible: false,
  };

  return (
    <YourMailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: 400,
        },
      }}>
      <YourMailStack.Screen
        name={IN_YOUR_MAILBOX_ROUTE}
        component={Mailbox}
        options={{
          ...baseOptions,
        }}
      />
      <YourMailStack.Screen
        name={MAIL_DETAILS_ROUTE}
        component={MailDetails}
        options={{
          ...baseOptions,
          title: '',
        }}
      />
      <YourMailStack.Screen
        name={MAIL_VIEWER_ROUTE}
        component={MailViewer}
        options={{
          ...baseOptions,
          title: '',
        }}
      />
    </YourMailStack.Navigator>
  );
}

function MailSearch() {
  const dispatch = useDispatch();
  const isSearching = useSelector(state => state.mail.isSearching);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const handleSearch = () => {
    dispatch(setIsSearching({isSearching: !isSearching}));
  };

  const searchIcon = {
    color: theme.text,
    fontSize: 18,
  };

  return (
    <Pressable onPress={handleSearch}>
      <IonIcon name="search-outline" style={searchIcon} />
    </Pressable>
  );
}

function MailStackScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseOptions = {
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTintColor: theme.text,
    headerBackTitleVisible: false,
  };

  return (
    <MailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: 400,
        },
      }}>
      <MailStack.Screen
        name={YOUR_MAIL_ROUTE}
        component={Mail}
        options={{
          ...baseOptions,
          headerRight: MailSearch,
        }}
      />
      <MailStack.Screen
        name={MAIL_DETAILS_ROUTE}
        component={MailDetails}
        options={{
          ...baseOptions,
          title: '',
        }}
      />
      <MailStack.Screen
        name={MAIL_VIEWER_ROUTE}
        component={MailViewer}
        options={{
          ...baseOptions,
          title: '',
        }}
      />
    </MailStack.Navigator>
  );
}

// NOTE: Required for deep linking
const expoPrefix = Linking.createURL('exp://');
const appPrefix = Linking.createURL('finley://');

export default function Finley() {
  const dispatch = useDispatch();
  const {userToken, status, finishedInitialSetup} = useSelector(
    state => state.user,
  );
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const linking = {
    prefixes: [expoPrefix, appPrefix],
  };

  // useEffect(() => {
  //   const instance = new BleManager();
  //   console.warn('instance', instance)
  // }, [])

  useEffect(() => {
    const getEnv = async () => {
      try {
        const value = await AsyncStorage.getItem('env');
        if (value !== null) {
          // Check token is valid or refresh
          dispatch(updateEnv({env: value}));
        } else {
          const env = process.env.EXPO_PUBLIC_ENV;
          dispatch(updateEnv({env}));
        }
      } catch (e) {
        const env = process.env.EXPO_PUBLIC_ENV;
        dispatch(updateEnv({env}));
      }
      const env = process.env.EXPO_PUBLIC_ENV;
      dispatch(updateEnv({env}));
    };
    getEnv();
  }, [dispatch]);

  useEffect(() => {
    if (!userToken) {
      const getLocalUser = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          const finishedSetup = await AsyncStorage.getItem(
            'finishedInitialSetup',
          );
          // NOTE: Run this before the token check, status defines showing the routes
          if (finishedSetup) {
            dispatch(
              setFinishedInitialSetup({finishedInitialSetup: finishedSetup}),
            );
          }
          if (token !== null) {
            // Check token is valid or refresh
            dispatch(setUserToken({token: token}));
          } else {
            dispatch(setStatus({status: LOADED_STATUS}));
          }
        } catch (e) {
          // error reading token or setup
          dispatch(setStatus({status: LOADED_STATUS}));
        }
        dispatch(setStatus({status: LOADED_STATUS}));
      };
      getLocalUser();
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

  const baseOptions = {
    title: '',
    headerBackTitle: '',
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTintColor: theme.text,
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
          <NavigationContainer theme={NavTheme} linking={linking}>
            <>
              {userToken === '' && (
                <Stack.Navigator
                  initialRouteName={
                    finishedInitialSetup ? LOGIN_ROUTE : HOME_ROUTE
                  }
                  screenOptions={{
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                  }}>
                  <Stack.Screen
                    name={HOME_ROUTE}
                    component={HomePage}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name={LOGIN_ROUTE}
                    component={Login}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name={CREATE_ACCOUNT_ROUTE}
                    component={CreateAccount}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={CONNECT_MAILBOX_ROUTE}
                    component={ConnectMailbox}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={CONNECTED_MAILBOX_ROUTE}
                    component={ConnectedMailbox}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={FIRMWARE_ROUTE}
                    component={Firmware}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={NOTIFICATIONS_ROUTE}
                    component={Notifications}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={FLAG_INSTALL_ROUTE}
                    component={FlagInstall}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={CONNECT_USPS_ROUTE}
                    component={ConnectUSPS}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={COMPLETED_USPS_ROUTE}
                    component={CompletedUSPS}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={PREMIUM_EMAIL_ROUTE}
                    component={PremiumEmail}
                    options={{
                      ...baseOptions,
                    }}
                  />
                  <Stack.Screen
                    name={DEV_OPTIONS_ROUTE}
                    component={DevOptions}
                    options={{
                      ...baseOptions,
                    }}
                  />
                </Stack.Navigator>
              )}
              {userToken && (
                <Tab.Navigator tabBar={FnTabMenuWrapper}>
                  {/* // NOTE: Left here in case it comes back, if not can be deleted */}
                  {/* <Tab.Screen
                    name={HOME_ROUTE}
                    component={Home}
                    options={{headerShown: false}}
                  /> */}
                  <Tab.Screen
                    name={MAILBOX_ROUTE}
                    component={MailboxStackScreen}
                    options={{headerShown: false}}
                  />
                  <Tab.Screen
                    name={MAIL_ROUTE}
                    component={MailStackScreen}
                    options={{headerShown: false}}
                  />
                  <Tab.Screen
                    name={SCAN_MAIL_ROUTE}
                    component={ScanMail}
                    options={{
                      ...baseOptions,
                      title: 'Scan',
                    }}
                  />
                  <Tab.Screen
                    name={MENU_ROUTE}
                    component={MenuStackScreen}
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
