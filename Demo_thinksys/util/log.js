﻿var winston = require('winston');


winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp: true });
winston.add(winston.transports.File, { filename: './logFolder/test.log' });
module.exports = winston;