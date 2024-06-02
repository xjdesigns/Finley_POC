import React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
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
import {createBottomBarStyles} from '../utils/BottomBar';
import {mailboxesImage} from '../utils/Images';
import {LOADING_STATUS, LOADED_STATUS} from '../constants/status';
import {CREATE_PIN_CODE_ROUTE} from '../constants/routes';

const ConnectedMailbox = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.mailbox);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
  };
  const innerView = {
    padding: 20,
    paddingHorizontal: 46,
  };

  const handleConnecting = () => {
    dispatch(setStatus({status: LOADING_STATUS}));
    setTimeout(() => {
      dispatch(setStatus({status: LOADED_STATUS}));
      navigation.navigate(CREATE_PIN_CODE_ROUTE);
    }, 2000);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          <FnText text="Finley Box 1.0" fnTextStyles={styles.title} />
          <FnText text="X1K7B9Z3L6" fnTextStyles={styles.subtext} />
        </View>
        <View style={styles.imageView}>
          <Image
            src={mailboxesImage}
            style={styles.mailboxesImage}
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
            <Pressable style={styles.notMailbox}>
              <Text style={styles.notMailbox}>This is not my mailbox</Text>
            </Pressable>
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
  mailboxesImage: {
    width: 300,
    height: 500,
    padding: 20,
  },
  notMailbox: {
    color: COLORS.blue,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  bottomBar: createBottomBarStyles({needsMinHeight: true}),
});

export default ConnectedMailbox;
