const {presetScalpel:preset } = require('unocss-preset-scalpel')
const fs = require('fs')
const path = require('path')
console.log(preset);
const presetcontent = JSON.stringify(preset())
fs.writeFileSync(path.join(__dirname, './presetcontent.json'), presetcontent, (error) => {
  console.log(error);
})
