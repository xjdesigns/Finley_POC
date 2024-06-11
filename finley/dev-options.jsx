import React from 'react';
import {View, SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as Application from 'expo-application';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateEnv} from '../store/user';
import FnText from '../components/FnText';
import FnRadio from '../components/FnRadio';
import {COLORS} from '../utils/Colors';
import {ALL_ENVS} from '../constants/env';

const RADIO_OPTIONS = ALL_ENVS;

const DevOptions = () => {
  const dispatch = useDispatch();
  const selectedEnv = useSelector(state => state.user.env);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const appEnv = process.env.EXPO_PUBLIC_ENV;

  const handleChange = async val => {
    try {
      await AsyncStorage.setItem('env', val);
      dispatch(updateEnv({env: val}));
    } catch (e) {
      console.error('e', e);
      dispatch(updateEnv({env: val}));
    }
  };

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const innerView = {
    padding: 20,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          <FnText
            text="Select Environment"
            fnTextStyles={styles.environmentText}
          />
          <FnRadio
            options={RADIO_OPTIONS}
            value={selectedEnv}
            onChange={handleChange}
          />

          <View style={styles.appView}>
            <FnText
              text="Application Name"
              fnTextStyles={styles.detailsTitle}
            />
            <FnText
              text={Application.applicationName}
              fnTextStyles={styles.detailsText}
            />
            <FnText
              text="Native App Version"
              fnTextStyles={styles.detailsTitle}
            />
            <FnText
              text={Application.nativeApplicationVersion}
              fnTextStyles={styles.detailsText}
            />
            <FnText
              text="Native Build Version"
              fnTextStyles={styles.detailsTitle}
            />
            <FnText
              text={Application.nativeBuildVersion}
              fnTextStyles={styles.detailsText}
            />
            <FnText
              text="App Process Environment"
              fnTextStyles={styles.detailsTitle}
            />
            <FnText text={appEnv} fnTextStyles={styles.detailsText} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appView: {
    marginTop: 24,
  },
  environmentText: {
    marginBottom: 8,
  },
  detailsTitle: {
    fontSize: 12,
    marginBottom: 4,
  },
  detailsText: {
    marginBottom: 4,
  },
});

export default DevOptions;
