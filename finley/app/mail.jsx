import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import {setIsSearching} from '../../store/mail';
import FnText from '../../components/FnText';
import FnPressable from '../../components/FnPressable';
import FnMailCard from '../../components/FnMailCard';
import FnSearchInput from '../../components/FnSearchInput';
import {COLORS} from '../../utils/Colors';
import {CONNECTED_STATUS, NOT_CONNECTED_STATUS} from '../../constants/status';
import {getAndroidPadding} from '../../utils/Style';
import {MOCK_MAIL} from '../../mock/mock-mail';

const Mail = () => {
  const dispatch = useDispatch();
  const {status, mail, isSearching} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [search, setSearch] = useState('');

  const handleSearchToggle = () => {
    if (isSearching) {
      setSearch('');
    }
    dispatch(setIsSearching({isSearching: !isSearching}));
  };

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
  };

  const innerView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const hasMailView = {
    flex: 1,
  };

  const actionView = {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
  };

  const searchView = {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={actionView}>
          <Pressable onPress={handleSearchToggle}>
            <FIcon5 name="search" size={18} color={theme.text} />
          </Pressable>
        </View>
        {isSearching && (
          <View style={searchView}>
            <FnSearchInput
              value={search}
              onChangeText={val => setSearch(val)}
            />
          </View>
        )}
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
    padding: 12,
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
