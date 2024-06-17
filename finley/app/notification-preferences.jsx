import React, {useState} from 'react';
import {View, SafeAreaView, useColorScheme} from 'react-native';
import FnListSwitch from '../../components/FnListSwtich';
import {COLORS} from '../../utils/Colors';
import {getAndroidPadding} from '../../utils/Style';

const NotificationPreferences = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const [mailArrives, setMailArrives] = useState(false);
  const [mailWaiting, setMailWaiting] = useState(false);

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
    ...getAndroidPadding,
  };

  const safeView = {
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <FnListSwitch
          text="Notify me when mail Arrives"
          value={mailArrives}
          onValueChange={() => setMailArrives(!mailArrives)}
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
