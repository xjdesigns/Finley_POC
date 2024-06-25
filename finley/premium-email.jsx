import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fs6Icon from 'react-native-vector-icons/FontAwesome6';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import FdIcon from 'react-native-vector-icons/Foundation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {setFinishedInitialSetup, setUserToken} from '../store/user';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/Style';
import {useBaseStyles} from '../hooks/base-style-hooks';

const PremiumEmail = () => {
  const dispatch = useDispatch();
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    paddingHorizontal: 20,
    flex: 1,
  };

  const handleConnecting = async () => {
    try {
      await AsyncStorage.setItem('token', 'token');
      await AsyncStorage.setItem('finishedInitialSetup', 'true');
      dispatch(setFinishedInitialSetup({finishedInitialSetup: true}));
      dispatch(setUserToken({token: 'token'}));
    } catch (e) {
      console.error('Error', e);
    }
  };

  const panelIcon = {
    size: 28,
    color: COLORS.mediumgray,
    marginRight: 18,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <FnText
              text="Your Flag Comes with a free year of Finley Premium"
              fnTextStyles={styles.title}
            />
            <FnText
              text="Finley Premium is an enhanced version of USPS's Informed Delivery service combining familiar features with user friendly concepts."
              fnTextStyles={styles.subText}
            />

            <View style={styles.infoPanel}>
              <MatCIcon name="bell-ring" {...panelIcon} />
              <View style={styles.infoTextView}>
                <FnText
                  text="A More Informed Delivery"
                  fnTextStyles={styles.infoPanelTitle}
                />
                <FnText
                  text="The same Informed Delivery you know and love, just a bit more organized."
                  fnTextStyles={styles.infoText}
                />
              </View>
            </View>

            <View style={styles.infoPanel}>
              <MatCIcon name="sort-reverse-variant" {...panelIcon} />
              <View style={styles.infoTextView}>
                <FnText
                  text="Smart Sorting"
                  fnTextStyles={styles.infoPanelTitle}
                />
                <FnText
                  text="Know what mail is arriving, who it's for, and how important it might be."
                  fnTextStyles={styles.infoText}
                />
              </View>
            </View>

            <View style={styles.infoPanel}>
              <IonIcon name="scan-outline" {...panelIcon} />
              <View style={styles.infoTextView}>
                <FnText
                  text="Mail Scanning"
                  fnTextStyles={styles.infoPanelTitle}
                />
                <FnText
                  text="Scan the contents of important mail and we'll keep it organized so you can find it when you need it."
                  fnTextStyles={styles.infoText}
                />
              </View>
            </View>

            <View style={styles.infoPanel}>
              <Fs6Icon name="box-archive" {...panelIcon} />
              <View style={styles.infoTextView}>
                <FnText text="History" fnTextStyles={styles.infoPanelTitle} />
                <FnText
                  text="Store your digital mail history for days, weeks, months, or years."
                  fnTextStyles={styles.infoText}
                />
                <FnText
                  text="USPS stores your mail history ~ 15 days"
                  fnTextStyles={styles.infoPanelHelperText}
                />
              </View>
            </View>

            <View style={styles.infoPanel}>
              <MatIcon name="manage-search" {...panelIcon} />
              <View style={styles.infoTextView}>
                <FnText
                  text="Searchability"
                  fnTextStyles={styles.infoPanelTitle}
                />
                <FnText
                  text="With a rich history comes powerful search results. Search by sender, recipient, date sent, etc."
                  fnTextStyles={styles.infoText}
                />
              </View>
            </View>

            <View style={styles.infoPanel}>
              <FdIcon name="prohibited" {...panelIcon} />
              <View style={styles.infoTextView}>
                <FnText
                  text="Get Less Junk Mail"
                  fnTextStyles={styles.infoPanelTitle}
                />
                <FnText
                  text="Identify and eliminate bad actors and unnecessary waste from showing up to your mailbox."
                  fnTextStyles={styles.infoText}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable text="Got it" onPress={handleConnecting} />
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
    marginBottom: 36,
  },
  infoPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  infoText: {
    color: COLORS.mediumgray,
  },
  infoTextView: {
    flex: 1,
  },
  infoPanelTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 4,
  },
  infoPanelHelperText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: COLORS.mediumgray,
    marginTop: 2,
  },
  skipForNow: {
    color: COLORS.blue,
  },
  bottomBar: createBottomBarStyles({noBackground: true}),
});

export default PremiumEmail;
