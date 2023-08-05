// import {
//   defineConfig,
//   presetAttributify,
//   presetIcons,
//   presetTypography,
//   presetUno,
//   presetWebFonts,
//   transformerDirectives,
//   transformerVariantGroup,
// } from "unocss";

const { presetAttributify } = require('unocss')
const fs = require('fs')
const path = require('path')
const presetAttributifycontent = JSON.stringify(presetAttributify())
// console.log(JSON.stringify(presetUno()));
console.log(path.join(__dirname, './presetAttributify.json'));
fs.writeFileSync(path.join(__dirname, './presetAttributify.json'), presetAttributifycontent, (error) => {
  console.log(error);
})
// fs.writeFileSync('123.txt', presetUnocontent, (error) => {
//   console.log(error);
// })
// fs.writeFileSync