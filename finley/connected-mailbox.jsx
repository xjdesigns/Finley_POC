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
import {setMailStatus} from '../store/mail';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/Style';
import {flagConnected} from '../utils/Images';
import {LOADING_STATUS, LOADED_STATUS} from '../constants/status';
import {FIRMWARE_ROUTE} from '../constants/routes';
import {useBaseStyles} from '../hooks/base-style-hooks';

const ConnectedMailbox = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    paddingHorizontal: 46,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleConnecting = () => {
    dispatch(setMailStatus({status: LOADING_STATUS}));
    setTimeout(() => {
      dispatch(setMailStatus({status: LOADED_STATUS}));
      navigation.navigate(FIRMWARE_ROUTE);
    }, 2000);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <FnText text="Finley Flag 1.0" fnTextStyles={styles.title} />
          <FnText text="X1K7B9Z3L6" fnTextStyles={styles.subtext} />
          <Image
            src={flagConnected}
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
              text="This is not my flag"
              onPress={handleConnecting}
              fnBtnTextStyles={styles.notMailbox}
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
    marginBottom: 64,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finleyFlagImage: {
    width: 255,
    aspectRatio: 1,
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
  notMailbox: {
    color: COLORS.blue,
  },
  bottomBar: createBottomBarStyles({needsMinHeight: true, noBackground: true}),
});

export default ConnectedMailbox;
