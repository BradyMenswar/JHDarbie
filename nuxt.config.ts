

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],

    nitro: {
        preset: 'aws-lambda'
    },
    ssr: false
    

});
