import React from 'react';
import {Text, View, Pressable, useColorScheme} from 'react-native';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../utils/Colors';

const ROW1 = ['1', '2', '3'];
const ROW2 = ['4', '5', '6'];
const ROW3 = ['7', '8', '9'];

const FnNumPad = ({onPress = () => {}}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const handlePinAction = val => {
    onPress(val);
  };

  const numStyle = {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  };

  const numBtnStyle = {
    backgroundColor: theme.numBtnBackground,
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 8,
    borderColor: theme.numText,
    borderWidth: 2,
  };

  const numTextStyle = {
    color: theme.numText,
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
  };

  const iconView = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconProps = {
    size: 24,
    color: theme.numText,
  };

  return (
    <View>
      <View style={numStyle}>
        {ROW1.map(r => {
          return (
            <Pressable
              key={r}
              style={numBtnStyle}
              onPress={() => handlePinAction(r)}>
              <Text style={numTextStyle}>{r}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={numStyle}>
        {ROW2.map(r => {
          return (
            <Pressable
              key={r}
              style={numBtnStyle}
              onPress={() => handlePinAction(r)}>
              <Text style={numTextStyle}>{r}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={numStyle}>
        {ROW3.map(r => {
          return (
            <Pressable
              key={r}
              style={numBtnStyle}
              onPress={() => handlePinAction(r)}>
              <Text style={numTextStyle}>{r}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={numStyle}>
        <Pressable
          style={numBtnStyle}
          onPress={() => handlePinAction('backspace')}>
          <View style={iconView}>
            <FIcon5 name="backspace" {...iconProps} />
          </View>
        </Pressable>
        <Pressable style={numBtnStyle} onPress={() => handlePinAction('0')}>
          <Text style={numTextStyle}>0</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FnNumPad;
