const fs = require('fs');
const generateIconSetFromCss = require('@expo/vector-icons/build/vendor/react-native-vector-icons/lib/generate-icon-set-from-css.js');
const cssDir = __dirname;
const iconSet = generateIconSetFromCss(cssDir + '/iconfont.css', '');
fs.writeFileSync(
    cssDir + '/__icontype.ts',
    'export const icons = ' + iconSet + ';\nexport type IconTypes = keyof typeof icons'
);
// fs.writeFileSync(cssDir + '/iconfont.json', iconSet);
