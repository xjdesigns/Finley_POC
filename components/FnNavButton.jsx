import React from 'react';
import {View, Pressable, StyleSheet, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FnText from './FnText';
import {COLORS} from '../utils/Colors';

const FnNavButton = ({
  text = '',
  path = '',
  onPress = () => {},
  borderTop = false,
  borderBottom = false,
}) => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const navBtnStyle = {
    backgroundColor: theme.background,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: borderTop ? COLORS.borderGray : '',
    borderTopWidth: borderTop ? 1 : 0,
    borderBottomColor: borderBottom ? COLORS.borderGray : '',
    borderBottomWidth: borderBottom ? 1 : 0,
  };

  const navIcon = {
    fontSize: 24,
    color: theme.text,
  };

  const navArrow = {
    fontSize: 18,
    color: theme.text,
  };

  const handleNavigation = () => {
    if (path) {
      navigation.navigate(path);
    }

    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable style={navBtnStyle} onPress={handleNavigation}>
      <View style={styles.navBtnIcon}>
        <MCIIcon name="mailbox" style={navIcon} />
      </View>
      <View style={styles.navText}>
        <FnText text={text} />
      </View>
      <View>
        <FIcon5 name="chevron-right" style={navArrow} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  navBtn: {
    padding: 12,
  },
  navBtnIcon: {
    marginRight: 8,
  },
  navText: {
    flex: 1,
  },
});

export default FnNavButton;
