'use strict'
const app = require('./app').default;
const awsServerlessExpress = require('aws-serverless-express');

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
    console.log('EVENT', event);
    awsServerlessExpress.proxy(server, event, context);
}