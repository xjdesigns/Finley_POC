import React from 'react';
import {View, Image, Pressable, SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import FnText from '../../components/FnText';
import {COLORS} from '../../utils/Colors';
import {MAIL_VIEWER_ROUTE} from '../../constants/routes';
import {useBaseStyles} from '../../hooks/base-style-hooks';

const MailDetails = () => {
  const navigation = useNavigation();
  const {selectedMail} = useSelector(state => state.mail);
  const {backgroundStyle, safeView} = useBaseStyles();

  const handleShowViewer = () => {
    if (!selectedMail) {
      return;
    }

    navigation.navigate(MAIL_VIEWER_ROUTE);
  };

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
    fontSize: 14,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {selectedMail ? (
            <View style={innerView}>
              <Pressable onPress={handleShowViewer}>
                <Image src={selectedMail.img} style={imgView} />
              </Pressable>

              <View style={contentsView}>
                <FnText text="Type" fnTextStyles={subTitle} />
                <FnText text="First-Class" />
              </View>

              <View style={contentsView}>
                <FnText text="Sender" fnTextStyles={subTitle} />
                <FnText text={selectedMail.sender} />
                <FnText text={selectedMail.address1} />
                <FnText text={selectedMail.address2} />
              </View>

              <View style={contentsView}>
                <FnText text="Delivered" fnTextStyles={subTitle} />
                <FnText text={selectedMail?.deliveredDate} />
              </View>

              <View style={contentsView}>
                <FnText text="To" fnTextStyles={subTitle} />
                <FnText text={selectedMail.subject} />
              </View>
            </View>
          ) : (
            <View style={innerView}>
              <FnText text="No Selected Mail" />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MailDetails;
