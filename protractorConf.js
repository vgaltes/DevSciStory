exports.config = {
    seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
    capabilities: {
        browserName: 'phantomjs',
        version: '',
        platform: 'ANY',
        'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs'
    }
};