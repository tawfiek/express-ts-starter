"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cors = require("cors");
const express = require("express");
const routes_1 = require("./routes");
const logger_1 = require("./middlewares/logger");
const error_handler_1 = require("./middlewares/error-handler");
const app = express();
const port = 3000;
app.use(cors());
app.use(logger_1.default);
app.use((0, body_parser_1.json)({ limit: '50mb' }));
app.use((0, body_parser_1.urlencoded)({
    extended: false,
}));
app.use(routes_1.default);
app.use(error_handler_1.default);
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
exports.default = app;
//# sourceMappingURL=index..js.map