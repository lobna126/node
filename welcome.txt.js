
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.log('Error writing to file:', err);
  } else {
    console.log('File "welcome.txt" created successfully!');
  }
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err);
  } else {
    console.log('File contents:', data);
  }
});
