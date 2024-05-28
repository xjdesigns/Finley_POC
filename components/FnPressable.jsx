import React from 'react';
import {Text, Pressable, useColorScheme} from 'react-native';
import {COLORS} from '../utils/Colors';

const FnPressable = ({
  text = '',
  onPress = () => {},
  inverted = false,
  disableDarkTheme = false,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme =
    isDarkMode && !disableDarkTheme ? COLORS.darktheme : COLORS.lighttheme;
  const btnStyle = {
    backgroundColor: theme.buttonBackground,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 40,
  };
  const btnText = {
    color: theme.buttonText,
    fontSize: 18,
    textAlign: 'center',
  };

  return (
    <Pressable style={btnStyle} onPress={onPress}>
      <Text style={btnText}>{text}</Text>
    </Pressable>
  );
};

export default FnPressable;
