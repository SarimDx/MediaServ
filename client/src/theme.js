// color design tokens export
export const colorTokens = {
  // grey: {
  //   50: '#F8FAFC',
  //   100: '#F1F5F9',
  //   200: '#E2E8F0',
  //   300: '#CBD5E1',
  //   400: '#94A3B8',
  //   500: '#64748B',
  //   600: '#475569',
  //   700: '#334155',
  //   800: '#1E293B',
  //   900: '#0F172A',
  // },
  // // main
  // grey: {
  //   0: "#FFFFFF",
  //   10: "#F6F6F6",
  //   50: "#F0F0F0",
  //   100: "#E0E0E0",
  //   200: "#C2C2C2",
  //   300: "#A3A3A3",
  //   400: "#858585",
  //   500: "#666666",
  //   600: "#4D4D4D",
  //   700: "#333333",
  //   800: "#1A1A1A",
  //   900: "#0A0A0A",
  //   1000: "#000000",
  // },
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    1000: "#000000",
  },
  
  primary: {
    50: '#E5F7FF',
    100: '#B9E5FF',
    200: '#8AD2FF',
    300: '#5DBEFF',
    400: '#30A9FF',
    500: '#0095FF',
    600: '#0074CC',
    700: '#005399',
    800: '#003366',
    900: '#001A33',
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[600],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
