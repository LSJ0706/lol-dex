import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#033944",
        secondary: "#d2a943",
        champion_name: "#f0e6d2",
        champion_alias: "#fea443",
        item_price: "#d3cbba",
        item_title: "#ede4d0",
        item_explanation_title: "#ae9563",
        item_explanation_content: "#d3cbba",
        item_ability: "#068fa2",
      },
    },
  },
  plugins: [],
};
export default config;
