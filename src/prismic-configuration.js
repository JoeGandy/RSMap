export default {
    apiEndpoint: 'https://rsclues.cdn.prismic.io/api/v2',
    accessToken: '',

    // -- Links resolution rules
    linkResolver(doc) {
        //if (doc.type === 'page') return `/page/${doc.uid}`;
        return '/';
    },
};