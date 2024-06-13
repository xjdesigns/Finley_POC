import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import IonIcon from 'react-native-vector-icons/Ionicons';
import OctIcon from 'react-native-vector-icons/Octicons';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/BottomBar';
import {COMPLETED_USPS_ROUTE} from '../constants/routes';

const ConnectUSPS = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  // TODO: This would come from service call
  const [finleyMailAddress] = useState('mail+238ad40k212@finleybox.com');

  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
  };
  const innerView = {
    padding: 20,
  };

  const handleConnecting = () => {
    navigation.navigate(COMPLETED_USPS_ROUTE);
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(finleyMailAddress);
  };

  const numberIcon = {
    width: 32,
    height: 32,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.numberBackground,
    borderRadius: 32,
  };

  const linkAction = {
    padding: 8,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.lightBlueBackground,
    borderBottomWidth: 1,
    borderBottomColor: theme.darkgray,
  };

  const linkIcon = {
    marginLeft: 4,
    fontSize: 18,
    color: theme.text,
  };

  const copyPanel = {
    marginTop: 8,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: COLORS.borderGray,
    borderRadius: 4,
  };

  const copyText = {
    color: COLORS.black,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <FnText
              text="Connect Your USPS Informed Delivery Account"
              fnTextStyles={styles.title}
            />
            <View style={styles.numberedPanelView}>
              <View style={numberIcon}>
                <Text>1</Text>
              </View>
              <View style={styles.numberTextView}>
                <FnText
                  text="Sign up for Informed Delivery"
                  fnTextStyles={styles.numberViewTitle}
                />
                <View style={styles.textWithAction}>
                  <FnText text="Sign Up on" />
                  <Pressable style={linkAction}>
                    <FnText text="usps.com" />
                    <IonIcon name="open-outline" style={linkIcon} />
                  </Pressable>
                </View>
                <View>
                  <FnText text="or sign in to your existing account" />
                </View>
              </View>
            </View>

            <View style={styles.numberedPanelView}>
              <View style={numberIcon}>
                <Text>2</Text>
              </View>
              <View style={styles.numberTextView}>
                <FnText
                  text="Update your USPS Informed Delivery Account Email"
                  fnTextStyles={styles.numberViewTitle}
                />
                <View style={styles.textWithAction}>
                  <FnText text="Go to your USPS" />
                  <Pressable style={linkAction}>
                    <FnText text="account page" />
                    <IonIcon name="open-outline" style={linkIcon} />
                  </Pressable>
                </View>

                <View style={styles.addressView}>
                  <FnText text="Update your email address to your Finley email address below." />

                  <TouchableOpacity style={copyPanel} onPress={copyToClipboard}>
                    <FnText text={finleyMailAddress} fnTextStyles={copyText} />
                    <OctIcon name="copy" style={styles.copyIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.numberedPanelView}>
              <View style={numberIcon}>
                <Text>3</Text>
              </View>
              <View style={styles.numberTextView}>
                <FnText
                  text="When Completed"
                  fnTextStyles={styles.numberViewTitle}
                />
                <FnText text="Select 'Connect Informed Delivery' below." />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable
          text="Connect Informed Delivery"
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
    marginBottom: 36,
    paddingHorizontal: 16,
  },
  numberedPanelView: {
    flexDirection: 'row',
    marginBottom: 36,
  },
  numberTextView: {
    flex: 1,
  },
  numberViewTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
  },
  textWithAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressView: {
    marginTop: 12,
  },
  copyIcon: {
    fontSize: 18,
    marginLeft: 8,
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

export default ConnectUSPS;
