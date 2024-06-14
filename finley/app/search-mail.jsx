import React from 'react';
import {View, SafeAreaView, useColorScheme} from 'react-native';
import FnText from '../../components/FnText';
import {COLORS} from '../../utils/Colors';
import {getAndroidPadding} from '../../utils/Style';

const SearchMail = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
    ...getAndroidPadding,
  };

  const safeView = {
    flex: 1,
  };

  const innerView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <FnText text="Coming Soon..." />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SearchMail;
