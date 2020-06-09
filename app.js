exports.__esModule = true;
exports.default = void 0;
var express = require('express');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
var compression = require('compression');

const port = 3100;
const app = express();
app.use(compression({ threshold: 1 }));
app.use(express.static('dist', { maxAge: 89000 }));
app.use(awsServerlessExpressMiddleware.eventContext());

app.listen(port, () => {
    console.log('server is listening on port :', port);
});
exports.default = app;