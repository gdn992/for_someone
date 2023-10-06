import fs from 'fs';

const DB_FILE = 'src/db/db.json';

export const readDb = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));

export const writeDb = (data: any) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};