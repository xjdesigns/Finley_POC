import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  useColorScheme,
  Image,
} from 'react-native';
import FnText from '../../components/FnText';
import FnNavButton from '../../components/FnNavButton';
import {mailboxesImage} from '../../utils/Images';
import {COLORS} from '../../utils/Colors';
import FIcon5 from 'react-native-vector-icons/FontAwesome6';
import Menu from '../../components/Menu';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const mainStyle = {
    flex: 1,
    alignItems: 'center',
  };

  const weatherViewStyles = {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    // backgroundColor: COLORS.black,
    // borderWidth: 1,
    // borderRadius: 50,
    marginBottom: 18,
  };

  const weatherIcon = {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: '#ffedbd',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={mainStyle}>
          <FnText text="Connected" fnTextStyles={styles.connected} />
          <FnText text="Monday, May 27" fnTextStyles={styles.date} />
          <View style={weatherViewStyles}>
            <View style={weatherIcon}>
              {/* <FIcon5 name="sun" color={'#000'} /> */}
            </View>
            <View>
              <FnText text="85° Sunny" fnTextStyles={styles.temp} />
            </View>
          </View>
          <FnText
            text="Your mail usually arrives between 3:17-3:57pm"
            fnTextStyles={styles.mailDetails}
          />
          <Image
            src={mailboxesImage}
            style={styles.mailbox}
            resizeMode="contain"
          />
        </View>
        <FnNavButton
          text="Set up your Digital Mailbox"
          path="More"
          borderTop={true}
        />
      </SafeAreaView>
      {/* <Menu /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  connected: {
    marginTop: 24,
    marginBottom: 18,
  },
  date: {
    marginBottom: 18,
    fontSize: 28,
  },
  temp: {
    fontSize: 12,
    // color: COLORS.black,
  },
  mailDetails: {
    marginBottom: 18,
    fontSize: 12,
  },
  mailbox: {
    width: 300,
    height: 500,
    padding: 20,
    marginTop: 48,
  },
});

export default Home;
