import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setUserToken} from '../store/user';
import FnTextInput from '../components/FnTextInput';
import FnPressable from '../components/FnPressable';
import {logoIconImage} from '../utils/Images';
import {GETTING_STARTED_ROUTE, DEV_OPTIONS_ROUTE} from '../constants/routes';
import {COLORS} from '../utils/Colors';
import {useAuthHook} from '../hooks/auth-hook';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [devClick, setDevClick] = useState(0);
  const {authLogin} = useAuthHook();

  const canLogin = useMemo(() => {
    if (email && password) {
      return true;
    }
    return false;
  }, [email, password]);

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const setupText = {
    color: theme.text,
    fontSize: 18,
    textAlign: 'center',
  };

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        await AsyncStorage.setItem('token', 'token');
        dispatch(setUserToken({token: 'token'}));
        setLoading(false);
      } catch (e) {
        console.error('e', e);
      }
    }, 2000);

    // authLogin(email.toLowerCase(), password)
    //   .then(async ({data}) => {
    //     await AsyncStorage.setItem('accessToken', data.accessToken);
    //     dispatch(setUserToken({token: data.accessToken}));
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     // TODO: Need to handle the error
    //     console.error('Err', err);
    //     setLoading(false);
    //   });
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
        <View style={styles.loginViewStyle}>
          <View style={styles.inputView}>
            <Pressable onPress={handleDev}>
              <View style={styles.iconView}>
                <Image
                  src={logoIconImage}
                  style={styles.logoIcon}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <FnTextInput
              label="Email"
              fnStyles={styles.inputStyle}
              value={email}
              onChangeText={val => setEmail(val)}
            />
            <FnTextInput
              label="Password"
              secureTextEntry={true}
              fnStyles={styles.inputStyle}
              value={password}
              onChangeText={val => setPassword(val)}
            />
            <FnPressable
              text="Login"
              onPress={handleSubmit}
              loading={loading}
              disabled={!canLogin}
            />
            <Pressable style={styles.setupBtn} onPress={handleSetup}>
              <Text style={setupText}>Setup</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  loginViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: '80%',
  },
  inputStyle: {
    marginBottom: 24,
  },
  logoIcon: {
    width: 13,
    height: 21,
  },
  iconView: {
    width: 40,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  setupBtn: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});

export default Login;
