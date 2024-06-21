import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import FnSearchInput from '../../components/FnSearchInput';
import {useBaseStyles} from '../../hooks/base-style-hooks';

const SearchMail = () => {
  const {backgroundStyle, safeView} = useBaseStyles();
  const [search, setSearch] = useState('');

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
