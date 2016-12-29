# start-free-port

[![npm](https://img.shields.io/npm/v/start-free-port.svg?style=flat-square)](https://www.npmjs.com/package/start-free-port)
[![linux build](https://img.shields.io/travis/start-runner/free-port/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/free-port)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/free-port/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/free-port)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/free-port/master.svg?style=flat-square)](https://codecov.io/github/start-runner/free-port)
[![deps](https://img.shields.io/gemnasium/start-runner/free-port.svg?style=flat-square)](https://gemnasium.com/start-runner/free-port)

Task for [Start](https://github.com/start-runner/start) to find a free port from specified range.

## Install

```sh
npm install --save-dev start-free-port
# or
yarn add --dev start-free-port
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import freePort from 'start-free-port';
import * as webpack from 'start-webpack';

const minPort = 3000;
const maxPort = 3099;

export const dev = () => start(reporter())(
  freePort({ minPort, maxPort }, port => start(
    webpack.dev(require('./conf/webpack.dev'), port)
  ))
);
```

## Arguments

`freePort(options, callback)`

* `options`
  * `minPort` – `49152` by default
  * `maxPort` – `65535` by default
  * `host` – `'127.0.0.1'` by default
* `callback` – callback function which will be called with found port

[List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers):

> The range 49152–65535 contains dynamic or private ports that cannot be registered with IANA. This range is used for private, or customized services or temporary purposes and for automatic allocation of ephemeral ports.
