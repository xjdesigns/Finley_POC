import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, useColorScheme} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleConnection, setStatus} from '../store/mailbox';
import {COLORS} from '../utils/Colors';
import FnPressable from '../components/FnPressable';
import FnText from '../components/FnText';
import FnNumPad from '../components/FnNumPad';
import FnValueDisplay from '../components/FnValueDisplay';
import {createBottomBarStyles} from '../utils/BottomBar';

const CreatePinCode = () => {
  const dispatch = useDispatch();
  const {isConnected, status} = useSelector(state => state.mailbox);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1,
  };

  const innerView = {
    padding: 20,
    paddingHorizontal: 12,
  };

  const numPadView = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  const numInputView = {
    marginBottom: 12,
  };

  const [numVal, setNumVal] = useState('');
  const handleNumPress = val => {
    setNumVal(prevState => {
      let newVal = '';
      if (val === 'backspace' && prevState.length > 0) {
        newVal = prevState.slice(0, -1);
      } else if (val !== 'backspace') {
        newVal = prevState + val;
      }
      return newVal;
    });
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          <FnText
            text="Create A Pin Code for Your Mailbox"
            fnTextStyles={styles.title}
          />
          <FnText
            text="You'll use this code when you don't have your phone handy. You can always change this later."
            fnTextStyles={styles.subtext}
          />
          <FnText
            text="Your code always starts with #"
            fnTextStyles={styles.subtext}
          />
          <View style={numPadView}>
            <View style={numInputView}>
              <FnValueDisplay value={numVal} />
            </View>
            <FnNumPad onPress={handleNumPress} />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable
          text="Set Pin"
          onPress={() => {}}
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
    marginBottom: 6,
  },
  subtext: {
    textAlign: 'center',
    marginBottom: 12,
  },
  subTextHelp: {
    textAlign: 'center',
    marginBottom: 12,
  },
  bottomBar: createBottomBarStyles(),
});

export default CreatePinCode;
