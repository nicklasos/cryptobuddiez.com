module.exports = {
    purge: [
        './assets/**/*.js',
        './public/index.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: '#fff',
                'black-background': '#1F1F1F',
                'gray-text': '#888888',
                'lightgray-text': '#565656',
                'lightgray-text-header': '#C5C5C5',
                'design-yellow': '#FFDE9D',
				'design-text-yellow': '#FFE7A1',
				'design-text-pink': '#FFB8CA',
            },
            fontFamily: {
                'roboto': ['Roboto', 'ui-sans-serif', 'serif'],
                'roboto-mono': ['Roboto Mono', 'ui-sans-serif', 'serif'],
                'Poppins': ['Poppins', 'ui-sans-serif', 'serif'],
            },
            spacing: {
                15: '3.75rem',
                22: '5.5rem',
                98: '25rem',
                150: '36rem',
                200: '40rem',
            },
            fontSize: {
                '4.5xl': ['2.75rem', { lineHeight: '2.5rem' }],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
