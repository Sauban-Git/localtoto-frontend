/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { Platform } from 'react-native';

export const palette = {
  // Dark green theme colors
  primary: '#0A5D2C',         // Dark green - main brand color (from header)
  primaryDark: '#064423',     // Darker green for hover/pressed states
  primaryDarker: '#042F15',   // Even darker for emphasis
  headerGreen: '#0A5D2C',     // Dark green for headers (from screenshot)
  lightGreen: '#E8F5E9',      // Very light green for backgrounds
  secondary: '#4CAF50',       // Medium green for secondary elements
  background: '#FFFFFF',      // White background
  surface: '#F5F5F5',         // Light gray background for cards/surfaces
  surfaceAlt: '#E8F5E9',      // Very light green tint for alternate surfaces
  text: '#1B5E20',           // Dark green text (from screenshot)
  textMuted: '#4CAF50',       // Medium green for secondary text
  border: '#C8E6C9',          // Light green border
  gray: '#9E9E9E',            // Medium gray
  warning: '#FFA000',         // Amber for warnings
  danger: '#D32F2F',          // Red for errors/danger
  white: '#FFFFFF',           // Pure white
  black: '#000000',           // Pure black
};

type ColorTokens = {
  text: string;
  textMuted: string;
  background: string;
  surface: string;
  surfaceAlt: string;
  tint: string;
  icon: string;
  border: string;
  success: string;
  warning: string;
  danger: string;
  tabIconDefault: string;
  tabIconSelected: string;
};

export const Colors: Record<'light' | 'dark', ColorTokens> = {
  light: {
    text: palette.text,
    textMuted: palette.textMuted,
    background: palette.background,
    surface: palette.surface,
    surfaceAlt: palette.surfaceAlt,
    tint: palette.primary,
    icon: palette.gray,
    border: palette.border,
    success: palette.primary,
    warning: palette.warning,
    danger: palette.danger,
    tabIconDefault: palette.gray,
    tabIconSelected: palette.primary,
  },
  dark: {
    text: '#FFFFFF',
    textMuted: '#9CA3AF',
    background: '#111827',
    surface: '#1F2937',
    surfaceAlt: '#374151',
    tint: '#22C55E', // Medium green for dark mode too
    icon: '#6B7280',
    border: '#374151',
    success: '#22C55E',
    warning: '#F59E0B',
    danger: '#EF4444',
    tabIconDefault: '#6B7280',
    tabIconSelected: '#22C55E',
  },
};

const buildNavigationTheme = (mode: 'light' | 'dark'): Theme => {
  if (mode === 'light') {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: palette.primary,
        background: palette.background,
        card: palette.surface,
        text: palette.text,
        border: palette.border,
        notification: '#22C55E',
      },
    };
  }

  return {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#22C55E',
      background: '#111827',
      card: '#1F2937',
      text: '#FFFFFF',
      border: '#374151',
      notification: '#22C55E',
    },
  };
};

export const NavigationThemes = {
  light: buildNavigationTheme('light'),
  dark: buildNavigationTheme('dark'),
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
