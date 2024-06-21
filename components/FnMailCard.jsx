import React from 'react';
import {StyleSheet, View, FlatList, Image, useColorScheme} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FnText from './FnText';
import {COLORS} from '../utils/Colors';

function MailContent({data = {}}) {
  const {sender, subject, img, mailboxEvent, mailboxTime, important} = data;
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const mailboxTimeText = {
    color: COLORS.darkergray,
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
    backgroundColor: COLORS.borderGray,
  };

  const importantOuterRing = {
    ...baseRing,
    backgroundColor: theme.lightBlueBackground,
  };

  const importantStar = {
    color: theme.text,
  };

  const mailboxOuterRing = {
    ...baseRing,
    backgroundColor: theme.mailboxLightGreen,
  };

  const mailboxInnerBase = {
    width: 12,
    height: 12,
    borderRadius: 50,
  };

  const mailboxInnerClosed = {
    backgroundColor: theme.mailboxDarkGreen,
    ...mailboxInnerBase,
  };

  const mailboxInnerOpened = {
    borderWidth: 1,
    borderColor: theme.mailboxDarkGreen,
    ...mailboxInnerBase,
  };

  return (
    <View style={styles.mailContent}>
      {mailboxEvent && (
        <View style={mailboxOuterRing}>
          <View
            style={
              mailboxEvent === 'opened'
                ? mailboxInnerOpened
                : mailboxInnerClosed
            }
          />
        </View>
      )}
      {important && (
        <View style={importantOuterRing}>
          <IonIcon name="star" {...importantStar} />
        </View>
      )}
      {!important && !mailboxEvent && <View style={junkOuterRing} />}
      <View style={styles.mailInfo}>
        <FnText text={sender} fnTextStyles={styles.senderText} />
        <FnText text={subject} fnTextStyles={styles.subjectText} />
      </View>
      {/* {img && <View style={styles.img} />} */}
      {img && (
        <Image src={img} style={styles.img} resizeMode="contain" />
      )}
      {mailboxTime && (
        <FnText text={mailboxTime} fnTextStyles={mailboxTimeText} />
      )}
    </View>
  );
}

const FnMailCard = ({data = {}}) => {
  const {datePrimary, dateSecondary, mail} = data;

  const middleBar = {
    height: 1,
    flex: 1,
    backgroundColor: COLORS.borderGray,
  };

  const endBar = {
    height: 1,
    width: 10,
    backgroundColor: COLORS.borderGray,
  };

  return (
    <>
      <View style={styles.date}>
        {datePrimary && (
          <>
            <View style={endBar} />
            <FnText text={datePrimary} fnTextStyles={styles.dateTextView} />
          </>
        )}
        <View style={middleBar} />
        <FnText text={dateSecondary} fnTextStyles={styles.dateTextView} />
        <View style={endBar} />
      </View>

      {mail && mail.length > 0 && (
        <FlatList
          data={mail}
          renderItem={({item}) => <MailContent data={item} />}
          keyExtractor={(_, idx) => idx}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  date: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTextView: {
    paddingHorizontal: 8,
  },
  mailContent: {
    flexDirection: 'row',
    marginBottom: 18,
    paddingHorizontal: 20,
  },
  mailIcon: {
    marginTop: 4,
    marginRight: 8,
    width: 8,
    height: 8,
    backgroundColor: COLORS.blue,
    borderRadius: 50,
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

export default FnMailCard;
