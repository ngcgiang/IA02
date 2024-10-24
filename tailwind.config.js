/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Quét tất cả các file HTML và JS trong thư mục src
    "./*.html"              // Quét các file HTML nằm ở gốc dự án
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#E8EFF0', // Đặt tên cho màu tùy chỉnh
      },
    },
  },
  plugins: [],
}