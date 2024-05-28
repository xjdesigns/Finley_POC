import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import {logoImage, mailboxImage} from '../utils/Images';
import {createBottomBarStyles} from '../utils/BottomBar';
import {GETTING_STARTED_ROUTE} from '../constants/routes';

const HomePage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const handleOnPress = () => {
    navigation.navigate(GETTING_STARTED_ROUTE);
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Image src={logoImage} style={styles.logo} resizeMode="contain" />
        <Text style={styles.subtext}>Deliveries Made Smarter</Text>
        <Image src={mailboxImage} style={styles.mailbox} resizeMode="contain" />
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable
          text="Getting Started"
          onPress={handleOnPress}
          disableDarkTheme={true}
        />
        <Pressable style={styles.login}>
          <Text style={styles.login}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 54,
    marginBottom: 24,
  },
  subtext: {
    width: 273,
    fontSize: 36,
    textAlign: 'center',
    color: '#b0b0b0',
    marginBottom: 30,
  },
  // TODO: Make this a generic style to use
  bottomBar: createBottomBarStyles(),
  mailbox: {
    width: 300,
    height: 500,
    padding: 20,
    marginBottom: 30,
  },
  gettingStarted: {
    color: COLORS.white,
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  login: {
    color: COLORS.black,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});

export default HomePage;
