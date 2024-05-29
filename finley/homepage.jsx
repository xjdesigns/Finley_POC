import React, {useState} from 'react';
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
import {GETTING_STARTED_ROUTE} from '../constants/routes';
import FnNumPad from '../components/FnNumPad';
import FnValueDisplay from '../components/FnValueDisplay';

const HomePage = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const bgImg = {uri: finleyBackgroundImage};

  const handleOnPress = () => {
    navigation.navigate(GETTING_STARTED_ROUTE);
  };

  const baseStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const innerViewStyle = {
    ...baseStyle,
  };

  const [numVal, setNumVal] = useState('');
  const handleNumPress = val => {
    setNumVal(prevState => {
      let newVal = '';
      if (val === 'backspace' && prevState.length > 0) {
        newVal = prevState.slice(0, -1);
      } else if (val !== 'backspace') {
        newVal = prevState + val;
      }
      return newVal;
    });
  };

  return (
    <View style={backgroundStyle}>
      {/* <FnValueDisplay value={numVal} />
      <FnNumPad onPress={handleNumPress} /> */}
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
          <Text style={styles.subtext}>Deliveries Made Smarter</Text>
          <Image
            src={mailboxImage}
            style={styles.mailbox}
            resizeMode="contain"
          />
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
