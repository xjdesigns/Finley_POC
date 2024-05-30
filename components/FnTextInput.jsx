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
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [isFocused, setIsFocused] = useState(false);

  const labelStyles = {
    textAlign: 'left',
    fontSize: 14,
    marginBottom: 3,
    color: theme.inputText,
  };

  const inputStyles = {
    padding: 16,
    backgroundColor: theme.inputBackground,
    borderWidth: 1,
    borderColor: isFocused ? theme.inputBorderFocus : 'transparent',
    borderRadius: 8,
    color: theme.inputText,
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
      />
    </>
  );
};

export default FnTextInput;
