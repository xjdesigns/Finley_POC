import React, {useState, useRef} from 'react';
import {View, StyleSheet, useColorScheme, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import {COLORS} from '../utils/Colors';

const FnConversationActionBar = ({
  onRefresh = () => {},
  onDislike = () => {},
  onLike = () => {},
  fnBarStyles,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const actionBarView = {
    flexDirection: 'row',
    ...fnBarStyles,
  };

  const divider = {
    width: 2,
    backgroundColor: COLORS.borderGray,
  };

  const actionStyle = {
    flex: 1,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconStyle = {
    fontSize: 24,
    color: theme.text,
  };

  return (
    <View style={actionBarView}>
      <TouchableOpacity style={actionStyle} onPress={onRefresh}>
        <IonIcon name="refresh" style={iconStyle} />
      </TouchableOpacity>

      <View style={divider} />

      <TouchableOpacity style={actionStyle} onPress={onDislike}>
        <FIcon name="thumbs-down" style={iconStyle} />
      </TouchableOpacity>

      <View style={divider} />

      <TouchableOpacity style={actionStyle} onPress={onLike}>
        <FIcon name="thumbs-up" style={iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default FnConversationActionBar;
