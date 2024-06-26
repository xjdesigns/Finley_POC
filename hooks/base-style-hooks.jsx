import {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {COLORS} from '../utils/Colors';
import {getAndroidPadding} from '../utils/Style';

// NOTE: Android padding is needed if you are not using the header
// As Android does not have the safeAreaView concept

export function useBaseStyles({
  altBgColor,
  useAndroidPadding = false,
  safeViewBorder = false,
} = {}) {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? COLORS.darktheme : COLORS.lighttheme;

  const backgroundStyle = useMemo(() => {
    return {
      backgroundColor: altBgColor || theme.background,
      flex: 1,
      ...(useAndroidPadding && {...getAndroidPadding}),
    };
  }, [theme, altBgColor, useAndroidPadding]);

  const safeView = {
    flex: 1,
    ...(safeViewBorder && {
      borderTopWidth: 1,
      borderTopColor: COLORS.darkergray,
    }),
  };

  return {backgroundStyle, safeView};
}
