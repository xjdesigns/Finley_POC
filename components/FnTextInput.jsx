import React, {useState} from 'react';
import {Text, useColorScheme, TextInput} from 'react-native';
import {COLORS} from '../utils/Colors';

const FnTextInput = ({
  label = '',
  placeholder = '',
  value = '',
  inputMode = 'text',
  onChangeText = () => {},
  secureTextEntry = false,
  editable = true,
  fnStyles = {},
  ...delegate
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [isFocused, setIsFocused] = useState(false);

  const labelStyles = {
    textAlign: 'left',
    fontSize: 14,
    marginBottom: 3,
    color: COLORS.mediumgray,
  };

  const inputStyles = {
    padding: 16,
    borderWidth: 1,
    borderColor: isFocused ? theme.inputBorderFocus : COLORS.mediumgray,
    borderRadius: 8,
    color: isFocused ? theme.inputText : COLORS.mediumgray,
    ...fnStyles,
  };

  return (
    <>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        style={inputStyles}
        inputMode={inputMode}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...delegate}
      />
    </>
  );
};

export default FnTextInput;
