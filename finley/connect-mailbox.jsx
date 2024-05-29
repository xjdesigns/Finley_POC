import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Text,
  SafeAreaView,
  useColorScheme,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setConnection} from '../store/bluetooth';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/BottomBar';
import {CONNECTED_MAILBOX_ROUTE} from '../constants/routes';

const ConnectMailbox = () => {
  const dispatch = useDispatch();
  const {isBluetoothConnected} = useSelector(state => state.bluetooth);
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [readyToConnect, setReadyToConnect] = useState(false);

  useEffect(() => {
    if (readyToConnect && !isBluetoothConnected) {
      setTimeout(() => {
        showAlert();
      }, 3000);
    }
  }, [readyToConnect, isBluetoothConnected, showAlert]);

  const showAlert = useCallback(() => {
    Alert.alert(
      '“Finley” Would Like to use Bluetooth',
      'Bluetooth is used to communicate with your Finley Mailbox',
      [
        {
          text: 'Dont Allow',
          onPress: () => {
            setReadyToConnect(false);
          },
          style: 'cancel',
        },
        {
          text: 'Allow',
          onPress: () => {
            navigation.navigate(CONNECTED_MAILBOX_ROUTE);
            dispatch(setConnection({isBluetoothConnected: true}));
          },
          style: 'default',
        },
      ],
    );
  }, [navigation, dispatch]);

  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
  };

  const innerView = {
    padding: 20,
    flex: 1,
  };

  const innerLoadingView = {
    padding: 20,
  };

  const handleConnect = () => {
    dispatch(setConnection({isBluetoothConnected: false}));
    setReadyToConnect(true);
  };

  const subText =
    // eslint-disable-next-line quotes
    `Make sure you're within 50 feet of your mailbox and Bluetooth is enabled on your phone before continuing to the next step.`;

  return (
    <View style={backgroundStyle}>
      {readyToConnect && !isBluetoothConnected ? (
        <SafeAreaView style={backgroundStyle}>
          <View style={innerLoadingView}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <FnText
                text="Searching for your mailbox..."
                fnTextStyles={styles.title}
              />
            </ScrollView>
          </View>
          <View style={styles.activityView}>
            <ActivityIndicator size="large" color={theme.text} />
          </View>
          <Pressable style={styles.troubleConnecting}>
            <Text style={styles.troubleConnecting}>Trouble connecting?</Text>
          </Pressable>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={backgroundStyle}>
          <View style={innerView}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <FnText text="Connect Your Mailbox" fnTextStyles={styles.title} />
              <FnText text={subText} fnTextStyles={styles.subtext} />
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
      {(!readyToConnect || isBluetoothConnected) && (
        <View style={styles.bottomBar}>
          <FnPressable
            text="Connect Mailbox"
            onPress={handleConnect}
            disableDarkTheme={true}
          />
          <Pressable style={styles.noMailbox}>
            <Text style={styles.noMailbox}>Don't have a mailbox?</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 24,
  },
  subtext: {
    textAlign: 'center',
    marginBottom: 24,
  },
  noMailbox: {
    color: COLORS.blue,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  troubleConnecting: {
    color: COLORS.black,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  activityView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: createBottomBarStyles({needsMinHeight: true}),
});

export default ConnectMailbox;
