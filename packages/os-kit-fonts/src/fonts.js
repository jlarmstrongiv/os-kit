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

module.exports.winFontsPath = 'C://Windows/Fonts';
module.exports.macFontsPath = 'https://developer.apple.com/fonts/';
module.exports.macFontsMonoPath = '/Applications/Utilities/Terminal.app/Contents/Resources/Fonts';

/**
 * Segoe UI
 */
module.exports.segoeUi = {
  name: 'segoe-ui',
  path: './system-fonts/win/Segoe UI/',
  fonts: [
    {
      fontWeight: 200,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fileName: 'segoeuil.ttf',
    },
    {
      fontWeight: 200,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fileName: 'seguili.ttf',
    },
    {
      fontWeight: 300,
      fontWeightName: 'SemiLight',
      fontStyle: 'normal',
      fileName: 'segoeuisl.ttf',
    },
    {
      fontWeight: 300,
      fontWeightName: 'SemiLight',
      fontStyle: 'italic',
      fileName: 'seguisli.ttf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'segoeui.ttf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fileName: 'segoeuii.ttf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fileName: 'seguisb.ttf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fileName: 'seguisbi.ttf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fileName: 'segoeuib.ttf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fileName: 'segoeuiz.ttf',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'normal',
      fileName: 'seguibl.ttf',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'italic',
      fileName: 'seguibli.ttf',
    },
  ],
};

/**
 * Segoe Print
 */
module.exports.segoePrint = {
  name: 'segoe-print',
  path: './system-fonts/win/Segoe Specialty/',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'segoepr.ttf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fileName: 'segoeprb.ttf',
    },
  ],
};

/**
 * Segoe Script
 */
module.exports.segoeScript = {
  name: 'segoe-script',
  path: './system-fonts/win/Segoe Specialty/',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'segoesc.ttf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fileName: 'segoescb.ttf',
    },
  ],
};

/**
 * Segoe Specialty
 */
module.exports.segoeIcons = {
  // MDL2 Assets
  name: 'segoe-icons',
  path: './system-fonts/win/Segoe Specialty/',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'segmdl2.ttf',
    },
  ],
};
module.exports.segoeEmoji = {
  name: 'segoe-emoji',
  path: './system-fonts/win/Segoe Specialty/',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'seguiemj.ttf',
    },
  ],
};
module.exports.segoeHistory = {
  name: 'segoe-history',
  path: './system-fonts/win/Segoe Specialty/',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'seguihis.ttf',
    },
  ],
};
module.exports.segoeBrail = {
  name: 'segoe-brail',
  path: './system-fonts/win/Segoe Specialty/',
  fonts: [
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'seguisym.ttf',
    },
  ],
};

/**
 * SF Pro Display
 */
module.exports.sfProDisplay =
{
  name: 'sf-pro-display',
  path: './system-fonts/mac/SF Pro/',
  fonts: [
    {
      fontWeight: 100,
      fontWeightName: 'UltraLight',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Ultralight.otf',
    },
    {
      fontWeight: 100,
      fontWeightName: 'UltraLight',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-UltralightItalic.otf',
    },
    {
      fontWeight: 200,
      fontWeightName: 'Thin',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Thin.otf',
    },
    {
      fontWeight: 200,
      fontWeightName: 'Thin',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-ThinItalic.otf',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Light.otf',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-LightItalic.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Regular.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-RegularItalic.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Medium.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-MediumItalic.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Semibold.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-SemiboldItalic.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Bold.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-BoldItalic.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Heavy.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-HeavyItalic.otf',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Display-Black.otf',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Display-BlackItalic.otf',
    },
  ],
};

/**
 * SF Pro Text
 */
module.exports.sfProText = {
  name: 'sf-pro-text',
  path: './system-fonts/mac/SF Pro',
  fonts: [
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Text-Light.otf',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Text-LightItalic.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Text-Regular.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Text-RegularItalic.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Text-Medium.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Text-MediumItalic.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Text-Semibold.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Text-SemiboldItalic.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Text-Bold.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Text-BoldItalic.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fileName: 'SF-Pro-Text-Heavy.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'italic',
      fileName: 'SF-Pro-Text-HeavyItalic.otf',
    },
  ],
};

/**
 * SF Pro Compact Display
 */
module.exports.sfProCompactDisplay = {
  name: 'sf-compact-display',
  path: './system-fonts/mac/SF Compact/',
  fonts: [
    {
      fontWeight: 100,
      fontWeightName: 'UltraLight',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Ultralight.otf',
    },
    {
      fontWeight: 200,
      fontWeightName: 'Thin',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Thin.otf',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Light.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Regular.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Medium.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Semibold.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Bold.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Heavy.otf',
    },
    {
      fontWeight: 900,
      fontWeightName: 'Black',
      fontStyle: 'normal',
      fileName: 'SFCompactDisplay-Black.otf',
    },
  ],
};

module.exports.sfProCompactText = {
  name: 'sf-compact-text',
  path: './system-fonts/mac/SF Compact/',
  fonts: [
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fileName: 'SFCompactText-Light.otf',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fileName: 'SFCompactText-LightItalic.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'SFCompactText-Regular.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fileName: 'SFCompactText-RegularItalic.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fileName: 'SFCompactText-Medium.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'italic',
      fileName: 'SFCompactText-MediumItalic.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fileName: 'SFCompactText-Semibold.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fileName: 'SFCompactText-SemiboldItalic.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fileName: 'SFCompactText-Bold.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fileName: 'SFCompactText-BoldItalic.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fileName: 'SFCompactText-Heavy.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'italic',
      fileName: 'SFCompactText-HeavyItalic.otf',
    },
  ],
};

/**
 * SF Mono
 */
module.exports.sfMono = {
  name: 'sf-mono',
  path: './system-fonts/mac/SF Mono/',
  fonts: [
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'normal',
      fileName: 'SFMono-Light.otf',
    },
    {
      fontWeight: 300,
      fontWeightName: 'Light',
      fontStyle: 'italic',
      fileName: 'SFMono-LightItalic.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'normal',
      fileName: 'SFMono-Regular.otf',
    },
    {
      fontWeight: 400,
      fontWeightName: 'Regular',
      fontStyle: 'italic',
      fileName: 'SFMono-RegularItalic.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'normal',
      fileName: 'SFMono-Medium.otf',
    },
    {
      fontWeight: 500,
      fontWeightName: 'Medium',
      fontStyle: 'italic',
      fileName: 'SFMono-MediumItalic.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'normal',
      fileName: 'SFMono-Semibold.otf',
    },
    {
      fontWeight: 600,
      fontWeightName: 'SemiBold',
      fontStyle: 'italic',
      fileName: 'SFMono-SemiboldItalic.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'normal',
      fileName: 'SFMono-Bold.otf',
    },
    {
      fontWeight: 700,
      fontWeightName: 'Bold',
      fontStyle: 'italic',
      fileName: 'SFMono-BoldItalic.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'normal',
      fileName: 'SFMono-Heavy.otf',
    },
    {
      fontWeight: 800,
      fontWeightName: 'Heavy',
      fontStyle: 'italic',
      fileName: 'SFMono-HeavyItalic.otf',
    },
  ],
};
