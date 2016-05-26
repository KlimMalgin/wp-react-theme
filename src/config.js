
let config = {
    server: 'https://beatspot.me/',
    files: {
        img: {
            thumbnail: 'sites/default/files/styles/thumbnail/public/',
            medium: 'sites/default/files/styles/medium/public/',
            large: 'sites/default/files/styles/large/public/'
        }
    },
    api: {
        url: 'vapi/v1/',
        endpoints: {
            genre: 'genre',
            user: 'userentry'
        }
    }
};

const endpoints = config.api.endpoints;

export default config;
export { endpoints };
