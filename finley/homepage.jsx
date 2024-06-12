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
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import {logoImage, mailboxImage, finleyBackgroundImage} from '../utils/Images';
import {createBottomBarStyles} from '../utils/BottomBar';
import {GETTING_STARTED_ROUTE, LOGIN_ROUTE} from '../constants/routes';

const HomePage = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const bgImg = {uri: finleyBackgroundImage};

  const handleGettingStarted = () => {
    navigation.navigate(GETTING_STARTED_ROUTE);
  };

  const handleLogin = () => {
    navigation.navigate(LOGIN_ROUTE);
  };

  const baseStyle = {
    flex: 1,
    alignItems: 'center',
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const innerViewStyle = {
    ...baseStyle,
  };

  return (
    <View style={backgroundStyle}>
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={styles.bgImage}
        imageStyle={styles.bgImageStyle}>
        <SafeAreaView style={innerViewStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Image src={logoImage} style={styles.logo} resizeMode="contain" />
          <Text style={styles.subtext}>Hi Tyler you rock</Text>
          <Image
            src={mailboxImage}
            style={styles.mailbox}
            resizeMode="contain"
          />
        </SafeAreaView>
        <View style={styles.bottomBar}>
          <FnPressable
            text="Getting Started"
            onPress={handleGettingStarted}
            disableDarkTheme={true}
          />
          <Pressable style={styles.login} onPress={handleLogin}>
            <Text style={styles.login}>Log in</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  bgImageStyle: {
    opacity: 0.2,
  },
  logo: {
    width: 200,
    height: 54,
    marginVertical: 24,
  },
  subtext: {
    width: 273,
    fontSize: 36,
    textAlign: 'center',
    color: '#b0b0b0',
    marginBottom: 30,
  },
  // TODO: Use flex for this to avoid the Android push issue with absolute positioning
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
