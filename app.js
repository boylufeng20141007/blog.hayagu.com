'use strict';

let koa = require('koa'),
	app = koa();

const port = 8900;

app.use(function *(){
	this.body = 'Hello World';
});

app.listen(port);