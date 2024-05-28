import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Text,
  ActivityIndicator,
  SafeAreaView,
  useColorScheme,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from '../utils/Colors';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/BottomBar';

const SearchingMailbox = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  useEffect(() => {
    setTimeout(() => {
      showAlert();
    }, 3000);
  }, []);

  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
  };
  const innerView = {
    padding: 20,
    paddingHorizontal: 46,
  };
  const activityView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const showAlert = () =>
    Alert.alert(
      '“Finley” Would Like to send you notifications',
      'Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.',
      [
        {
          text: 'Dont Allow',
          // onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Allow',
          // onPress: () => Alert.alert('Cancel Pressed'),
          style: 'default',
        },
      ],
    );

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        {/* <View>
          <Text>{JSON.stringify(user, null, ' ')}</Text>
        </View> */}
        <View style={innerView}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <FnText
              text="Searching for your mailbox..."
              fnTextStyles={styles.title}
            />
          </ScrollView>
        </View>
        <View style={activityView}>
          <ActivityIndicator size="large" color={theme.text} />
        </View>
        <Pressable style={styles.troubleConnecting}>
          <Text style={styles.troubleConnecting}>Trouble connecting?</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 24,
  },
  troubleConnecting: {
    color: COLORS.black,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  bottomBar: createBottomBarStyles(),
});

export default SearchingMailbox;
