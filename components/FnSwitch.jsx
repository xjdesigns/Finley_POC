import React from 'react';
import {Switch, useColorScheme} from 'react-native';
import {COLORS} from '../utils/Colors';

const FnSwitch = ({
  value = false,
  onValueChange = () => {},
  disabled = false,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const trackColor = {
    true: theme.switchTrackActive,
    false: theme.switchTrackInactive,
  };

  return (
    <Switch
      trackColor={trackColor}
      thumbColor={theme.background}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    />
  );
};

export default FnSwitch;
