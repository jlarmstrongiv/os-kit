// CLI options
// https://github.com/ecomfe/fontmin/issues/68#issuecomment-389030895
// don't forget to turn on the compress option for woff
// still need gulp file to create symlinks in builds
// font face generator https://github.com/ecomfe/fontmin/blob/master/lib/font-face.tpl
// export multiple font formats
// MDL2 Font https://scottdorman.github.io/mdl2-icons/icons/

// Other
// Mockup Links https://mockups.kkuistore.com/mockups/
// https://apple.stackexchange.com/questions/73849/mac-os-x-10-7-window-shadow-params

const fs = require('fs-extra');
const Fontmin = require('fontmin');
const ttf2woff2 = require('gulp-ttf2woff2');
const flatten = require('gulp-flatten');
const rename = require('gulp-rename');
const fontGroups = require('./fonts');

// see chars.js
//   https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block)
//   https://cs.stanford.edu/people/miles/iso8859.html
//   https://en.wikipedia.org/wiki/Windows_Glyph_List_4
//   https://wincent.com/wiki/Unicode_representations_of_modifier_keys
//   https://superuser.com/questions/1247382/is-there-a-unicode-character-for-the-windows-key
// https://meyerweb.com/eric/tools/dencoder/
const chars = '!%22%23%24%25%26%27()*%2B%2C-.%2F0123456789%3A%3B%3C%3D%3E%3F%40ABCDEFGHIJKLMNOPQRSTUVWXYZ%5B%5C%5D%5E_%60abcdefghijklmnopqrstuvwxyz%7B%7C%7D~%20%E2%8A%9E%E2%8E%8B%E2%87%A5%E2%87%AA%E2%87%A7%E2%8C%83%E2%8C%A5%EF%A3%BF%E2%8C%98%E2%90%A3%E2%8F%8E%E2%8C%AB%E2%8C%A6%E2%87%B1%E2%87%B2%E2%87%9E%E2%87%9F%E2%86%91%E2%87%A1%E2%86%93%E2%87%A3%E2%86%90%E2%87%A0%E2%86%92%E2%87%A2%E2%8C%A7%E2%87%AD%E2%8C%A4%E2%8F%8F%E2%8C%BD';
const decodedChars = decodeURIComponent(chars.replace(/\+/g, ' '));
// const decodedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const fontminPromise = (fontminInstance) => {
  return new Promise((resolve, reject) => {
    fontminInstance.run((err, files) => {
      if (err) { reject(err); }
      resolve(files);
    });
  });
};

const convertToOtf = async (path, newPath) => {
  // console.log(path);
  // console.log(fs.existsSync(path));
  try {
    const fontmin = new Fontmin()
      .src(path)
      .use(flatten())
      .use(rename(`${newPath}.otf`))
      .use(Fontmin.otf2ttf({ text: decodedChars, }))
      .use(Fontmin.glyph(decodedChars))
      .use(Fontmin.ttf2woff())
      .use(ttf2woff2())
      .dest(`./src/dist/${newPath}/`);
    const fontFiles = await fontminPromise(fontmin);
  } catch (error) {
    console.log(path);
    console.error(error);
  }
};

const convertToTtf = async (path, newPath) => {
  // console.log(path);
  // console.log(fs.existsSync(path));
  try {
    const fontmin = new Fontmin()
      .src(path)
      .use(flatten())
      .use(rename(`${newPath}.ttf`))
      .use(Fontmin.glyph(decodedChars))
      .use(Fontmin.ttf2woff())
      .use(ttf2woff2())
      .dest(`./src/dist/${newPath}/`);
    const fontFiles = await fontminPromise(fontmin);
  } catch (error) {
    console.log(path);
    console.log(error);
  }
};

const start = async () => {
  for (const fontGroupKey in fontGroups) {
    const {
      familyName,
      familyPath,
      format,
      fonts,
    } = fontGroups[fontGroupKey];

    for (const fontKey in fonts) {
      const {
        fontWeight,
        fontWeightName,
        fontStyle,
        fontFile,
      } = fonts[fontKey];

      const path = `./src/**/*${fontFile}.${format}`;
      const newPath = `${familyName}-subset-${fontWeight}`;

      // emoji is the only one that errors
      const fontFileBlackList = ['seguiemj',];

      if (!fontFileBlackList.includes(fontFile)) {
        if (format === 'otf') {
          await convertToOtf(path, newPath);
        }
        if (format === 'ttf') {
          await convertToTtf(path, newPath);
        }
      }
    }

  }
};
start();

// Object.entries(fontGroups).map(async ([fontGroupKey, fontGroup,]) => {
//   if (fontGroup.format === 'otf') {

//   } else if (fontGroup.format === 'ttf') {

//   }
// });

// const path = `./src/${fontGroups[fontGroupKey].path}*${fontGroups[fontGroupKey].fonts[fontKey].fileName}.${fontGroups[fontGroupKey].format}`;
// const newPath = `${fontGroups[fontGroupKey].fonts[fontKey].fileName}`;

// Object.entries(fontGroups).map(async ([fontGroupKey, fontGroup,]) => {
//   // console.log(fontGroup);
//   if (fontGroup.format === 'otf') {
//     console.log(`[OTF]: ${fontGroup.name}`);
//     const fontmin = new Fontmin()
//       .src('./src/system-fonts/**/*.otf')
//       .use(Fontmin.otf2ttf({ text: '', }))
//       .use(Fontmin.glyph())
//       .use(ttf2woff2())
//       .dest('./dist/otf');
//     const fontFiles = await fontminPromise(fontmin);
//     console.log(fontFiles);
//   } else if (fontGroup.format === 'ttf') {
//     console.log(`[TTF]: ${fontGroup.name}`);
//     const fontmin = new Fontmin()
//       .src('./src/system-fonts/**/*.ttf')
//       .use(ttf2woff2())
//       .dest('./dist/ttf');
//     const fontFiles = await fontminPromise(fontmin);
//     console.log(fontFiles);
//   } else {
//     console.log(`[ERROR]: ${fontGroup.format} is not a valid format for ${fontGroup.name} ${fontGroupKey}`);
//   }
// });

// const convertOtf = async () => {
//   const fontmin = new Fontmin()
//     .src('./src/system-fonts/**/*.otf')
//     .use(Fontmin.otf2ttf({ text: '' }))
//     .use(Fontmin.glyph(decodedChars))
//     .use(ttf2woff2())
//     .dest('./dist/otf');
//   const fontFiles = await fontminPromise(fontmin);
// };

// const convertTtf = async () => {
//   const fontmin = new Fontmin()
//     .src('./src/system-fonts/**/*.ttf')
//     .use(Fontmin.glyph(decodedChars))
//     .use(ttf2woff2())
//     .dest('./dist/ttf');
//   const fontFiles = await fontminPromise(fontmin);
// };

// const start = async () => {
//   await convertOtf();
//   await convertTtf();
// };
// start();
