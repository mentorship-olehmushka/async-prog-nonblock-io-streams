const events = require('events');
const generateFile = require('./generateFile');
const transformFile = require('./transformFile');

const eventEmitter = new events.EventEmitter();
const eventName = process.argv[2];
const args = process.argv.slice(3);

eventEmitter.addListener('generate', () => generateFile(...args));
eventEmitter.addListener('transform', () => transformFile(...args));
eventEmitter.addListener('error', error => console.log('Ooops: \n', error));

eventEmitter.emit(eventName);
