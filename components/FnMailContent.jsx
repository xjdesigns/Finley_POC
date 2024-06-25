import React from 'react';
import {StyleSheet, View, Image, Pressable, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {setSelectedMail} from '../store/mail';
import FnText from './FnText';
import {COLORS} from '../utils/Colors';
import {MAIL_DETAILS_ROUTE} from '../constants/routes';

function FnMailContent({data = {}}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {sender, subject, img, important} = data;
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const handleMailDetails = () => {
    dispatch(setSelectedMail({selectedMail: data}));
    navigation.navigate(MAIL_DETAILS_ROUTE);
  };

  const baseRing = {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 8,
  };

  const junkOuterRing = {
    ...baseRing,
    backgroundColor: 'transparent',
  };

  const importantOuterRing = {
    ...baseRing,
    backgroundColor: theme.lightBlueBackground,
  };

  const importantStar = {
    color: theme.text,
  };

  return (
    <Pressable style={styles.mailContent} onPress={handleMailDetails}>
      {important && (
        <View style={importantOuterRing}>
          <IonIcon name="star" {...importantStar} />
        </View>
      )}
      {!important && <View style={junkOuterRing} />}
      <View style={styles.mailInfo}>
        <FnText text={sender} fnTextStyles={styles.senderText} />
        <FnText text={subject} fnTextStyles={styles.subjectText} />
      </View>
      {img && <Image src={img} style={styles.img} resizeMode="contain" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mailContent: {
    flexDirection: 'row',
    marginBottom: 18,
    paddingHorizontal: 20,
  },
  mailInfo: {
    flex: 1,
  },
  senderText: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
  },
  subjectText: {
    fontSize: 16,
    color: COLORS.darkergray,
  },
  img: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.mediumgray,
  },
});

export default FnMailContent;
