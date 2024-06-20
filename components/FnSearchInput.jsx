import React, {useState} from 'react';
import {useColorScheme, View, TextInput, Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../utils/Colors';

const FnSearchInput = ({
  label = '',
  placeholder = '',
  value = '',
  onChangeText = () => {},
  onClear = () => {},
  onSubmit = null,
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
    flex: 1,
    padding: 8,
    paddingLeft: 12,
    color: COLORS.mediumgray,
    fontSize: 16,
  };

  const searchIcon = {
    paddingLeft: 8,
    marginRight: 12,
    color: COLORS.mediumgray,
    fontSize: 20,
  };

  return (
    <View style={searchView}>
      <TextInput
        style={searchInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        editable={editable}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {value && !onSubmit && (
        <Pressable onPress={onClear}>
          <IonIcon name="close-outline" style={searchIcon} />
        </Pressable>
      )}
      {value && onSubmit && (
        <Pressable onPress={onSubmit}>
          <IonIcon name="arrow-up-circle" style={searchIcon} />
        </Pressable>
      )}
      {!value && <IonIcon name="search" style={searchIcon} />}
    </View>
  );
};

export default FnSearchInput;
