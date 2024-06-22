import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {useSelector} from 'react-redux';
import FnText from '../../components/FnText';
import FnPressable from '../../components/FnPressable';
import FnMailCard from '../../components/FnMailCard';
import {upsellStarImage} from '../../utils/Images';
import {COLORS} from '../../utils/Colors';
import {useBaseStyles} from '../../hooks/base-style-hooks';
import {CONNECTED_STATUS, NOT_CONNECTED_STATUS} from '../../constants/status';

const Mail = () => {
  const {status, mail} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  };

  const hasMailView = {
    flex: 1,
  };

  const upsellView = {
    padding: 32,
    backgroundColor: theme.lightBlueBackground,
    borderRadius: 24,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        {status === NOT_CONNECTED_STATUS && (
          <View style={innerView}>
            <View style={upsellView}>
              <Image src={upsellStarImage} style={styles.img} />
              <FnText
                text="Start your FREE Finley Premium Trial"
                fnTextStyles={styles.title}
              />
              <FnText
                text="Get notified when important mail arrives."
                fnTextStyles={styles.subTitle}
              />
              <FnPressable text="Learn More" />
            </View>
          </View>
        )}
        {status === CONNECTED_STATUS && mail.length === 0 && (
          <View style={innerView}>
            <FnText
              text="Nothing to see here, yet."
              fnTextStyles={styles.title}
            />
            <FnText text="Next time mail is delivered it will show up here." />
          </View>
        )}
        {status === CONNECTED_STATUS && mail.length > 0 && (
          <View style={hasMailView}>
            <View style={styles.mailView}>
              <FlatList
                data={mail}
                renderItem={({item}) => <FnMailCard data={item} />}
                keyExtractor={(_, idx) => idx}
              />
            </View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    marginHorizontal: 'auto',
    marginBottom: 18,
  },
  title: {
    marginBottom: 8,
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 18,
  },
  freeYear: {
    marginTop: 36,
    marginBottom: 8,
    paddingHorizontal: 48,
    textAlign: 'center',
  },
  mailView: {
    flex: 1,
    width: '100%',
    paddingTop: 18,
  },
  date: {
    marginBottom: 12,
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
  },
  mailIcon: {
    marginTop: 4,
    marginRight: 4,
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
});

export default Mail;
