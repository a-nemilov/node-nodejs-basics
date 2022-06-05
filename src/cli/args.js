export const parseArgs = () => {
    const result = [];
    for (let i = 0; i < process.argv.length;) {
        if (process.argv[i].startsWith('--')) {
            result.push(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`);
            i++
        }
        i++;
    }
    console.log(result.join(', '));
};

parseArgs();
