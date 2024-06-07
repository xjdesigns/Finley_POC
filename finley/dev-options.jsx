import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import * as Application from 'expo-application';
import FnText from '../components/FnText';
import FnRadio from '../components/FnRadio';
import {COLORS} from '../utils/Colors';

const RADIO_OPTIONS = [
  {
    label: 'Dev',
    value: 'Dev',
  },
  {
    label: 'Stage',
    value: 'Stage',
  },
  {
    label: 'Prod',
    value: 'Prod',
  },
];

const DevOptions = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [selectedValue, setSelectedValue] = useState('Dev');

  const handleChange = val => {
    setSelectedValue(val);
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
            value={selectedValue}
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
