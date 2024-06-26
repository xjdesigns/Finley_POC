import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setMailStatus, setMail, setMailbox} from '../../store/mail';
import FnText from '../../components/FnText';
import FnPressable from '../../components/FnPressable';
import FnRadio from '../../components/FnRadio';
import {useBaseStyles} from '../../hooks/base-style-hooks';
import {MAIL_TESTING_STATUS} from '../../constants/testing';
import {MOCK_MAIL} from '../../mock/mock-mail';
import {MOCK_MAILBOX} from '../../mock/mock-mailbox';

const RADIO_OPTIONS = MAIL_TESTING_STATUS;

const DevTesting = () => {
  const dispatch = useDispatch();
  const mailStatus = useSelector(state => state.mail.status);
  const {backgroundStyle, safeView} = useBaseStyles();

  const handleChange = val => {
    dispatch(setMailStatus({status: val}));
  };

  const handleUseMockMail = () => {
    dispatch(setMail({mail: MOCK_MAIL}));
  };

  const handleNoMail = () => {
    dispatch(setMail({mail: []}));
  };

  const handleUseMockMailbox = () => {
    dispatch(setMailbox({mailbox: MOCK_MAILBOX}));
  };

  const handleNoMailbox = () => {
    dispatch(setMailbox({mailbox: []}));
  };

  const innerView = {
    paddingHorizontal: 20,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
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
            text="Use Mock Mailbox"
            onPress={handleUseMockMailbox}
            size="small"
            fnBtnStyles={styles.actions}
          />

          <FnPressable
            text="Set Mailbox to None"
            onPress={handleNoMailbox}
            size="small"
            fnBtnStyles={styles.actions}
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
