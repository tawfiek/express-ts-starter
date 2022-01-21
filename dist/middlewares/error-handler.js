"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res, next) {
    console.error(err);
    return res.status(500).json({ message: 'Something went wrong!' });
}
exports.default = errorHandler;
//# sourceMappingURL=error-handler.js.map