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
import Menu from '../../components/Menu';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.appBackground,
    ...baseStyle,
  };

  const mainStyle = {
    flex: 1,
    alignItems: 'center',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={mainStyle}>
          <FnText text="Connected" fnTextStyles={styles.connected} />
          <FnText text="Monday, May 27" fnTextStyles={styles.date} />
          <FnText text="85° Sunny" fnTextStyles={styles.temp} />
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
    marginBottom: 18,
    fontSize: 12,
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
