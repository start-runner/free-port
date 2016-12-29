const defaultOptions = {
  host: '127.0.0.1',
  minPort: 49152,
  maxPort: 65535
};

export default (userOptions, callback) => (/* input */) => {
  return function freePort(log) {
    const { findAPortNotInUse } = require('portscanner');

    const {
      minPort,
      maxPort,
      host
    } = {
      ...defaultOptions,
      ...userOptions
    };

    return findAPortNotInUse(minPort, maxPort, host).then((port) => {
      log(String(port));

      return callback(port);
    });
  };
};
