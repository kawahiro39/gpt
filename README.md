# gpt

This repository provides a simple script to extract the text layer from a PDF using `pdfjs-dist`.

## Usage

1. Install dependencies:
   ```bash
   npm install pdfjs-dist
   ```
2. Run the script:
   ```bash
   node extract_text.js path/to/file.pdf > output.txt
   ```
   The text content of the PDF will be printed to stdout and can be redirected to a file.
