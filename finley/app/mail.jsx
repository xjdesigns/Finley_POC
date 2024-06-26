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
import IonIcon from 'react-native-vector-icons/Ionicons';
import FnText from '../../components/FnText';
import FnPressable from '../../components/FnPressable';
import FnMailCard from '../../components/FnMailCard';
import FnSearchInput from '../../components/FnSearchInput';
import FnIconBadge from '../../components/FnIconBadge';
import {upsellStarImage} from '../../utils/Images';
import {COLORS} from '../../utils/Colors';
import {useBaseStyles} from '../../hooks/base-style-hooks';
import {CONNECTED_STATUS, NOT_CONNECTED_STATUS} from '../../constants/status';

const Mail = () => {
  const {status, mail, isSearching} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles({safeViewBorder: true});
  const [search, setSearch] = useState('');

  const innerView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
                disableDarkTheme={true}
              />
              <FnText
                text="Get notified when important mail arrives."
                fnTextStyles={styles.subTitle}
                disableDarkTheme={true}
              />
              <FnPressable text="Learn More" disableDarkTheme={true} />
            </View>
          </View>
        )}
        {status === CONNECTED_STATUS && mail.length === 0 && (
          <View style={innerView}>
            <FnIconBadge>
              <IonIcon name="mail-outline" style={styles.noMailIcon} />
            </FnIconBadge>
            <FnText
              text="Waiting is the hardest part."
              fnTextStyles={styles.title}
            />
            <FnText
              text="You'll be able to view your mail here the next time mail is expected or delivered."
              fnTextStyles={styles.subTitle}
            />
          </View>
        )}
        {status === CONNECTED_STATUS && mail.length > 0 && (
          <View style={hasMailView}>
            <View style={styles.mailView}>
              {isSearching && (
                <View style={styles.searchView}>
                  <FnSearchInput
                    value={search}
                    onChangeText={setSearch}
                    onClear={() => setSearch('')}
                  />
                </View>
              )}

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
  mailboxImg: {
    width: 88,
    height: 88,
    marginHorizontal: 'auto',
    marginBottom: 28,
  },
  title: {
    marginBottom: 18,
    maxWidth: '90%',
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    color: COLORS.mediumgray,
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
    paddingTop: 18,
  },
  searchView: {
    marginBottom: 18,
    paddingHorizontal: 20,
  },
  noMailIcon: {
    marginTop: 14,
    fontSize: 54,
  },
});

export default Mail;
