import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnTextInput from '../components/FnTextInput';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/BottomBar';
import {CONNECT_MAILBOX_ROUTE} from '../constants/routes';

const GettingStarted = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
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

  const handleChange = (type, val) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [type]: val,
      };
    });
  };

  const handleSubmit = () => {
    // console.warn('userData', userData);
    // setTimeout();
    navigation.navigate(CONNECT_MAILBOX_ROUTE);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        {/* <View>
          <Text>{JSON.stringify(user, null, ' ')}</Text>
        </View> */}
        <View style={innerView}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <FnText text="Create Your Account" fnTextStyles={styles.title} />

            <FnTextInput
              label="First Name"
              placeholder="First Name"
              value={userData?.firstName}
              onChangeText={val => handleChange('firstName', val)}
            />

            <FnTextInput
              label="Last Name"
              placeholder="Last Name"
              value={userData?.lastName}
              onChangeText={val => handleChange('lastName', val)}
            />

            <FnTextInput
              label="Email"
              placeholder="test@email.com"
              value={userData?.email}
              onChangeText={val => handleChange('email', val)}
              inputMode="email"
            />

            <FnTextInput
              label="Password"
              placeholder="Password"
              secureTextEntry={true}
              value={userData?.password}
              onChangeText={val => handleChange('password', val)}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable
          text="Next"
          onPress={handleSubmit}
          disableDarkTheme={true}
        />
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
  // TODO: Make this a generic style
  bottomBar: createBottomBarStyles(),
});

export default GettingStarted;
