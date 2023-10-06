import { osName } from "expo-device";

const DEFAULT_FONT = osName.toLowerCase() === 'ios' ? 'Arial' : 'Roboto';
export let FONT = {
  NORMAL: DEFAULT_FONT,
  BOLD: DEFAULT_FONT,
  EXTRA_BOLD: DEFAULT_FONT,
  MEDIUM: DEFAULT_FONT,
  SEMI_BOLD: DEFAULT_FONT,
  THIN: DEFAULT_FONT,
};

export function updateFont() {
  FONT = {
    NORMAL: 'Satoshi-Regular',
    BOLD: 'Satoshi-Bold',
    EXTRA_BOLD: 'Satoshi-ExtraBold',
    MEDIUM: 'Satoshi-Medium',
    SEMI_BOLD: 'Satoshi-SemiBold',
    LIGHT: 'Satoshi-Light'
  }
}
