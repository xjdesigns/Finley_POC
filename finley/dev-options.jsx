import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import FnRadio from '../components/FnRadio';
import {COLORS} from '../utils/Colors';

const RADIO_OPTIONS = [
  {
    label: 'Radio1',
    value: 'Radio1',
  },
  {
    label: 'Radio2',
    value: 'Radio2',
  },
];

const DevOptions = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [selectedValue, setSelectedValue] = useState('');

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

  const radioView = {
    flexDirection: 'row',
    alignItems: 'center',
  };

  const radioBtn = {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: COLORS.mediumgray,
    borderRadius: 50,
  };

  const radioBtnSelected = {
    width: 18,
    height: 18,
    backgroundColor: COLORS.mediumgray,
    borderRadius: 50,
  };

  const radioLabel = {
    fontSize: 16,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          {/* <View style={radioView}>
            <View style={radioBtn}>
              <View style={radioBtnSelected} />
            </View>
            <Text style={radioLabel}>Radio Option</Text>
          </View> */}
          <FnRadio
            options={RADIO_OPTIONS}
            value={selectedValue}
            onChange={handleChange}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  connected: {
    marginTop: 24,
    marginBottom: 18,
  },
});

export default DevOptions;
