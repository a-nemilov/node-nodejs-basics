import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
    const wStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);
    // not working
    console.log('not working');

};

write();
