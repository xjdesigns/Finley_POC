import React from 'react';
import {View, SafeAreaView, useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FnText from '../../components/FnText';
import {COLORS} from '../../utils/Colors';
import {useBaseStyles} from '../../hooks/base-style-hooks';

const MailViewer = () => {
  const {selectedMail} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles();

  const imageView = {
    flex: 1,
  };

  const pinchView = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    backgroundColor: theme.background,
  };

  const pinchIcon = {
    marginRight: 4,
    color: theme.text,
    fontSize: 24,
  };

  return (
    <View style={backgroundStyle}>
      <GestureHandlerRootView style={safeView}>
        <SafeAreaView style={safeView}>
          {selectedMail ? (
            <>
              <View style={imageView}>
                <ImageZoom uri={selectedMail.img} />
              </View>
              <View style={pinchView}>
                <MatCIcon name="gesture-pinch" style={pinchIcon} />
                <FnText text="Pinch-to-zoom" />
              </View>
            </>
          ) : (
            <FnText text="No Selected Mail" />
          )}
        </SafeAreaView>
      </GestureHandlerRootView>
    </View>
  );
};

export default MailViewer;
