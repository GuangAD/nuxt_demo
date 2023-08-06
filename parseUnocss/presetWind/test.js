const { presetWind } = require('@unocss/preset-wind')
const fs = require('fs')
const path = require('path')
const presetWindcontent = JSON.stringify(presetWind())
fs.writeFileSync(path.join(__dirname, './presetWind.json'), presetWindcontent, (error) => {
  console.log(error);
})
