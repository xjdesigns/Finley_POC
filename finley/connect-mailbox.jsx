import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Text,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/BottomBar';
import {SEARCHING_FOR_MAILBOX_ROUTE} from '../constants/routes';

const ConnectMailbox = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
  };
  const innerView = {
    padding: 20,
    flex: 1,
  };

  const handleConnect = () => {
    navigation.navigate(SEARCHING_FOR_MAILBOX_ROUTE);
  };

  const subText =
    // eslint-disable-next-line quotes
    `Make sure you're within 50 feet of your mailbox and Bluetooth is enabled on your phone before continuing to the next step.`;

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        {/* <View>
          <Text>{JSON.stringify(user, null, ' ')}</Text>
        </View> */}
        <View style={innerView}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <FnText text="Connect Your Mailbox" fnTextStyles={styles.title} />
            <FnText text={subText} fnTextStyles={styles.subtext} />
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable
          text="Connect Mailbox"
          onPress={handleConnect}
          disableDarkTheme={true}
        />
        <Pressable style={styles.noMailbox}>
          <Text style={styles.noMailbox}>Don't have a mailbox?</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 24,
  },
  subtext: {
    textAlign: 'center',
    marginBottom: 24,
  },
  noMailbox: {
    color: COLORS.blue,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  bottomBar: createBottomBarStyles(),
});

export default ConnectMailbox;
