import fs from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    try {
         const data = await fs.readFile(`${__dirname}/files/fileToRead1.txt`, {encoding: 'utf8'})

         console.log(data);
    } catch (error) {
        if(error.code === 'ENOENT' && error.syscall === 'open') {
            throw new Error('FS operation failed');
        }
    }
};

read();
