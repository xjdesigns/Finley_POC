import React from 'react';
import {View, SafeAreaView, useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setUserToken} from '../../store/user';
import FnNavButton from '../../components/FnNavButton';
import {
  NOTIFICATIONS_PREF_ROUTE,
  DEV_TESTING_ROUTE,
} from '../../constants/routes';
import {COLORS} from '../../utils/Colors';
import {getAndroidPadding} from '../../utils/Style';

const Menu = () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const appEnv = process.env.EXPO_PUBLIC_ENV;
  const isDev = appEnv !== 'production';

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch(setUserToken({token: ''}));
    } catch (e) {
      console.error('Error removing token', e);
    }
  };

  const baseStyle = {
    flex: 1,
  };

  const baseInner = {
    flex: 1,
    alignItems: 'center',
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
    ...getAndroidPadding,
  };

  const safeView = {
    flex: 1,
  };

  const linkView = {
    ...baseInner,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={linkView}>
          <FnNavButton
            text="Notification Preferences"
            path={NOTIFICATIONS_PREF_ROUTE}
            borderBottom={true}
          />
          <FnNavButton
            text="Using Your Finley Flag"
            path={NOTIFICATIONS_PREF_ROUTE}
            borderBottom={true}
          />
          {isDev && (
            <FnNavButton
              text="Dev Testing Options"
              path={DEV_TESTING_ROUTE}
              borderBottom={true}
            />
          )}
          <FnNavButton text="Logout" onPress={handleLogout} icon="logout" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Menu;
