import { writeFile } from 'fs/promises'
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
    const content = 'I am fresh and young';
    const errorMes = 'FS operation failed';
    const filePath = path.join(__dirname, '/files/fresh.txt');

    try {
        await writeFile(filePath, content, { flag: "wx" })
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error(errorMes)
        }
    }
};

create();
