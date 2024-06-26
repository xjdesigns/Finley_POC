import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import FnListSwitch from '../../components/FnListSwtich';
import {useBaseStyles} from '../../hooks/base-style-hooks';

const NotificationPreferences = () => {
  const {backgroundStyle, safeView} = useBaseStyles();
  const [mailArrives, setMailArrives] = useState(false);
  const [mailWaiting, setMailWaiting] = useState(false);

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
