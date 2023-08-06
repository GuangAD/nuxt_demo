const { presetUno } = require('unocss')
const fs = require('fs')
const path = require('path')
const presetUnocontent = JSON.stringify(presetUno())
fs.writeFileSync(path.join(__dirname, './presetUno.json'), presetUnocontent, (error) => {
  console.log(error);
})
