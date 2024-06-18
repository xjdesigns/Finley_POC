import React from 'react';
import {
  Text,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import {COLORS} from '../utils/Colors';

const FnPressable = ({
  text = '',
  onPress = () => {},
  disabled = false,
  loading = false,
  inverted = false,
  disableDarkTheme = false,
  fnBtnStyles,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme =
    isDarkMode && !disableDarkTheme ? COLORS.darktheme : COLORS.lighttheme;
  const btnStyle = {
    backgroundColor: theme.buttonBackground,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 40,
    opacity: disabled ? 0.7 : 1,
    ...fnBtnStyles,
  };
  const btnText = {
    color: theme.buttonText,
    fontSize: 18,
    textAlign: 'center',
  };
  const loadingStyle = {
    fontSize: 18,
    color: theme.buttonText,
    paddingTop: 1, // Small padding to avoid the jump on iOS
  };

  return (
    <TouchableOpacity style={btnStyle} onPress={onPress} disabled={disabled}>
      {loading ? (
        <ActivityIndicator style={loadingStyle} />
      ) : (
        <Text style={btnText}>{text}</Text>
      )}
      {/* <Pressable style={btnStyle} onPress={onPress} disabled={disabled}>
        {loading ? (
          <ActivityIndicator style={loadingStyle} />
        ) : (
          <Text style={btnText}>{text}</Text>
        )}
      </Pressable> */}
    </TouchableOpacity>
  );
};

export default FnPressable;
