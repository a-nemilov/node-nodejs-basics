import { readdir, copyFile, mkdir } from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async () => {
    const folderPath = path.join(__dirname, 'files');
    const newFolderPath = path.join(__dirname, 'files_copy');
    try {
        const files = await readdir(folderPath);
        
        await mkdir(newFolderPath, '0777');
        const promises = [];
        for (const file of files) {
            promises.push(copyFile(`${folderPath}/${file}`, `${newFolderPath}/${file}`));
        }
        Promise.all(promises);
    } catch (err) {
        if (err.code === 'EEXIST' && err.syscall === 'mkdir') {
            throw new Error('FS operation failed')
        }

    }
};

copy();
