import * as winston from 'winston';

export default class Logger {
    public logger: winston.Logger;

    private OPTIONS: winston.LoggerOptions = {
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [

        ],
    };

    constructor () {
        this.configWinston(this.OPTIONS);
    }

    private configWinston (options: winston.LoggerOptions): void {
        this.logger = winston.createLogger(options);
        if (process.env.NODE_ENV !== 'production') {
            this.logger.add(new winston.transports.Console({
                format: winston.format.simple(),
            }));
        }
    }

}