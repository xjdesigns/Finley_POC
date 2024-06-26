import React from 'react';
import {Text, useColorScheme} from 'react-native';
import {COLORS} from '../utils/Colors';

const FnText = ({
  text = '',
  fontSize = 16,
  disableDarkTheme = false,
  fnTextStyles,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme =
    isDarkMode && !disableDarkTheme ? COLORS.darktheme : COLORS.lighttheme;

  const textStyles = {
    fontSize,
    color: theme.text,
    ...fnTextStyles,
  };

  return <Text style={textStyles}>{text}</Text>;
};

export default FnText;
