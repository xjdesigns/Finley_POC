import React, {useState, useEffect} from 'react';
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
import * as Linking from 'expo-linking';
import FIcon from 'react-native-vector-icons/FontAwesome';
import FnPressable from '../components/FnPressable';
import FnTextInput from '../components/FnTextInput';
import FnText from '../components/FnText';
import FnIconBadge from '../components/FnIconBadge';
import {createBottomBarStyles} from '../utils/Style';
import {COLORS} from '../utils/Colors';
import {CREATE_ACCOUNT_ROUTE, CONNECT_MAILBOX_ROUTE} from '../constants/routes';
import {
  WAITING_STATUS,
  NEEDS_VERIFICATION,
  VERIFIED,
} from '../constants/status';
import {useBaseStyles} from '../hooks/base-style-hooks';

const CreateAccount = () => {
  const navigation = useNavigation();
  const url = Linking.useURL();
  const [accountStatus, setAccountStatus] = useState(WAITING_STATUS);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const {backgroundStyle, safeView} = useBaseStyles();
  const appEnv = process.env.EXPO_PUBLIC_ENV;

  useEffect(() => {
    if (url) {
      const {path, queryParams} = Linking.parse(url);
      if (path && queryParams) {
        if (
          path.includes(CREATE_ACCOUNT_ROUTE) &&
          queryParams.firstName &&
          queryParams.lastName &&
          queryParams.email
        ) {
          setAccountStatus(VERIFIED);
          setUserData(prevState => {
            return {
              ...prevState,
              firstName: queryParams.firstName,
              lastName: queryParams.lastName,
              email: queryParams.email.replace(' --ios', ''),
            };
          });
        }
      }
    }
  }, [url]);

  const innerView = {
    paddingHorizontal: 20,
    flex: 1,
  };

  const verifiedView = {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
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
    setAccountStatus(NEEDS_VERIFICATION);
  };

  const handleVerify = () => {
    navigation.navigate(CONNECT_MAILBOX_ROUTE);
  };

  const handleLocalBypass = () => {
    setAccountStatus(VERIFIED);
  };

  return (
    <KeyboardAvoidingView
      style={backgroundStyle}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={safeView}>
        <View
          style={
            accountStatus === NEEDS_VERIFICATION ? verifiedView : innerView
          }>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {accountStatus !== NEEDS_VERIFICATION && (
              <>
                <FnText
                  text="Create Your Account"
                  fnTextStyles={styles.title}
                />

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
                  editable={accountStatus !== VERIFIED}
                  onSubmitEditing={handleSubmit}
                  returnKeyType="done"
                />

                {accountStatus === VERIFIED && (
                  <>
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
                  </>
                )}
              </>
            )}

            {accountStatus === NEEDS_VERIFICATION && (
              <>
                <FnIconBadge fnBadgeStyles={styles.sendView}>
                  <FIcon name="send" style={styles.sendIcon} />
                </FnIconBadge>
                <FnText text="You've got email" fnTextStyles={styles.title} />
                <FnText
                  text="You've got email"
                  fnTextStyles={styles.subtitle}
                />
                <FnText text={userData.email} fnTextStyles={styles.emailText} />
                <FnText
                  text="Select the magic link in the email to validate your Finley account."
                  fnTextStyles={styles.subtitle}
                />

                {appEnv === 'local' && (
                  <FnPressable
                    text="Local Bypass"
                    onPress={handleLocalBypass}
                    size="small"
                  />
                )}
              </>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        {accountStatus === WAITING_STATUS && (
          <FnPressable text="Next" onPress={handleSubmit} />
        )}

        {accountStatus === VERIFIED && (
          <FnPressable text="Next" onPress={handleVerify} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.mediumgray,
    marginBottom: 12,
  },
  sendView: {
    marginHorizontal: 'auto',
    backgroundColor: COLORS.success,
  },
  sendIcon: {
    marginTop: 14,
    fontSize: 40,
  },
  emailText: {
    marginBottom: 12,
    fontWeight: 700,
    textAlign: 'center',
  },
  fnInputStyle: {
    marginBottom: 24,
  },
  list: {
    marginLeft: 6,
    marginTop: 6,
    color: COLORS.mediumgray,
  },
  bottomBar: createBottomBarStyles({needsMinHeight: false, noBackground: true}),
});

export default CreateAccount;
