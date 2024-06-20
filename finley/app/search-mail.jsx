import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, useColorScheme} from 'react-native';
import FnSearchInput from '../../components/FnSearchInput';
import {COLORS} from '../../utils/Colors';
import {getAndroidPadding} from '../../utils/Style';

const SearchMail = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [search, setSearch] = useState('');

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
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={innerView}>
            <FnSearchInput
              value={search}
              onChangeText={setSearch}
              onClear={() => setSearch('')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchMail;
