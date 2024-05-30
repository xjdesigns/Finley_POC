import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  useColorScheme,
  Image,
} from 'react-native';
import {COLORS} from '../../utils/Colors';

const Mail = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const f = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={f}>
          <Text>Mail</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Mail;
