exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    chromeOnly: true,
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'platform': 'ANY',
        'version': 'ANY',
        'chromeOptions': {
            // Get rid of --ignore-certificate yellow warning
            args: ['--no-sandbox', '--test-type=browser'],
            // Set download path and avoid prompting for download even though
            // this is already the default on Chrome but for completeness
            prefs: {
                'download': {
                    'use proxy': true,
                    'prompt_for_download': false,
                    'default_directory': '/home/test/downloads/',
                }
            }
        }
    },
    framework: 'jasmine',
    specs: ['./specs/Login/Login.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
    params: {
        baseUrl: 'http://10.10.10.102:8080/Sources/',
        // baseUrl:'http://213.133.103.90:8091/Sources_candidate/',
        emailUser: 'bhagyashri@ainosoft.com',
        passUser: 'shri2019'
    },
};
