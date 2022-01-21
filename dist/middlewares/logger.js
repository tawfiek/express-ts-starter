"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, next) {
    console.log(`Request: ${req.method} ${req.path}`);
}
exports.default = logger;
//# sourceMappingURL=logger.js.map