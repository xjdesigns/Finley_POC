import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {useSelector} from 'react-redux';
import FnText from '../../components/FnText';
import {COLORS} from '../../utils/Colors';
import {useBaseStyles} from '../../hooks/base-style-hooks';

const MailDetails = () => {
  const {selectedMail} = useSelector(state => state.mail);
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;
  const {backgroundStyle, safeView} = useBaseStyles();

  const innerView = {
    paddingHorizontal: 20,
    flex: 1,
  };

  const contentsView = {
    marginBottom: 28,
  };

  const imgView = {
    width: '100%',
    height: 139,
    marginBottom: 18,
  };

  const subTitle = {
    color: COLORS.mediumgray,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={innerView}>
            <Image
              src={selectedMail.img}
              style={imgView}
              // resizeMode="contain"
            />

            <View style={contentsView}>
              <FnText text="Type" fnTextStyles={subTitle} />
              <FnText text="First-Class" />
            </View>

            <View style={contentsView}>
              <FnText text="Sender" fnTextStyles={subTitle} />
              <FnText text={selectedMail.sender} />
            </View>

            <View style={contentsView}>
              <FnText text="Delivered" fnTextStyles={subTitle} />
              <FnText text="Saturday, May 25th" />
            </View>

            <View style={contentsView}>
              <FnText text="To" fnTextStyles={subTitle} />
              <FnText text={selectedMail.subject} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MailDetails;
