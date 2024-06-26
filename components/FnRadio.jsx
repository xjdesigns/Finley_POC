import React from 'react';
import {View, Text, Pressable, useColorScheme} from 'react-native';
import {COLORS} from '../utils/Colors';

const FnRadio = ({
  options = [],
  value = '',
  onChange = () => {},
  disabled = false,
  fnRadioStyles,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const getRadio = isSelected => {
    return {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      width: 25,
      height: 25,
      borderWidth: 2,
      borderColor: isSelected ? theme.radioColorActive : theme.radioColor,
      borderRadius: 50,
    };
  };

  const radioStyles = {
    ...fnRadioStyles,
  };

  const radioView = {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  };

  const radioBtnDot = {
    width: 15,
    height: 15,
    backgroundColor: theme.radioColorActive,
    borderRadius: 50,
  };

  const radioLabel = {
    fontSize: 16,
    color: theme.radioColor,
  };

  return (
    <View style={radioStyles}>
      {options.map((opt, idx) => {
        return (
          <Pressable
            key={idx}
            style={radioView}
            onPress={() => onChange(opt.value)}>
            <View style={getRadio(opt.value === value)}>
              {opt.value === value && <View style={radioBtnDot} />}
            </View>
            <Text style={radioLabel}>{opt.label}</Text>
          </Pressable>
        );
      })}
      {/* <Pressable style={radioView} onPress={() => handleChange('Radio1')}>
        <View style={radioBtn}>
          {selectedValue === 'Radio1' && (
            <View style={radioBtnSelected} />
          )}
        </View>
        <Text style={radioLabel}>Radio Option</Text>
      </Pressable>

      <Pressable style={radioView} onPress={() => handleChange('Radio2')}>
        <View style={radioBtn}>
          {selectedValue === 'Radio2' && (
            <View style={radioBtnSelected} />
          )}
        </View>
        <Text style={radioLabel}>Radio Option</Text>
      </Pressable> */}
    </View>
  );
};

export default FnRadio;
