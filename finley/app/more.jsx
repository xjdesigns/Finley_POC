import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FnText from '../../components/FnText';
import FnNavButton from '../../components/FnNavButton';
import {COLORS} from '../../utils/Colors';

const More = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  const baseInner = {
    flex: 1,
    alignItems: 'center',
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const innerView = {
    alignItems: 'center',
    padding: 20,
  };

  const linkView = {
    ...baseInner,
  };

  const handleTest = () => {
    navigation.navigate('Test');
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          <FnText text="Settings & More" fnTextStyles={styles.title} />
        </View>
        <View style={linkView}>
          <FnNavButton text="Notification Preferences" path="Test" />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 24,
  },
});

export default More;
