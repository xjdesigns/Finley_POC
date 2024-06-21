import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnTextInput from '../components/FnTextInput';
import FnText from '../components/FnText';
import {createBottomBarStyles} from '../utils/Style';
import {CONNECT_MAILBOX_ROUTE} from '../constants/routes';
import {useBaseStyles} from '../hooks/base-style-hooks';

const GettingStarted = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    paddingHorizontal: 20,
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
    navigation.navigate(CONNECT_MAILBOX_ROUTE);
  };

  return (
    <KeyboardAvoidingView
      style={backgroundStyle}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <FnText text="Create Your Account" fnTextStyles={styles.title} />

            <FnTextInput
              label="First Name"
              placeholder="First Name"
              value={userData?.firstName}
              onChangeText={val => handleChange('firstName', val)}
              fnStyles={styles.fnInputStyle}
            />

            <FnTextInput
              label="Last Name"
              placeholder="Last Name"
              value={userData?.lastName}
              onChangeText={val => handleChange('lastName', val)}
              fnStyles={styles.fnInputStyle}
            />

            <FnTextInput
              label="Email"
              placeholder="test@email.com"
              value={userData?.email}
              onChangeText={val => handleChange('email', val)}
              fnStyles={styles.fnInputStyle}
              inputMode="email"
            />

            <FnTextInput
              label="Password"
              placeholder="Password"
              secureTextEntry={true}
              value={userData?.password}
              onChangeText={val => handleChange('password', val)}
            />
            <View>
              {/* // This could become a Flat List made as a FN component */}
              <Text style={styles.list}>• Uppercase letters (A-Z)</Text>
              <Text style={styles.list}>• Lowercase letters (a-z)</Text>
              <Text style={styles.list}>• Numbers (0-9)</Text>
              <Text style={styles.list}>
                • Special characters (!, @, #, $, etc.)
              </Text>
            </View>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 24,
  },
  fnInputStyle: {
    marginBottom: 24,
  },
  list: {
    marginLeft: 6,
    marginTop: 6,
    color: COLORS.mediumgray,
  },
  bottomBar: createBottomBarStyles({needsMinHeight: false}),
});

export default GettingStarted;
