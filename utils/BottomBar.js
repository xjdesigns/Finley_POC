import {COLORS} from './Colors';

export function createBottomBarStyles() {
  return {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingTop: 12,
    paddingBottom: 36,
    paddingHorizontal: 12,
  };
}
