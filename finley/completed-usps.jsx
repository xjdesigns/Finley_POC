import React from 'react';
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {emailNotificationImage} from '../utils/Images';
import {PREMIUM_EMAIL_ROUTE} from '../constants/routes';
import {createBottomBarStyles} from '../utils/Style';
import {COLORS} from '../utils/Colors';
import {useBaseStyles} from '../hooks/base-style-hooks';

const CompletedUSPS = () => {
  const navigation = useNavigation();
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  };

  const handleDone = () => {
    navigation.navigate(PREMIUM_EMAIL_ROUTE);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <Image
            src={emailNotificationImage}
            style={styles.mailNotification}
            resizeMode="contain"
          />
          <FnText text="You're all set" fnTextStyles={styles.title} />
          <FnText
            text="Next time USPS delivers mail to your Finley Mailbox your mail will show up in your 'Mail' tab."
            fnTextStyles={styles.subText}
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
    color: COLORS.mediumgray,
  },
  mailNotification: {
    width: 88,
    height: 88,
    marginBottom: 18,
  },
  bottomBar: createBottomBarStyles({noBackground: true}),
});

export default CompletedUSPS;
