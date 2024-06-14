import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {useSelector} from 'react-redux';
import FnText from '../../components/FnText';
import FnPressable from '../../components/FnPressable';
import FnMailCard from '../../components/FnMailCard';
import {COLORS} from '../../utils/Colors';
import {getAndroidPadding} from '../../utils/Style';
import {CONNECTED_STATUS, NOT_CONNECTED_STATUS} from '../../constants/status';
import {MOCK_MAIL} from '../../mock/mock-mail';

const Mail = () => {
  const {status, mail} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
    ...getAndroidPadding,
  };

  const safeView = {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
  };

  const innerView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const hasMailView = {
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        {status === CONNECTED_STATUS && mail.length > 0 && (
          <View style={innerView}>
            <FnText
              text="Nothing to see here, yet."
              fnTextStyles={styles.title}
            />
            <FnText text="Next time mail is delivered it will show up here." />
          </View>
        )}
        {status === NOT_CONNECTED_STATUS && (
          <View style={innerView}>
            <FnText
              text="Nothing to see here, yet."
              fnTextStyles={styles.title}
            />
            <FnText text="Next time mail is delivered it will show up here." />
            <FnText
              text="Start your free year of Retriever to view your mail here."
              fnTextStyles={styles.freeYear}
            />
            <FnPressable text="Get Started" />
            <Pressable>
              <Text style={styles.learnMore}>Learn More</Text>
            </Pressable>
          </View>
        )}
        <View style={hasMailView}>
          {status === CONNECTED_STATUS && mail.length === 0 && (
            <View style={styles.mailView}>
              <FlatList
                data={MOCK_MAIL}
                renderItem={({item}) => <FnMailCard data={item} />}
                keyExtractor={(_, idx) => idx}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    fontSize: 28,
    fontWeight: 700,
  },
  freeYear: {
    marginTop: 36,
    marginBottom: 8,
    paddingHorizontal: 48,
    textAlign: 'center',
  },
  learnMore: {
    marginTop: 8,
    color: COLORS.blue,
    fontWeight: 700,
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
  img: {
    width: 60,
    height: 40,
    backgroundColor: COLORS.mediumgray,
  },
});

export default Mail;
