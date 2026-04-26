import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        slateui: "#607086",
        paper: "#f8fafc",
        line: "#d7dee8",
        civic: "#1d4f74",
        leaf: "#3a7d58",
        amberSoft: "#f3c95f"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(16, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
