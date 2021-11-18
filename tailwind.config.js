module.exports = {
    purge: [
        './assets/**/*.js',
        './public/index.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: '#d5d5d5',
            },
            fontFamily: {
                'roboto': ['Roboto', 'ui-sans-serif', 'serif'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
