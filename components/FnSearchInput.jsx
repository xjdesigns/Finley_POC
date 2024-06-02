import React, {useState} from 'react';
import {useColorScheme, View, TextInput} from 'react-native';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../utils/Colors';

const FnSearchInput = ({
  label = '',
  placeholder = '',
  value = '',
  onChangeText = () => {},
  editable = true,
  fnStyles = {},
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [isFocused, setIsFocused] = useState(false);

  const searchView = {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: isFocused ? theme.inputBorderFocus : COLORS.mediumgray,
    borderRadius: 24,
    ...fnStyles,
  };

  const searchInput = {
    width: '100%',
    padding: 8,
    color: COLORS.mediumgray,
    fontSize: 16,
  };

  const searchIcon = {
    paddingLeft: 8,
    marginRight: 4,
    color: COLORS.mediumgray,
  };

  return (
    <View style={searchView}>
      <FIcon5 name="search" style={searchIcon} />
      <TextInput
        style={searchInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        editable={editable}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default FnSearchInput;
