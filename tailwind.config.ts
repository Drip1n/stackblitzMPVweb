import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2055a8',
      },
      // === PRIDANÁ SEKCIA PRE ROZŠÍRENIE MEDZIER ===
      // Týmto sme Tailwindu povedali, aby poznal aj tieto nové hodnoty.
      spacing: {
        '104': '26rem', // ~416px
        '112': '28rem', // ~448px
        '128': '32rem', // ~512px
        '144': '36rem', // ~576px
        '160': '40rem', // ~640px
      },

      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
export default config
