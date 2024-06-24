import React from 'react';
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {emailNotificationImage} from '../utils/Images';
import {PREMIUM_EMAIL_ROUTE} from '../constants/routes';
import {createBottomBarStyles} from '../utils/Style';
import {useBaseStyles} from '../hooks/base-style-hooks';

const CompletedUSPS = () => {
  const navigation = useNavigation();
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    paddingHorizontal: 20,
  };

  const imageView = {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleDone = () => {
    navigation.navigate(PREMIUM_EMAIL_ROUTE);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <FnText text="You're all set" fnTextStyles={styles.title} />
          <FnText
            text="Next time USPS delivers mail to your Finley Mailbox your mail will show up in your 'Mail' tab."
            fnTextStyles={styles.subText}
          />
        </View>
        <View style={imageView}>
          <Image
            src={emailNotificationImage}
            style={styles.mailNotification}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable text="Done" onPress={handleDone} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  subText: {
    textAlign: 'center',
  },
  mailNotification: {
    width: 88,
    height: 88,
  },
  bottomBar: createBottomBarStyles({noBackground: true}),
});

export default CompletedUSPS;
