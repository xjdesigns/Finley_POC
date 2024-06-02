import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import FnText from './FnText';
import {COLORS} from '../utils/Colors';

function MailContent({data = {}}) {
  const {sender, subject} = data;

  return (
    <View style={styles.mailContent}>
      <View style={styles.mailIcon} />
      <View style={styles.mailInfo}>
        <FnText text={sender} fnTextStyles={styles.senderText} />
        <FnText text={subject} fnTextStyles={styles.subjectText} />
      </View>
      <View style={styles.img} />
    </View>
  );
}

const FnMailCard = ({data = {}}) => {
  const {datePrimary, dateSecondary, isPrimary, mail} = data;

  return (
    <>
      <View style={styles.date}>
        <View style={styles.dateDate}>
          <FnText
            text={datePrimary}
            fnTextStyles={isPrimary ? styles.datePrimary : {}}
          />
        </View>
        <FnText
          text={dateSecondary}
          fnTextStyles={isPrimary ? styles.dateSecondary : {}}
        />
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
  },
  dateDate: {
    flex: 1,
  },
  datePrimary: {
    color: COLORS.blue,
  },
  dateSecondary: {
    color: COLORS.blue,
  },
  mailContent: {
    flexDirection: 'row',
    marginBottom: 18,
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
  },
  subjectText: {
    fontSize: 16,
  },
  img: {
    width: 60,
    height: 40,
    backgroundColor: COLORS.mediumgray,
  },
});

export default FnMailCard;
