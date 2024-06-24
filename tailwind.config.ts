import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      grey: {
        '500': '#86A2A5',
        '900': '#2A4144',
      },
      green: {
        '200': '#E0F1E8',
        '600': '#0C7D69',
      },
      red: '#D73C3C',
      white: '#FFF'
    },
    fontSize: {
      heading: ['32px', {
        fontWeight: 700,
        letterSpacing: '-1px',
        lineHeight: '100%'
      }],
      'body-md': ['1.125rem', '150%'], //18px
      'body-sm': ['1rem', '150%'], //16px
    },
    spacing: {
      1600: '128px',
      500: '40px',
      400: '32px',
      300: '24px',
      200: '16px',
      150: '12px',
      100: '8px',
    }
  },
  plugins: [],
};
export default config;
