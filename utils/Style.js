import {Platform, StatusBar} from 'react-native';
import {COLORS} from './Colors';

export function createBottomBarStyles({
  needsMinHeight = false,
  fullWidth = false,
  noBackground = false,
} = {}) {
  let baseStyle = {
    backgroundColor: noBackground ? 'transparent' : COLORS.white,
    paddingTop: 12,
    paddingBottom: 32,
    paddingHorizontal: 12,
  };

  if (fullWidth) {
    baseStyle = {
      ...baseStyle,
      width: '100%',
    };
  }

  if (needsMinHeight) {
    return {
      ...baseStyle,
      ...{
        minHeight: 155,
      },
    };
  } else {
    return baseStyle;
  }
}

// NOTE: If there is no navigation header this needs to be applied to the backgroundStyle
export const getAndroidPadding = {
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
};
