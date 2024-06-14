import React from 'react';
import {StyleSheet, View, SafeAreaView, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {PREMIUM_EMAIL_ROUTE} from '../constants/routes';
import {createBottomBarStyles} from '../utils/Style';

const CompletedUSPS = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
  };

  const safeView = {
    flex: 1,
  };

  const innerView = {
    paddingHorizontal: 20,
  };

  const handleDone = () => {
    navigation.navigate(PREMIUM_EMAIL_ROUTE);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <FnText text="You're all set" fnTextStyles={styles.title} />
          <FnText
            text="Next time USPS delivers mail to your Finley Mailbox your mail will show up in your 'Mail' tab."
            fnTextStyles={styles.subText}
          />
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable text="Done" onPress={handleDone} disableDarkTheme={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  subText: {
    textAlign: 'center',
  },
  bottomBar: createBottomBarStyles(),
});

export default CompletedUSPS;
