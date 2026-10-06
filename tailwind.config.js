export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Jua: round, friendly Korean display font. Falls back to the system Korean font.
        kr: ['Jua', '"Noto Sans KR"', '"Apple SD Gothic Neo"', '"Malgun Gothic"', 'sans-serif'],
        sans: ['Nunito', '"Noto Sans KR"', '"Apple SD Gothic Neo"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
