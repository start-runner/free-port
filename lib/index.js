const defaultOptions = {
    host: '127.0.0.1',
    minPort: 49152,
    maxPort: 65535
};

export default (userOptions, callback) => (/* input */) => {
    return function freePort(log) {
        const portscanner = require('portscanner');
        const pify = require('pify');

        const findAPortNotInUse = pify(portscanner.findAPortNotInUse);
        const { minPort, maxPort, host } = {
            ...defaultOptions,
            ...userOptions
        };

        return findAPortNotInUse(minPort, maxPort, host).then((port) => {
            log(String(port));

            return callback(port);
        });
    };
};
