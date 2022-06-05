import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const rStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);
    rStream.on('open', () => rStream.pipe(process.stdout));
};

read();
