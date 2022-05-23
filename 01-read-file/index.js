const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'text.txt');
const stream = new fs.ReadStream(filePath, { encoding: 'utf-8' });

stream.on('error', (err) => { throw err; });

stream.on('readable', () => {
  console.log(stream.read());
});

stream.on('end', () => {
  console.log('Чтение файла завершено.');
});
