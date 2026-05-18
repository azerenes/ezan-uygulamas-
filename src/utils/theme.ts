export interface ThemeColors {
  bg: string;
  surface: string;
  surfaceAlt: string;
  fg: string;
  muted: string;
  border: string;
  accent: string;
  accentWarm: string;
  accentGreen: string;
  success: string;
  warning: string;
  danger: string;
  cardShadow: string;
  fontArabic: string;
  overlay: string;
}

export const lightColors: ThemeColors = {
  bg: "#f4f5f7",
  surface: "#ffffff",
  surfaceAlt: "#eef5f2",
  fg: "#1a1d26",
  muted: "#7a7f92",
  border: "#e2e5eb",
  accent: "#2ea885",
  accentWarm: "#d49738",
  accentGreen: "#3a8b5e",
  success: "#4aae6b",
  warning: "#d49738",
  danger: "#c0393f",
  cardShadow: "0 1px 3px rgba(0,0,0,0.06)",
  fontArabic: "serif",
  overlay: "rgba(0,0,0,0.5)",
};

export const darkColors: ThemeColors = {
  bg: "#0f1117",
  surface: "#1a1d26",
  surfaceAlt: "#232730",
  fg: "#e6e8ec",
  muted: "#8a8f9e",
  border: "#2d313c",
  accent: "#3bc99f",
  accentWarm: "#e8a840",
  accentGreen: "#4cbf78",
  success: "#5ccf7b",
  warning: "#e8a840",
  danger: "#e55a60",
  cardShadow: "0 1px 3px rgba(0,0,0,0.3)",
  fontArabic: "serif",
  overlay: "rgba(0,0,0,0.7)",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 18,
};
