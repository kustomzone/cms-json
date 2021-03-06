#!/usr/bin/env node
var express = require('express');
var program = require('commander');
var process = require('process');
var fs = require('fs');
var colors = require('colors');

var server = require('./index');

program
	.version('0.0.1')
	.option('-m, --model [file]', 'CMS Model file (json). Default is ./default/model.json')
	.option('-d, --data [file]', 'CMS Data file (json). Default is ./default/data.json')
	.option('-p, --port [port]', 'Server port. Default is 3000')
	.option('-e, --env [env]', 'One of production or development. Development will use the webpack server')
	.parse(process.argv);

var port = program.port || 3000;
var modelFile = program.model || 'default/model.json';
var dataFile = program.data || 'default/data.json';
var env = program.env || 'production';

server.run({ modelFile: modelFile, dataFile: dataFile, port: port, env: env});
