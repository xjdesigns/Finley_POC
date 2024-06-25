import React from 'react';
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
import FnMailContent from '../../components/FnMailContent';
import {mailImageWater} from '../../utils/Images';
import {COLORS} from '../../utils/Colors';
import {useBaseStyles} from '../../hooks/base-style-hooks';
import {CONNECTED_STATUS, NOT_CONNECTED_STATUS} from '../../constants/status';

const Mailbox = () => {
  const {status, mailbox} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles({safeViewBorder: true});

  const innerView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  };

  const hasMailView = {
    flex: 1,
  };

  const notConnectNoMail = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 88,
    height: 88,
    marginBottom: 28,
    backgroundColor: theme.lightBlueBackground,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  };

  const notConnectedIcon = {
    marginTop: 14,
    fontSize: 48,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        {(status === NOT_CONNECTED_STATUS || status === CONNECTED_STATUS) &&
          mailbox.length === 0 && (
            <View style={innerView}>
              <Image src={mailImageWater} style={styles.mailboxImg} />
              <FnText
                text="Your mailbox is empty, for now."
                fnTextStyles={styles.title}
              />
              <FnText
                text="When mail is dropped off we'll let you know and you'll be able to view it here."
                fnTextStyles={styles.subTitle}
              />
            </View>
          )}
        {status === NOT_CONNECTED_STATUS && mailbox.length > 0 && (
          <View style={innerView}>
            <View style={notConnectNoMail}>
              <IonIcon name="mail-outline" style={notConnectedIcon} />
            </View>
            <FnText text="You've got mail." fnTextStyles={styles.title} />
            <FnText
              text="Connect Informed Delivery to see what's in your mailbox."
              fnTextStyles={styles.subTitle}
            />
          </View>
        )}
        {status === CONNECTED_STATUS && mailbox.length > 0 && (
          <View style={hasMailView}>
            <View style={styles.mailView}>
              <FlatList
                data={mailbox}
                renderItem={({item}) => <FnMailContent data={item} />}
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
    width: '100%',
    paddingTop: 18,
  },
});

export default Mailbox;
