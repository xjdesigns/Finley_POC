import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import FnText from './FnText';
import FnMailContent from './FnMailContent';
import {COLORS} from '../utils/Colors';

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
          renderItem={({item}) => <FnMailContent data={item} />}
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
});

export default FnMailCard;
