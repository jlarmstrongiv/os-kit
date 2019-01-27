/**
 * Original File Paths
 * the // should be backslashes
 * Segoe UI
 *  Weights https://stackoverflow.com/questions/13187044/segoe-ui-font-with-font-face-local
 *  Download https://docs.microsoft.com/en-us/windows/uwp/design/downloads/
 *  Icons https://docs.microsoft.com/en-us/windows/uwp/design/style/segoe-ui-symbol-font
 * SF
 *  San Francisco https://developer.apple.com/fonts/
 *  Mono https://medium.com/@shashikant.jagtap/getting-apples-sf-mono-font-in-macos-1de5183add84
 */

// module.exports.winFontsPath = 'C://Windows/Fonts';
// module.exports.macFontsPath = 'https://developer.apple.com/fonts/';
// module.exports.macFontsMonoPath = '/Applications/Utilities/Terminal.app/Contents/Resources/Fonts';

/**
 * Segoe UI
 */
module.exports.segoeUi = {
  familyName: 'segoe-ui',
  familyPath: 'system-fonts/win/Segoe UI/',
  format: 'ttf',
  fonts: [
    {
      fontWeight: 200,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fontFile: 'segoeuil',
    },
    {
      fontWeight: 200,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fontFile: 'seguili',
    },
    {
      fontWeight: 300,
      fontWeightName: 'SemiLight',
      fontStyle: 'normal',
      fontFile: 'segoeuisl',
    },
    {
      fontWeight: 300,
      fontWeightName: 'SemiLight',
      fontStyle: 'italic',
      fontFile: 'seguisli',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'segoeui',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fontFile: 'segoeuii',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fontFile: 'seguisb',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fontFile: 'seguisbi',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fontFile: 'segoeuib',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fontFile: 'segoeuiz',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'normal',
      fontFile: 'seguibl',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'italic',
      fontFile: 'seguibli',
    },
  ],
};

/**
 * Segoe Print
 */
module.exports.segoePrint = {
  familyName: 'segoe-print',
  familyPath: 'system-fonts/win/Segoe Specialty/',
  format: 'ttf',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'segoepr',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fontFile: 'segoeprb',
    },
  ],
};

/**
 * Segoe Script
 */
module.exports.segoeScript = {
  familyName: 'segoe-script',
  familyPath: 'system-fonts/win/Segoe Specialty/',
  format: 'ttf',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'segoesc',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fontFile: 'segoescb',
    },
  ],
};

/**
 * Segoe Specialty
 */
module.exports.segoeIcons = {
  // MDL2 Assets
  name: 'segoe-icons',
  familyPath: 'system-fonts/win/Segoe Specialty/',
  format: 'ttf',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'segmdl2',
    },
  ],
};
module.exports.segoeEmoji = {
  familyName: 'segoe-emoji',
  familyPath: 'system-fonts/win/Segoe Specialty/',
  format: 'ttf',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'seguiemj',
    },
  ],
};
module.exports.segoeHistory = {
  familyName: 'segoe-history',
  familyPath: 'system-fonts/win/Segoe Specialty/',
  format: 'ttf',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'seguihis',
    },
  ],
};
module.exports.segoeBrail = {
  familyName: 'segoe-brail',
  familyPath: 'system-fonts/win/Segoe Specialty/',
  format: 'ttf',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'seguisym',
    },
  ],
};

/**
 * SF Pro Display
 */
module.exports.sfProDisplay =
{
  familyName: 'sf-pro-display',
  familyPath: 'system-fonts/mac/SF Pro/',
  format: 'otf',
  fonts: [
    {
      fontWeight: 100,
      fontWeightName: 'UltraLight',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Ultralight',
    },
    {
      fontWeight: 100,
      fontWeightName: 'UltraLight',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-UltralightItalic',
    },
    {
      fontWeight: 200,
      fontWeightName: 'Thin',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Thin',
    },
    {
      fontWeight: 200,
      fontWeightName: 'Thin',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-ThinItalic',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Light',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-LightItalic',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Regular',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-RegularItalic',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Medium',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-MediumItalic',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Semibold',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-SemiboldItalic',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Bold',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-BoldItalic',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Heavy',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-HeavyItalic',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Display-Black',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Display-BlackItalic',
    },
  ],
};

/**
 * SF Pro Text
 */
module.exports.sfProText = {
  familyName: 'sf-pro-text',
  familyPath: 'system-fonts/mac/SF Pro',
  format: 'otf',
  fonts: [
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Text-Light',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Text-LightItalic',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Text-Regular',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Text-RegularItalic',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Text-Medium',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Text-MediumItalic',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Text-Semibold',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Text-SemiboldItalic',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Text-Bold',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Text-BoldItalic',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fontFile: 'SF-Pro-Text-Heavy',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'italic',
      fontFile: 'SF-Pro-Text-HeavyItalic',
    },
  ],
};

/**
 * SF Pro Compact Display
 */
module.exports.sfProCompactDisplay = {
  familyName: 'sf-compact-display',
  familyPath: 'system-fonts/mac/SF Compact/',
  format: 'otf',
  fonts: [
    {
      fontWeight: 100,
      fontWeightName: 'UltraLight',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Ultralight',
    },
    {
      fontWeight: 200,
      fontWeightName: 'Thin',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Thin',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Light',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Regular',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Medium',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Semibold',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Bold',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Heavy',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'normal',
      fontFile: 'SFCompactDisplay-Black',
    },
  ],
};

module.exports.sfProCompactText = {
  familyName: 'sf-compact-text',
  familyPath: 'system-fonts/mac/SF Compact/',
  format: 'otf',
  fonts: [
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fontFile: 'SFCompactText-Light',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fontFile: 'SFCompactText-LightItalic',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'SFCompactText-Regular',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fontFile: 'SFCompactText-RegularItalic',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fontFile: 'SFCompactText-Medium',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'italic',
      fontFile: 'SFCompactText-MediumItalic',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fontFile: 'SFCompactText-Semibold',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fontFile: 'SFCompactText-SemiboldItalic',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fontFile: 'SFCompactText-Bold',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fontFile: 'SFCompactText-BoldItalic',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fontFile: 'SFCompactText-Heavy',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'italic',
      fontFile: 'SFCompactText-HeavyItalic',
    },
  ],
};

/**
 * SF Mono
 */
module.exports.sfMono = {
  familyName: 'sf-mono',
  familyPath: 'system-fonts/mac/SF Mono/',
  format: 'otf',
  fonts: [
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fontFile: 'SFMono-Light',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fontFile: 'SFMono-LightItalic',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fontFile: 'SFMono-Regular',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fontFile: 'SFMono-RegularItalic',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fontFile: 'SFMono-Medium',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'italic',
      fontFile: 'SFMono-MediumItalic',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fontFile: 'SFMono-Semibold',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fontFile: 'SFMono-SemiboldItalic',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fontFile: 'SFMono-Bold',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fontFile: 'SFMono-BoldItalic',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fontFile: 'SFMono-Heavy',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'italic',
      fontFile: 'SFMono-HeavyItalic',
    },
  ],
};
