import React from 'react';
import {StyleSheet, View, SafeAreaView, useColorScheme} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserToken} from '../../store/user';
import FnText from '../../components/FnText';
import FnNavButton from '../../components/FnNavButton';
import {NOTIFICATIONS_PREF_ROUTE} from '../../constants/routes';
import {COLORS} from '../../utils/Colors';

const More = () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const handleLogout = () => {
    dispatch(setUserToken({token: ''}));
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
  };

  const innerView = {
    alignItems: 'center',
    padding: 20,
  };

  const linkView = {
    ...baseInner,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          <FnText text="Settings & More" fnTextStyles={styles.title} />
        </View>
        <View style={linkView}>
          <FnNavButton
            text="Notification Preferences"
            path={NOTIFICATIONS_PREF_ROUTE}
            borderBottom={true}
          />
          <FnNavButton text="Logout" onPress={handleLogout} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 24,
  },
});

export default More;
