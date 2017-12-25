/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const Express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

config.entry.unshift('webpack-hot-middleware/client?reload=true');

const app = new Express();
const port = 9000;
const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, { publicPath: '/assets/' }));

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'src/index.html')));

app.listen(port);
