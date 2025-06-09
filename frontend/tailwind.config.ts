// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideRight: 'slideRight 0.8s ease-out forwards',
      },
    },
  },
};
