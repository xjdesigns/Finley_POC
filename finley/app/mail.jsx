import React from 'react';
import {StyleSheet, View, SafeAreaView, useColorScheme} from 'react-native';
import FnText from '../../components/FnText';
import {COLORS} from '../../utils/Colors';

const Mail = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const baseStyle = {
    flex: 1,
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
    ...baseStyle,
  };

  const innerView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <View style={innerView}>
          <FnText
            text="Nothing to see here, yet."
            fnTextStyles={styles.title}
          />
          <FnText text="Next time mail is delivered it will show up here." />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    fontSize: 28,
    fontWeight: 700,
  },
});

export default Mail;
