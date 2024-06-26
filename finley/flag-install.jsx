import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FnText from '../components/FnText';
import FnPressable from '../components/FnPressable';
import {flagBox} from '../utils/Images';
import {COLORS} from '../utils/Colors';
import {createBottomBarStyles} from '../utils/Style';
import {useBaseStyles} from '../hooks/base-style-hooks';
import {CONNECT_USPS_ROUTE} from '../constants/routes';

const FlagInstall = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles();

  const handleContinue = () => {
    navigation.navigate(CONNECT_USPS_ROUTE);
  };

  const innerView = {
    backgroundColor: theme.lightBlueBackground,
  };

  const imgView = {
    flex: 1,
    backgroundColor: theme.lightBlueBackground,
    justifyContent: 'flex-end',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          <FnText
            text="Have you installed your flag at your mailbox?"
            fnTextStyles={styles.title}
            disableDarkTheme={true}
          />
        </View>
        <View style={imgView}>
          <Image src={flagBox} style={styles.flagImg} resizeMode="contain" />
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <FnPressable text="My Flag is Installed" onPress={handleContinue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 6,
    padding: 20,
  },
  flagImg: {
    marginBottom: 24,
    width: '100%',
    aspectRatio: 1,
  },
  bottomBar: createBottomBarStyles({noBackground: true}),
});

export default FlagInstall;
