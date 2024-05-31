import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import FnText from '../../components/FnText';
import FnListSwitch from '../../components/FnListSwtich';
import FnSwitch from '../../components/FnSwitch';
import {COLORS} from '../../utils/Colors';

const NotificationPreferences = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [mailArrives, setMailArrives] = useState(false);
  const [mailPickedUp, setMailPickedUp] = useState(false);
  const [mailWaiting, setMailWaiting] = useState(false);

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const listView = {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
  };

  const listTitle = {
    flex: 1,
    marginRight: 14,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <FnListSwitch
          text="Notify me when mail Arrives"
          value={mailArrives}
          onValueChange={() => setMailArrives(!mailArrives)}
          borderBottom={true}
        />
        <FnListSwitch
          text="Notify me when mail is picked up"
          value={mailPickedUp}
          onValueChange={() => setMailPickedUp(!mailPickedUp)}
          borderBottom={true}
        />
        <FnListSwitch
          text="Notify me when mail hasn't Been Picked up in awhile"
          value={mailWaiting}
          onValueChange={() => setMailWaiting(!mailWaiting)}
        />
      </SafeAreaView>
    </View>
  );
};

export default NotificationPreferences;
