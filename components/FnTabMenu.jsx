import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../utils/Colors';
import {useTheme} from '@react-navigation/native';

export const FnTabMenu = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();
  const theme = colors;

  const navBar = {
    backgroundColor: theme.background,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    borderTopColor: COLORS.darkergray,
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

  const getIcon = (name, isFocused) => {
    const styleProps = {
      size: 24,
      color: isFocused ? theme.text : COLORS.mediumgray,
    };

    if (name === 'Home') {
      return <Icon name="home" {...styleProps} />;
    }

    if (name === 'Mailbox') {
      return <MatCIcon name="mailbox-up-outline" {...styleProps} />;
    }

    if (name === 'Mail') {
      return <IonIcon name="mail-outline" {...styleProps} />;
    }

    if (name === 'Scan') {
      return <IonIcon name="scan-outline" {...styleProps} />;
    }

    if (name === 'Menu') {
      return <IonIcon name="menu" {...styleProps} />;
    }
  };

  const getTextStyle = (isFocused = false) => {
    return {
      textAlign: 'center',
      fontSize: 10,
      color: isFocused ? theme.text : COLORS.mediumgray,
    };
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
        const tabBarBadge = options?.tabBarBadge;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // NOTE: Mailbox and Mail both use common routes for details and image viewer
            // Reset the navigation state...
            if (route.name === 'Mailbox' || route.name === 'Mail') {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{key: route.key, name: route.name}],
                }),
              );
            } else {
              navigation.navigate(route.name, route.params);
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icon = getIcon(route.name, isFocused);
        const navText = getTextStyle(isFocused);

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
            <View style={navIcon}>
              {icon}

              {tabBarBadge && (
                <View style={styles.indicator}>
                  <Text style={styles.indicatorText}>{tabBarBadge}</Text>
                </View>
              )}
            </View>
            <Text style={navText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navAction: {
    textAlign: 'center',
    padding: 10,
  },
  indicator: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.danger,
    borderRadius: 50,
  },
  indicatorText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 800,
  },
});
