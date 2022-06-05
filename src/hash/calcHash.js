import fs from 'fs/promises';
import path  from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    const {
        createHash
      } = await import('crypto');
    const fileBuffer = await fs.readFile(`${__dirname}/files/fileToCalculateHashFor.txt`)
    const hash = createHash('sha256');
    hash.update(fileBuffer);
    const hex = hash.digest('hex');
    console.log(hex);
};

calculateHash();
