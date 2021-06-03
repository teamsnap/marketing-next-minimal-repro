import fs from 'fs-extra';

const fileExists = async (path) => !!(await fs.stat(path).catch((e) => false));

export default fileExists;
