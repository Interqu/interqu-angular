/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '400': '400%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      animation: {
        "fade-in": "fadeIn ease-in-out 2s",
        "bg-slide": "bgSlide ease 30s infinite"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        bgSlide: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100%' },
        }
      }
    },
  },
  plugins: [],
}

