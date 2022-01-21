"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
class Logger {
    constructor() {
        this.OPTIONS = {
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [],
        };
        this.configWinston(this.OPTIONS);
    }
    configWinston(options) {
        this.logger = winston.createLogger(options);
        if (process.env.NODE_ENV !== 'production') {
            this.logger.add(new winston.transports.Console({
                format: winston.format.simple(),
            }));
        }
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map