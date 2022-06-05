import fs from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import { dirname, resolve } from 'path';
// // or
// import path from 'path';
// const somePath = path.resolve('...');

export const list = async () => {
    try {
       const listOfFiles = await fs.readdir(`${__dirname}/files`);
       console.log(listOfFiles);
    } catch (error) {
        if(error.code === 'ENOENT' && error.syscall === 'scandir') {
            throw new Error('FS operation failed');
        }
    }
};

list();
