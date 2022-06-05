import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async () => {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const output = fs.createWriteStream(`${__dirname}/files/archive.gz`);

    input.pipe(gzip).pipe(output);
};

compress();
