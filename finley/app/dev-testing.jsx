import React from 'react';
import {View, SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setMailStatus, setMail} from '../../store/mail';
import FnText from '../../components/FnText';
import FnPressable from '../../components/FnPressable';
import FnRadio from '../../components/FnRadio';
import {COLORS} from '../../utils/Colors';
import {MAIL_TESTING_STATUS} from '../../constants/testing';
import {MOCK_MAIL} from '../../mock/mock-mail';

const RADIO_OPTIONS = MAIL_TESTING_STATUS;

const DevTesting = () => {
  const dispatch = useDispatch();
  const mailStatus = useSelector(state => state.mail.status);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const handleChange = async val => {
    dispatch(setMailStatus({status: val}));
  };

  const handleUseMockMail = async () => {
    dispatch(setMail({mail: MOCK_MAIL}));
  };

  const handleNoMail = async () => {
    dispatch(setMail({mail: []}));
  };

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const innerView = {
    paddingHorizontal: 20,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          <FnText
            text="Set Mail Connection"
            fnTextStyles={styles.fnRadioStyles}
          />
          <FnRadio
            options={RADIO_OPTIONS}
            value={mailStatus}
            onChange={handleChange}
            fnRadioStyles={styles.radioView}
          />

          <FnPressable
            text="Use Mock Mail"
            onPress={handleUseMockMail}
            size="small"
            fnBtnStyles={styles.actions}
          />

          <FnPressable
            text="Set Mail to None"
            onPress={handleNoMail}
            size="small"
            fnBtnStyles={styles.actions}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appView: {
    margin: 24,
  },
  fnRadioStyles: {
    marginBottom: 8,
  },
  radioView: {
    marginBottom: 24,
  },
  actions: {
    marginBottom: 12,
  },
});

export default DevTesting;
