export const palette = {
  primary: {
    electricLighter: '#8FABF2',
    electricLight: '#658BED',
    electricBase: '#3B6BE8',
    electricDark: '#184BCC',
    electricDarker: '#113795',
  },
  secondary: {
    charcoal: {
      lighter: '#888D8F',
      light: '#5E6264',
      base: '#353738',
      dark: '#292A2B',
      darker: '#1E1F20',
    },
    vermilion: {
      lighter: '#F8B086',
      light: '#F59258',
      base: '#F3742B',
      dark: '#D4560C',
      darker: '#9A3E09',
    },
    salmon: {
      lighter: '#F29090',
      light: '#ED6565',
      base: '#E83939',
      dark: '#D71919',
      darker: '#AC1414',
    },
    lime: {
      lighter: '#9DF290',
      light: '#78ED65',
      base: '#50E839',
      dark: '#2EC217',
      darker: '#239712',
    },
    lemon: {
      lighter: '#F2E890',
      light: '#EDDF65',
      base: '#E8D639',
      dark: '#D7C419',
      darker: '#AC9D14',
    },
  },
  neutral: {
    white: 'white',
    lighest: '#F8FDFF',
    lighter: '#9CA6A9',
    light: '#464C4F',
    mid: '#272B2C',
    base: '#191B1C',
    dark: '#131415',
    darker: '#121212',
  },
  system: {
    error: '#ED6565',
    success: '#78ED65',
    neutral: '#658BED',
    warning: '#EDDF65',
  },
};

export const semantic = {
  text: {
    default: palette.neutral.base,
    light: palette.neutral.light,
    lightest: palette.neutral.lighest,
    success: palette.secondary.lime.dark,
    error: palette.secondary.salmon.dark,
  },
  textButton: {
    light: palette.neutral.lighest,
    dark: palette.neutral.base,
    highLight: palette.secondary.vermilion.base,
  },
  hyperlink: {
    default: palette.primary.electricBase,
  },
  border: {
    default: palette.neutral.lighter,
    active: palette.neutral.light,
    dark: palette.neutral.base,
    error: palette.secondary.salmon.base,
  },
  background: {
    white: palette.neutral.white,
    dark: palette.neutral.dark,
    light: palette.neutral.lighest,
    neutral: palette.primary.electricBase,
    error: palette.secondary.salmon.base,
    warning: palette.secondary.lemon.base,
    success: palette.secondary.lime.base,
  },
};
