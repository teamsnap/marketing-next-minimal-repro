import fs from 'fs-extra';
import dotenv from 'dotenv-flow';
import process from 'process';
import path from 'path';
dotenv.config();

const cwd = process.cwd();
const baseFolder = path.resolve(cwd, '.next/cache');

await fs.ensureDir(baseFolder);
console.log('prebuild fs:', await fs.readdir(baseFolder));

const expectedCacheTags = ['all', 'tags', 'categories', 'posts', 'authors', 'hybrid'];
const nextCacheFolder = `${baseFolder}/next-blog`;

// Load form env, if nothing return empty array
const cacheTags = process?.env?.CLEAR_BLOG_CACHE.split(',') || [];

// Helper functions
const fileExists = async (path) => !!(await fs.stat(path).catch((e) => false));
const deleteFile = async (path, logMessage) => {
  await fs.rm(path, { recursive: true });
  console.log(`${logMessage}`);
}
const deleteAll = async () => {
  await fs.rm(nextCacheFolder, { recursive: true });
  console.log('Deleted everything, yo ⚡️');
}

// Main functions
// Double check we have a cache folder,
// if not create

const createFs = async () => {
  const folderExists = await fileExists(nextCacheFolder);
  if (folderExists) return;
  await fs.ensureDir(nextCacheFolder);
  console.log('rebuilt fs:', await fs.readdir(baseFolder));
}

// Run cache invalidation check
const checkCacheInvalidation = async () => {
  if (!cacheTags.some(r => expectedCacheTags.includes(r))) {
    const folderExists = await fileExists(nextCacheFolder);
    if (folderExists) {
      console.log('Cache is intact');
      return;
    } else {
      console.log('Cache is not intact');
      await createFs();
      return;
    }
  } else {
      cacheTags.map(async (cacheTag) => {
        console.log(cacheTag);

        switch(cacheTag) {
          case 'all':
            // delete everything
            const folderExists = await fileExists(nextCacheFolder);
            folderExists ? await deleteAll() : null;
            await createFs();
            break;
          case 'hybrid':
              // edge case for a fresh build using the hybrid approach
              await createFs();
              const readJsonFiles = await fs.readdir(nextCacheFolder);
              const filenameTest = [
                'getAllPostsForHome',
                'getPostCatergoryCount',
                'getPagePaths',
                'getPostByPage',
                'getPostsAndMorePostByCategory',
                'getAllAuthorPosts',
              ];

              readJsonFiles.forEach((file) => {
                const filePath = `${nextCacheFolder}/${file}`;
                filenameTest.forEach((string)=> file.includes(string) ? deleteFile(filePath, `Deleted: ${file}`) : null);
              });
              break;
            default: 
              // if not deleteing everything, check if folder exists
              // then delete the corresponding folder
              // if no folder, do nothing
              console.log('Nothing to delete');
              break;
        }
      });
  }
};

checkCacheInvalidation();