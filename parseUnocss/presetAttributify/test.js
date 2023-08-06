const { presetAttributify } = require('unocss')
const fs = require('fs')
const path = require('path')
const presetAttributifycontent = JSON.stringify(presetAttributify())
fs.writeFileSync(path.join(__dirname, './presetAttributify.json'), presetAttributifycontent, (error) => {
  console.log(error);
})
