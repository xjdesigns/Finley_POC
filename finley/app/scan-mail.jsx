import React from 'react';
import {View, SafeAreaView} from 'react-native';
import FnText from '../../components/FnText';
import {useBaseStyles} from '../../hooks/base-style-hooks';

const ScanMail = () => {
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    paddingHorizontal: 20,
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

export default ScanMail;
