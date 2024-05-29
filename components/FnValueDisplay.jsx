import React, {useMemo} from 'react';
import {Text, View, useColorScheme} from 'react-native';
import {COLORS} from '../utils/Colors';

const FnValueDisplay = ({value = ''}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const valueSplit = useMemo(() => {
    return value.split('');
  }, [value]);

  const activeInput = useMemo(() => {
    const len = valueSplit.length;
    return len;
  }, [valueSplit]);

  const displayStyle = {
    flexDirection: 'row',
    backgroundColor: theme.numBtnBackground,
    padding: 8,
    gap: 8,
    borderRadius: 8,
  };

  const numSymbolStyle = {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const numSymbolTextStyle = {
    fontSize: 28,
    fontWeight: 700,
  };

  const inputDisplay = {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 2,
  };

  const activeInputStyle = {
    borderColor: '#000',
    fontWeight: 800,
  };

  const inputText = {
    color: '#000',
    fontSize: 28,
  };

  const getInputDisplayStyle = idx => {
    const isActive = activeInput + 1 === idx;
    if (isActive) {
      return {
        ...inputDisplay,
        ...activeInputStyle,
      };
    } else {
      return inputDisplay;
    }
  };

  const getInputValue = idx => {
    const isActive = activeInput === idx;
    if (valueSplit[idx]) {
      return valueSplit[idx];
    }
    if (isActive) {
      return '|';
    }
    return '';
  };

  return (
    <View>
      <View style={displayStyle}>
        <View style={numSymbolStyle}>
          <Text style={numSymbolTextStyle}>#</Text>
        </View>
        <View style={getInputDisplayStyle(1)}>
          <Text style={inputText}>{getInputValue(0)}</Text>
        </View>
        <View style={getInputDisplayStyle(2)}>
          <Text style={inputText}>{getInputValue(1)}</Text>
        </View>
        <View style={getInputDisplayStyle(3)}>
          <Text style={inputText}>{getInputValue(2)}</Text>
        </View>
        <View style={getInputDisplayStyle(4)}>
          <Text style={inputText}>{getInputValue(3)}</Text>
        </View>
      </View>
    </View>
  );
};

export default FnValueDisplay;
