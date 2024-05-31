import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';

// This file is meant to demo out the FnTabMenu as it is based off this...
// Very easy to test out styles since the bottomNav requires a full reload
const Menu = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    // navigation.navigate('Profile', {name: 'Jane'});
  };

  const iconProps = {
    size: 24,
    color: '#000',
  };

  return (
    <View style={styles.navBar}>
      <Pressable style={styles.navAction} onPress={handleOnPress}>
        <View style={styles.navIcon}>
          <Icon name="home" {...iconProps} />

          <View style={styles.indicator}>
            <Text style={styles.indicatorText}>3</Text>
          </View>
        </View>
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable style={styles.navAction}>
        <View style={styles.navIcon}>
          <IonIcon name="mail" {...iconProps} />
        </View>
        <Text style={styles.navText}>Activites</Text>
      </Pressable>
      {/* <Pressable style={styles.navAction}>
        <View style={styles.navKeyless}>
          <FIcon5 name="key" {...iconProps} color="#fff" />
        </View>
      </Pressable> */}
      {/* <Pressable style={styles.navAction}>
        <View style={styles.navIcon}>
          <Icon name="comments" {...iconProps} />
        </View>
        <Text style={styles.navText}>Messaging</Text>
      </Pressable> */}
      <Pressable style={styles.navAction}>
        <View style={styles.navIcon}>
          <Icon name="ellipsis-h" {...iconProps} />
        </View>
        <Text style={styles.navText}>More</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  navIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 4,
    position: 'relative',
  },
  navAction: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aff',
    borderRadius: 50,
  },
  indicatorText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 800,
  },
  navText: {
    textAlign: 'center',
    fontSize: 10,
  },
  navKeyless: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    backgroundColor: 'black',
    borderRadius: 44,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Menu;
