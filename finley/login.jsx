import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  useColorScheme,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import {useDispatch} from 'react-redux';
import {setUserToken} from '../store/user';
import FnTextInput from '../components/FnTextInput';
import FnPressable from '../components/FnPressable';
import {logoIconImage} from '../utils/Images';
import {
  GETTING_STARTED_ROUTE,
  LOGIN_ROUTE,
  DEV_OPTIONS_ROUTE,
} from '../constants/routes';
import {COLORS} from '../utils/Colors';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const url = Linking.useURL();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [devClick, setDevClick] = useState(0);

  useEffect(() => {
    if (url) {
      const {path, queryParams} = Linking.parse(url);
      if (
        path.includes(LOGIN_ROUTE) &&
        queryParams.email &&
        queryParams.password
      ) {
        setEmail(queryParams.email);
        setPassword(queryParams.password);
      }
    }
  }, [url]);

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const loginViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputView = {
    width: '80%',
  };

  const inputStyle = {
    marginBottom: 24,
  };

  const logoIcon = {
    width: 13,
    height: 21,
  };

  const iconView = {
    width: 40,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8,
  };

  const setupBtn = {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
  };

  const setupText = {
    color: theme.text,
    fontSize: 18,
    textAlign: 'center',
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setUserToken({token: 'token'}));
      setLoading(true);
    }, 2000);
  };

  const handleSetup = () => {
    navigation.navigate(GETTING_STARTED_ROUTE);
  };

  const handleDev = () => {
    if (devClick === 5) {
      navigation.navigate(DEV_OPTIONS_ROUTE);
      setDevClick(0);
    } else {
      setDevClick(prevState => {
        return prevState + 1;
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={backgroundStyle}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={backgroundStyle}>
        <View style={loginViewStyle}>
          <View style={inputView}>
            <Pressable onPress={handleDev}>
              <View style={iconView}>
                <Image
                  src={logoIconImage}
                  style={logoIcon}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <FnTextInput
              label="Email"
              fnStyles={inputStyle}
              value={email}
              onChangeText={val => setEmail(val)}
            />
            <FnTextInput
              label="Password"
              secureTextEntry={true}
              fnStyles={inputStyle}
              value={password}
              onChangeText={val => setPassword(val)}
            />
            <FnPressable
              text="Login"
              onPress={handleSubmit}
              loading={loading}
            />
            <Pressable style={setupBtn} onPress={handleSetup}>
              <Text style={setupText}>Setup</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;
