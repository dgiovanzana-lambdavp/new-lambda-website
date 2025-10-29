/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional financial industry color palette
        'primary': 'hsl(220, 70%, 18%)', // Deep Navy Blue - main brand color
        'primary-foreground': '#FFFFFF', // Crisp White text on primary
        'secondary': 'hsl(220, 15%, 96%)', // Soft Blue-Gray - secondary backgrounds
        'secondary-foreground': 'hsl(220, 40%, 15%)', // Dark Blue-Gray text on secondary
        'accent': 'hsl(210, 100%, 42%)', // Professional Blue - accent for CTAs
        'accent-foreground': '#FFFFFF', // Crisp White text on accent
        'background': '#FFFFFF', // Crisp White background
        'foreground': 'hsl(220, 40%, 15%)', // Dark Blue-Gray text
        'card': '#FFFFFF', // Crisp White cards
        'card-foreground': 'hsl(220, 40%, 15%)', // Dark Blue-Gray text on cards
        'border': 'hsl(220, 15%, 90%)', // Light blue-gray borders
        'muted': 'hsl(220, 25%, 45%)', // Medium blue-gray for muted text
        'muted-foreground': 'hsl(220, 15%, 70%)', // Light blue-gray for subtle text
        'brand-red': 'hsl(210, 100%, 42%)', // Professional Blue for buttons/accents
        // Legacy aliases for backward compatibility
        'tactical-black': 'hsl(220, 40%, 15%)',
        'tactical-gray': 'hsl(220, 25%, 45%)',
        'electric-blue': 'hsl(210, 100%, 42%)',
        'bright-green': 'hsl(210, 100%, 42%)',
        'light-gray': 'hsl(220, 15%, 96%)',
        'navy-blue': 'hsl(220, 70%, 18%)',
        'teal-blue': 'hsl(220, 25%, 45%)',
        'light-blue': 'hsl(210, 100%, 42%)',
        'off-white': '#FFFFFF',
        'dark-navy': 'hsl(220, 40%, 15%)',
        'steel-gray': 'hsl(220, 15%, 90%)',
        'text-primary': 'hsl(220, 40%, 15%)',
        'text-secondary': 'hsl(220, 25%, 45%)',
        'text-muted': 'hsl(220, 15%, 70%)',
        'card-bg': '#FFFFFF',
        'accent-blue': 'hsl(210, 100%, 42%)',
        'accent-gray': 'hsl(220, 15%, 96%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'parallax': 'parallax 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
        'tactical-noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'turbulence\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}

