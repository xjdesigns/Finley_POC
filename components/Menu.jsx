import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';

const Menu = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Profile', {name: 'Jane'});
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
        </View>
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable style={styles.navAction}>
        <View style={styles.navIcon}>
          <Icon name="bolt" {...iconProps} />
        </View>
        <Text style={styles.navText}>Activites</Text>
      </Pressable>
      <Pressable style={styles.navAction}>
        <View style={styles.navKeyless}>
          <FIcon5 name="key" {...iconProps} color="#fff" />
        </View>
      </Pressable>
      <Pressable style={styles.navAction}>
        <View style={styles.navIcon}>
          <Icon name="comments" {...iconProps} />
        </View>
        <Text style={styles.navText}>Messaging</Text>
      </Pressable>
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
  },
  navAction: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
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
