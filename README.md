<img src="http://bitcore.io/css/images/module-message.png" alt="lipcore message" height="35">
# Lipcoin Message Verification and Signing for Lipcore

lipcore-message adds support for verifying and signing lipcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main lipcore repo](https://github.com/lipcoin/lipcore) for more information.

## Getting Started

```sh
npm install lipcore-message
```

```sh
bower install lipcore-message
```

To sign a message:

```javascript
var lipcore = require('lipcore-lib');
var Message = require('lipcore-message');

var privateKey = lipcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/lipcoin/lipcore/blob/master/CONTRIBUTING.md) on the main lipcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/lipcoin/lipcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Lipcoin Core Developers

