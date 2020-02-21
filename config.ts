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
    specs: ['./specs/login/LoginTest.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 80000
    },
    params: {
        baseUrl: 'https://staged.ainosoft.com/Sources/',
        emailUser: 'bhagyashri@ainosoft.com',
        passUser: 'shri2019'
    },

};