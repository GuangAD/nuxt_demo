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

const { presetUno } = require('unocss')
const fs = require('fs')
const path = require('path')
const presetUnocontent = JSON.stringify(presetUno())
// console.log(JSON.stringify(presetUno()));
console.log(path.join(__dirname, '../presetUno.json'));
fs.writeFileSync(path.join(__dirname, './presetUno.json'), presetUnocontent, (error) => {
  console.log(error);
})
// fs.writeFileSync('123.txt', presetUnocontent, (error) => {
//   console.log(error);
// })
// fs.writeFileSync