module.exports = {
    content: [
      './app/**/*.{html,js,jsx}',
      './src/**/*.{html,js,jsx}',
    ],
    mode: 'jit',
    theme: {
      extend: {
        colors: {
          'primary-black': '#121212',
          'secondary-white': '#ffffff',
          'primary-color': '#6F00FF',
          'primary-color-tint': '#8E37FF',
        },
        transitionTimingFunction: {
          'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
        },
      },
    },
    plugins: [],
  };
  