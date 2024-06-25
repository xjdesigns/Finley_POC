import React, {useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FnText from '../../components/FnText';
import FnPressable from '../../components/FnPressable';
import FnIconBadge from '../../components/FnIconBadge';
import {flagConnected} from '../../utils/Images';
import {COLORS} from '../../utils/Colors';
import {createBottomBarStyles} from '../../utils/Style';
import {useBaseStyles} from '../../hooks/base-style-hooks';
import {NOTIFICATIONS_ROUTE} from '../../constants/routes';
import {
  WAITING_STATUS,
  LOADING_STATUS,
  LOADED_STATUS,
} from '../../constants/status';

const Firmware = () => {
  const navigation = useNavigation();
  const {backgroundStyle, safeView} = useBaseStyles();
  const [updateStatus, setUpdateStatus] = useState(WAITING_STATUS);

  const handleUpdate = () => {
    setUpdateStatus(LOADING_STATUS);
    setTimeout(() => {
      setUpdateStatus(LOADED_STATUS);
    }, 2000);
  };

  const handleDone = () => {
    navigation.navigate(NOTIFICATIONS_ROUTE);
    setUpdateStatus(WAITING_STATUS);
  };

  const innerView = {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  };

  const innerFlagImage = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const connectedBackground = {
    backgroundColor: COLORS.success,
  };

  const connectedText = {
    color: COLORS.black,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={safeView}>
        <View style={innerView}>
          {updateStatus === WAITING_STATUS && (
            <>
              <FnText
                text="Your flag has a firmware update."
                fnTextStyles={styles.title}
              />
              <FnText
                text="Make sure you're within 6 feet of your mailbox."
                fnTextStyles={styles.subtext}
              />
              <View style={innerFlagImage}>
                <Image
                  src={flagConnected}
                  style={styles.finleyFlagImage}
                  resizeMode="contain"
                />
              </View>
            </>
          )}
          {updateStatus === LOADING_STATUS && (
            <>
              <FnIconBadge>
                <View style={styles.loadingView}>
                  <ActivityIndicator size="large" color={COLORS.black} />
                </View>
              </FnIconBadge>
              <FnText
                text="Installing firmware update"
                fnTextStyles={styles.title}
              />
              <FnText
                text="Device is updating, this should only take a minute."
                fnTextStyles={styles.subtext}
              />
            </>
          )}
          {updateStatus === LOADED_STATUS && (
            <>
              <FnIconBadge fnBadgeStyles={connectedBackground}>
                <IonIcon
                  name="checkmark-outline"
                  style={styles.connectedIcon}
                />
              </FnIconBadge>
              <FnText text="Firmware Updated" fnTextStyles={styles.title} />
            </>
          )}
        </View>
      </SafeAreaView>
      {updateStatus === WAITING_STATUS && (
        <View style={styles.bottomBar}>
          <FnPressable text="Install Update" onPress={handleUpdate} />
        </View>
      )}
      {updateStatus === LOADED_STATUS && (
        <View style={styles.bottomBar}>
          <FnPressable
            text="Done"
            onPress={handleDone}
            fnBtnStyles={connectedBackground}
            fnBtnTextStyles={connectedText}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtext: {
    textAlign: 'center',
    color: COLORS.mediumgray,
    marginBottom: 28,
  },
  finleyFlagImage: {
    width: '70%',
    aspectRatio: 1,
  },
  loadingView: {
    marginTop: 12,
    marginLeft: 4,
  },
  connectedIcon: {
    marginTop: 14,
    fontSize: 54,
  },
  bottomBar: createBottomBarStyles({noBackground: true}),
});

export default Firmware;
