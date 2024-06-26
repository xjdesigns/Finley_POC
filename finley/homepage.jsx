import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {logoImage, logoImageWhite, lettersImage} from '../utils/Images';
import {createBottomBarStyles} from '../utils/Style';
import {CREATE_ACCOUNT_ROUTE, LOGIN_ROUTE} from '../constants/routes';
import {useBaseStyles} from '../hooks/base-style-hooks';

const HomePage = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle} = useBaseStyles({
    useAndroidPadding: true,
  });

  const handleGettingStarted = () => {
    navigation.navigate(CREATE_ACCOUNT_ROUTE);
  };

  const handleLogin = () => {
    navigation.navigate(LOGIN_ROUTE);
  };

  const baseStyle = {
    flex: 1,
    alignItems: 'center',
  };

  const innerViewStyle = {
    ...baseStyle,
  };

  const loginText = {
    color: theme.text,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={innerViewStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Image
          src={isDarkMode ? logoImageWhite : logoImage}
          style={styles.logo}
          resizeMode="contain"
        />
        <FnText text="Mail made smarter" fnTextStyles={styles.subtext} />
        <Image
          src={lettersImage}
          style={styles.mailLetters}
          resizeMode="contain"
        />
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable text="Get Started" onPress={handleGettingStarted} />
        <FnPressable
          text="Log in"
          onPress={handleLogin}
          fnBtnTextStyles={loginText}
          inverted={true}
        />
      </View>
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
    marginVertical: 32,
  },
  subtext: {
    width: 273,
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 8,
  },
  bottomBar: createBottomBarStyles({fullWidth: true, noBackground: true}),
  mailLetters: {
    width: '100%',
    aspectRatio: 1,
  },
  gettingStarted: {
    color: COLORS.white,
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  login: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  loginText: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});

export default HomePage;
