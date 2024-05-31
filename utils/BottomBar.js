import {COLORS} from './Colors';

export function createBottomBarStyles({needsMinHeight = false} = {}) {
  const baseStyle = {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    backgroundColor: COLORS.white,
    paddingTop: 12,
    paddingBottom: 36,
    paddingHorizontal: 12,
  };

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
