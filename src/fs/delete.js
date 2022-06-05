import fs from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    try {
        await fs.rm(`${__dirname}/files/fileToRemove.txt`)
    } catch (error) {
        if(error.code === 'ENOENT' && error.syscall === 'stat') {
            throw new Error('FS operation failed');
        }
    }
};

remove();
