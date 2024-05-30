import React from 'react';
import {View, Text, Pressable, StyleSheet, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FnText from './FnText';
import {COLORS} from '../utils/Colors';

const FnNavButton = ({text = '', path = ''}) => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const navBtnStyle = {
    backgroundColor: '#fff',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: COLORS.borderGray,
    borderTopWidth: 1,
  };

  const handleNavigation = () => {
    if (path) {
      navigation.navigate(path);
    }
  };

  return (
    <Pressable style={navBtnStyle} onPress={handleNavigation}>
      <View style={styles.navBtnIcon}>
        <MCIIcon name="mailbox" style={styles.navIcon} />
      </View>
      <View style={styles.navText}>
        <FnText text={text} />
      </View>
      <View>
        <FIcon5 name="chevron-right" style={styles.navArrow} />
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
  navIcon: {
    fontSize: 24,
  },
  navText: {
    flex: 1,
  },
  navArrow: {
    color: '#000',
  },
});

export default FnNavButton;
