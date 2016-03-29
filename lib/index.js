const defaultOptions = {
    host: '127.0.0.1',
    minPort: 49152,
    maxPort: 65535
};

export default (userOptions, callback) => (/* input */) => {
    return function freePort(log) {
        const portscanner = require('portscanner');
        const options = {
            ...defaultOptions,
            ...userOptions
        };

        return new Promise(function(resolve, reject) {
            portscanner.findAPortNotInUse(
                options.minPort,
                options.maxPort,
                options.host,
                (error, port) => {
                    if (error) {
                        return reject(error);
                    }

                    log(String(port));
                    callback(port);
                }
            );
        });
    };
};
