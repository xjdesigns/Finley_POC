import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Image,
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
import {createBottomBarStyles} from '../utils/Style';
import {flagDiagram} from '../utils/Images';
import {CONNECTED_MAILBOX_ROUTE} from '../constants/routes';
import {useBaseStyles} from '../hooks/base-style-hooks';

const ConnectMailbox = () => {
  const dispatch = useDispatch();
  const {isBluetoothConnected} = useSelector(state => state.bluetooth);
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles();
  const [readyToConnect, setReadyToConnect] = useState(false);

  // NOTE: This is all mocks. Use the BLE provider...
  // Not determined if we separate state and the BleManager, provider used to store the instance
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

  const innerView = {
    paddingHorizontal: 20,
  };

  const innerFlagImage = {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.lightBlueBackground,
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
        <SafeAreaView style={safeView}>
          <View style={innerLoadingView}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <FnText
                text="Searching for your device..."
                fnTextStyles={styles.title}
              />
            </ScrollView>
          </View>
          <View style={styles.activityView}>
            <ActivityIndicator size="large" color={theme.text} />
          </View>
          <Pressable style={styles.troubleConnecting}>
            <FnText
              text="Trouble connecting?"
              fnTextStyles={styles.troubleConnecting}
            />
          </Pressable>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={safeView}>
          <View style={innerView}>
            <FnText text="Connect Your Flag" fnTextStyles={styles.title} />
            <FnText text={subText} fnTextStyles={styles.subtext} />
          </View>
          <View style={innerFlagImage}>
            <Image
              src={flagDiagram}
              style={styles.finleyFlagImage}
              resizeMode="contain"
            />
          </View>
        </SafeAreaView>
      )}
      {(!readyToConnect || isBluetoothConnected) && (
        <View style={styles.bottomBar}>
          <FnPressable text="Next" onPress={handleConnect} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtext: {
    textAlign: 'center',
    marginBottom: 28,
  },
  finleyFlagImage: {
    width: '100%',
    aspectRatio: 1,
  },
  noMailbox: {
    color: COLORS.blue,
  },
  troubleConnecting: {
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
  bottomBar: createBottomBarStyles({noBackground: true}),
});

export default ConnectMailbox;
