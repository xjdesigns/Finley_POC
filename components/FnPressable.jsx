import React from 'react';
import {
  Text,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import {COLORS} from '../utils/Colors';

const SIZE_HP = {
  small: 18,
  normal: 32,
};

const SIZE_VP = {
  small: 10,
  normal: 18,
};

const SIZE_TEXT = {
  small: 12,
  normal: 18,
};

const FnPressable = ({
  text = '',
  onPress = () => {},
  size = 'normal',
  disabled = false,
  loading = false,
  inverted = false,
  disableDarkTheme = false,
  fnBtnStyles,
  fnBtnTextStyles,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme =
    isDarkMode && !disableDarkTheme ? COLORS.darktheme : COLORS.lighttheme;

  const btnStyle = {
    backgroundColor: inverted ? 'transparent' : theme.buttonBackground,
    paddingVertical: SIZE_VP[size],
    paddingHorizontal: SIZE_HP[size],
    borderRadius: 40,
    opacity: disabled ? 0.7 : 1,
    ...fnBtnStyles,
  };

  const btnText = {
    color: inverted ? theme.text : theme.buttonText,
    fontSize: SIZE_TEXT[size],
    textAlign: 'center',
    ...fnBtnTextStyles,
  };

  const loadingStyle = {
    fontSize: SIZE_TEXT[size],
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
