/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondaryBgColor: "#AEBBDB",
        tertiaryBgColor: "#EEE8F5",
        primaryBgColor: "#8698C4",
        quaternary: "#3D52A2",
        blackPrimaryText: "#232A47",
        darkModeSecondaryBgColor: "#1E293B", // A dark but not completely black background for secondary areas
        darkModeQuaternary: "#3D52A2", // A slightly darker background for primary areas
        darkModePrimaryBgColor: "#111827", // A slightly darker background for primary areas
        darkModeTertiaryBgColor: "#334155", // A muted, darker color for accents or tertiary sections
        darkModeBlackPrimaryText: "#F1F5F9", // Light text color for high contrast on dark backgrounds
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      screens: {
        sm: "320px",
      },
    },
  },
  plugins: [],
};
