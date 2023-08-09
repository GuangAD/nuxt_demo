const fs = require('fs')
const path = require('path')

  ; (async () => {
    const { presetDaisy: preset } = await import('unocss-preset-daisy')
    console.log(preset);
    const presetcontent = JSON.stringify(preset({
      styled: false,
      themes: ['light', 'dark'],
    }))
    fs.writeFileSync(path.join(__dirname, './presetcontent.json'), presetcontent, (error) => {
      console.log(error);
    })
  })()