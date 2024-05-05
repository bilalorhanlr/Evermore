/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind'in tarayacağı dosyaları belirt
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#243c5a', // Özel bir renk tanımı
      },
    },
  },
  plugins: [],
}
