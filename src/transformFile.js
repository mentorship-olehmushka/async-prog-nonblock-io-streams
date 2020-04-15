const fs = require('fs');
const { Transform } = require('stream');

function transform(chunk, encoding, callback) {
  const string = chunk.toString();
  const transformSchema = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
  }
  let transformedChunk = '';

  for (let i = 0; i < string.length; i++) {
    const symbol = string.charAt(i);
    transformedChunk += transformSchema[symbol] || symbol;
  }

  callback(false, transformedChunk);
}

const transformStream = new Transform({transform});

function transformFile(name) {
  const pathToFile = `${name}.txt`;
  const pathToNewFile = `${name}_transformed.txt`;

  const readableStream = fs.createReadStream(pathToFile);
  const writableStream = fs.createWriteStream(pathToNewFile);

  readableStream
    .pipe(transformStream)
    .pipe(writableStream);

  readableStream.on('error', error => {
    console.log(error);
  });

  readableStream.on('end', () => {
    writableStream.end();
  });
}

module.exports = transformFile;
