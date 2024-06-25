import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
  Image,
  useColorScheme,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setMailStatus} from '../store/mail';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/Style';
import {notificationsImage} from '../utils/Images';
import {LOADING_STATUS, CONNECTED_STATUS} from '../constants/status';
import {FLAG_INSTALL_ROUTE} from '../constants/routes';
import {useBaseStyles} from '../hooks/base-style-hooks';

const Notifications = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    paddingHorizontal: 46,
  };

  // TODO: Update to handle notifications, using mail status state and a placeholder
  const handleConnecting = () => {
    dispatch(setMailStatus({status: LOADING_STATUS}));
    setTimeout(() => {
      dispatch(setMailStatus({status: CONNECTED_STATUS}));
      navigation.navigate(FLAG_INSTALL_ROUTE);
    }, 2000);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <FnText
            text="Finley wants to send you notifications"
            fnTextStyles={styles.title}
          />
          <FnText
            text="Finley's notifications will let you know when your outgoing mail was picked up and incoming mail is dropped off."
            fnTextStyles={styles.subtext}
          />
          <Image
            src={notificationsImage}
            style={styles.finleyFlagImage}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        {status === LOADING_STATUS ? (
          <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={theme.text} />
            <FnText text="Connecting" fnTextStyles={styles.loadingText} />
          </View>
        ) : (
          <View>
            <FnPressable text="Next" onPress={handleConnecting} />
            <FnPressable
              text="Skip for now"
              fnBtnTextStyles={styles.skipForNow}
              inverted={true}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtext: {
    textAlign: 'center',
    color: COLORS.mediumgray,
    marginBottom: 48,
  },
  imageView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 8,
  },
  finleyFlagImage: {
    width: '100%',
    aspectRatio: 1,
  },
  skipForNow: {
    color: COLORS.blue,
  },
  bottomBar: createBottomBarStyles({needsMinHeight: true, noBackground: true}),
});

export default Notifications;
