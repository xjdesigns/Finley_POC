import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
  useColorScheme,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setStatus} from '../store/mailbox';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/Style';
import {finleyFlagImage} from '../utils/Images';
import {LOADING_STATUS, LOADED_STATUS} from '../constants/status';
import {NOTIFICATIONS_ROUTE} from '../constants/routes';

const ConnectedMailbox = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.mailbox);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const backgroundStyle = {
    backgroundColor: theme.lightBlueBackground,
    flex: 1,
  };

  const safeView = {
    flex: 1,
  };

  const innerView = {
    paddingHorizontal: 46,
  };

  const handleConnecting = () => {
    dispatch(setStatus({status: LOADING_STATUS}));
    setTimeout(() => {
      dispatch(setStatus({status: LOADED_STATUS}));
      navigation.navigate(NOTIFICATIONS_ROUTE);
    }, 2000);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <FnText text="Finley Flag 1.0" fnTextStyles={styles.title} />
          <FnText text="X1K7B9Z3L6" fnTextStyles={styles.subtext} />
        </View>
        <View style={styles.imageView}>
          <Image
            src={finleyFlagImage}
            style={styles.finleyFlagImage}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        {status === LOADING_STATUS ? (
          <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={COLORS.black} />
            <FnText text="Connecting" fnTextStyles={styles.loadingText} />
          </View>
        ) : (
          <View>
            <FnPressable
              text="Connect"
              onPress={handleConnecting}
              disableDarkTheme={true}
            />
            <FnPressable
              text="This is not my mailbox"
              onPress={handleConnecting}
              fnBtnTextStyles={styles.notMailbox}
              disableDarkTheme={true}
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
    textAlign: 'center',
    marginBottom: 6,
  },
  subtext: {
    textAlign: 'center',
    marginBottom: 64,
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
  notMailbox: {
    color: COLORS.blue,
  },
  bottomBar: createBottomBarStyles({needsMinHeight: true}),
});

export default ConnectedMailbox;
