import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      neutral: [
        50,
        ...[...Array(9).keys()].map(key => (key + 1) * 100),
        950,
      ].reduce(
        (obj, shade) => ({
          ...obj,
          [shade]: `rgb(var(--color-neutral-${shade}) / <alpha-value>)`,
        }),
        {}
      ),

      background: 'rgb(var(--color-background))',
      foreground: 'rgb(var(--color-foreground))',
      card: 'rgb(var(--color-card))',
    },
  },
  plugins: [],
};
export default config;
