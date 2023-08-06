// uno.config.ts
import presetRemToPx from "@unocss/preset-rem-to-px";
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  shortcuts: [
    // you could still have object style
    {
      btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    },
    // dynamic shortcuts
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ],
  theme: {
    colors: {
      'veryCool': '#0000ff', // class="text-very-cool"
      'brand': {
        'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
      }
    },
    breakpoints: {
      sm: '320px',
      md: '640px',
    },
  },
  variants: [
    // hover:
    (matcher) => {
      if (!matcher.startsWith('hover:'))
        return matcher
      return {
        // slice `hover:` prefix and passed to the next variants and rules
        matcher: matcher.slice(6),
        selector: s => `${s}:hover`,
      }
    }
  ],
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
    // presetRemToPx(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    [/^p-(\d+)$/, (match) => ({ padding: `${match[1] / 4}rem` })],
    [/^text-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
  ],
});
