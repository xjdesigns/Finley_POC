import {COLORS} from './Colors';

export function createBottomBarStyles({
  needsMinHeight = false,
  fullWidth = false,
  noBackground = false,
} = {}) {
  let baseStyle = {
    backgroundColor: noBackground ? 'transparent' : COLORS.white,
    paddingTop: 12,
    paddingBottom: 36,
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
