/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '128': '350px',
      },
      fontSize: {
        'large': '9.25rem'
      },
      backgroundColor: theme => ({
        'october': '#DCDADC',
        'interview': '#991B1B',
       }),
      fontFamily: {
          'eraser' : ['Eraser', 'sans-serif'],  
      }
  }
  },
  plugins: []
};