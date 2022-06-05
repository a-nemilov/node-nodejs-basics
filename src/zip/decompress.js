import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const decompress = async () => {
    const gUnzip = zlib.createUnzip();

    const input  = fs.createReadStream(`${__dirname}/files/archive.gz`);
    const output = fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`);

    input.pipe(gUnzip).pipe(output);
};

decompress();
