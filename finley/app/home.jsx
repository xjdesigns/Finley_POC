import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  useColorScheme,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
// import * as Location from 'expo-location';
import FnText from '../../components/FnText';
import FnNavButton from '../../components/FnNavButton';
import {mailboxesImage} from '../../utils/Images';
import {COLORS} from '../../utils/Colors';
import {NOT_CONNECTED_STATUS} from '../../constants/status';
// import Menu from '../../components/Menu';

const Home = () => {
  const {status} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  // TODO: Actual handle of this...
  // useEffect(() => {
  //   (async () => {
  //     let {status} = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       // setErrorMsg('Permission to access location was denied');
  //       console.warn('Permission not granted');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     // setLocation(location);
  //     console.warn('location', location);
  //   })();
  // }, []);

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
            <View style={weatherIcon} />
            <View>
              <FnText text="85° Sunny" fnTextStyles={styles.temp} />
            </View>
          </View>
          <FnText
            text="Your mail usually arrives between 3:17-3:57pm"
            fnTextStyles={styles.mailDetails}
          />
          <View style={styles.imageView}>
            <Image
              src={mailboxesImage}
              style={styles.mailbox}
              resizeMode="contain"
            />
          </View>
        </View>
        {status === NOT_CONNECTED_STATUS && (
          <FnNavButton
            text="Set up your Digital Mailbox"
            path="Mail"
            borderTop={true}
          />
        )}
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
  imageView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  date: {
    marginBottom: 18,
    fontSize: 28,
  },
  temp: {
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
