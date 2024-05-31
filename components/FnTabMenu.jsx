import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../utils/Colors';
import {useTheme} from '@react-navigation/native';

export const FnTabMenu = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();
  const theme = colors;

  const navBar = {
    backgroundColor: theme.background,
    flexDirection: 'row',
    paddingBottom: 20,
    borderTopColor: COLORS.borderGray,
    borderTopWidth: 1,
  };

  const navIcon = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 4,
  };

  const navText = {
    textAlign: 'center',
    fontSize: 10,
    color: theme.text,
  };

  const getIcon = (name, isFocused) => {
    const styleProps = {
      size: 24,
      color: isFocused ? theme.text : COLORS.mediumgray,
    };

    if (name === 'Home') {
      return <Icon name="home" {...styleProps} />;
    }

    if (name === 'Mail') {
      return <IonIcon name="mail" {...styleProps} />;
    }

    if (name === 'More') {
      return <Icon name="ellipsis-h" {...styleProps} />;
    }
  };

  return (
    <View style={navBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icon = getIcon(route.name, isFocused);

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.navAction}>
            <View style={navIcon}>{icon}</View>
            <Text style={navText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: 20,
    borderTopColor: COLORS.borderGray,
    borderTopWidth: 1,
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
});
