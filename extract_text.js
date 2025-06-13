const fs = require('fs');
const pdfParse = require('pdf-parse');

if (process.argv.length < 3) {
  console.error('Usage: node extract_text.js <pdf-file>');
  process.exit(1);
}

const dataBuffer = fs.readFileSync(process.argv[2]);

pdfParse(dataBuffer).then(function(data) {
  console.log(data.text);
}).catch(function(err) {
  console.error('Error: ' + err);
});
