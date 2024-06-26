import React from 'react';
import {View, Pressable, StyleSheet, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import FnText from './FnText';
import {COLORS} from '../utils/Colors';

const FnNavButton = ({
  text = '',
  path = '',
  onPress = () => {},
  borderTop = false,
  borderBottom = false,
  icon = null,
}) => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const navBtnStyle = {
    backgroundColor: theme.background,
    padding: 18,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: borderTop ? COLORS.borderGray : '',
    borderTopWidth: borderTop ? 1 : 0,
    borderBottomColor: borderBottom ? COLORS.borderGray : '',
    borderBottomWidth: borderBottom ? 1 : 0,
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
      <View style={styles.navText}>
        <FnText text={text} />
      </View>
      <View>
        {icon ? (
          // TODO: Make this dynamic, tough when each requires a specific library
          // Logout is the default but I pass whatever...
          <MatIcon name={icon} style={navArrow} />
        ) : (
          <FIcon5 name="chevron-right" style={navArrow} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  navBtn: {
    padding: 12,
  },
  navText: {
    flex: 1,
  },
});

export default FnNavButton;
