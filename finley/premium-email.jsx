import React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  SafeAreaView,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Fs6Icon from 'react-native-vector-icons/FontAwesome6';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/Style';
import {COMPLETED_USPS_ROUTE} from '../constants/routes';

const PremiumEmail = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
  };

  const safeView = {
    flex: 1,
  };

  const innerView = {
    paddingHorizontal: 20,
    flex: 1,
  };

  const handleConnecting = () => {
    navigation.navigate(COMPLETED_USPS_ROUTE);
  };

  const panelIcon = {
    size: 28,
    color: theme.text,
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
                <FnText text="The same Informed Delivery you know and love, just a bit more organized." />
              </View>
            </View>

            <View style={styles.infoPanel}>
              <MatCIcon name="sort-reverse-variant" {...panelIcon} />
              <View style={styles.infoTextView}>
                <FnText
                  text="Smart Sorting"
                  fnTextStyles={styles.infoPanelTitle}
                />
                <FnText text="Know what mail is arriving, who it's for, and how important it might be." />
              </View>
            </View>

            <View style={styles.infoPanel}>
              <Fs6Icon name="box-archive" {...panelIcon} />
              <View style={styles.infoTextView}>
                <FnText text="History" fnTextStyles={styles.infoPanelTitle} />
                <FnText text="Store your digital mail history for days, weeks, months, or years." />
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
                <FnText text="With a rich history comes powerful search results. Search by sender, recipient, date sent, etc." />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable
          text="Claim"
          onPress={handleConnecting}
          disableDarkTheme={true}
        />
        <Pressable style={styles.skipForNow}>
          <Text style={styles.skipForNow}>Skip for now</Text>
        </Pressable>
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
    marginBottom: 36,
  },
  infoPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
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
    marginTop: 2,
  },
  skipForNow: {
    color: COLORS.blue,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  bottomBar: createBottomBarStyles({needsMinHeight: true}),
});

export default PremiumEmail;
