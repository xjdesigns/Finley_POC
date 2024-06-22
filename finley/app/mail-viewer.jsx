import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FnText from '../../components/FnText';
import {useBaseStyles} from '../../hooks/base-style-hooks';

const MailViewer = () => {
  const {selectedMail} = useSelector(state => state.mail);
  const {backgroundStyle, safeView} = useBaseStyles();

  return (
    <View style={backgroundStyle}>
      <GestureHandlerRootView style={safeView}>
        <SafeAreaView style={safeView}>
          {selectedMail ? (
            <ImageZoom uri={selectedMail.img} />
          ) : (
            <FnText text="No Selected Mail" />
          )}
        </SafeAreaView>
      </GestureHandlerRootView>
    </View>
  );
};

export default MailViewer;
