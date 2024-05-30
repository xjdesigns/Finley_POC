import React, {useState} from 'react';
import {View, SafeAreaView, useColorScheme, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserToken} from '../store/user';
import FnTextInput from '../components/FnTextInput';
import FnPressable from '../components/FnPressable';
import {logoIconImage} from '../utils/Images';
import {COLORS} from '../utils/Colors';

const Login = () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setUserToken({token: 'token'}));
      setLoading(true);
    }, 2000);
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={loginViewStyle}>
          <View style={inputView}>
            <View style={iconView}>
              <Image
                src={logoIconImage}
                style={logoIcon}
                resizeMode="contain"
              />
            </View>
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
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
