import React from 'react';
import {View, useColorScheme} from 'react-native';
import {COLORS} from '../utils/Colors';

const FnIconBadge = ({fnBadgeStyles, children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const notConnectNoMail = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 88,
    height: 88,
    marginBottom: 28,
    backgroundColor: theme.lightBlueBackground,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    ...fnBadgeStyles,
  };

  return <View style={notConnectNoMail}>{children}</View>;
};

export default FnIconBadge;
