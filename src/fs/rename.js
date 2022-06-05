import fs from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
    try {
        await fs.rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`)
    } catch (error) {
        if(error.code === 'ENOENT' && error.syscall === 'rename') {
            throw new Error('FS operation failed')
        }
        console.log(error);
        
    }
};

rename();
