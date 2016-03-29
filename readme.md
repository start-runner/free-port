# start-free-port

[![npm](https://img.shields.io/npm/v/start-free-port.svg?style=flat-square)](https://www.npmjs.com/package/start-free-port)
[![linux build](https://img.shields.io/travis/start-runner/free-port.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/free-port)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/free-port.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/free-port)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/free-port.svg?style=flat-square)](https://codecov.io/github/start-runner/free-port)
[![deps](https://img.shields.io/gemnasium/start-runner/free-port.svg?style=flat-square)](https://gemnasium.com/start-runner/free-port)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-46bc99.svg?style=flat-square)](https://gitter.im/start-runner/start)

Task for [Start](https://github.com/start-runner/start) to find a free port from range.

## Install

```
npm i -S start-free-port
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import freePort from 'start-free-port';
import * as webpack from 'start-webpack';

const minPort = 3000;
const maxPort = 3099;

export function dev() {
    return start(reporter())(
        freePort({ minPort, maxPort }, port => start(
            webpack.dev(require('./conf/webpack.dev'), port)
        ))
    );
}
```

## Arguments

`freePort(options, callback)`

* `options`
  * `minPort` – `49152` by default
  * `maxPort` – `65535` by default
  * `host` – `'127.0.0.1'` by default
* `callback` – callback function which will be called with found port
