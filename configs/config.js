var config = {
    VERSION: 1.0,
    BUILD: 1,
    URL: 'http://127.0.0.1',
    API_PATH: '/api',
    PORT: process.env.PORT || 3000,
    ENV: process.env.ENV || 'development',
    LANG : 'EN',
    database: 'mongodb://localhost:27017/ebms',

    getHTTPUrl : function(){
        return  this.URL + ':'+ this.PORT;
    }
};

module.exports = config;