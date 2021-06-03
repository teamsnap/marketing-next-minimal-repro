import glob from 'glob';
import fs from 'fs-extra';
import { join } from 'path';
import matter from 'gray-matter';
import markdownToHtml from './markdownToHtml';
import yaml from 'js-yaml';

const cwd = process.cwd();

const pagesDirectory = join(cwd, '_pages');

export async function getPageBySlug(slug) {
  const readSlug =
    glob.sync(`${pagesDirectory}/${slug.join('/')}/*.md`, {})[0] || '';
  const templateArray = readSlug.replace(`${pagesDirectory}/`, '').split('/');

  if (!readSlug) {
    return null;
  }

  const fileContents = fs.readFileSync(readSlug, 'utf8');
  const { data, content } = matter(fileContents);

  const page = {
    slug,
    content: await markdownToHtml(content || null),
    template: templateArray[templateArray.length - 1].split('.')[0],
    frontmatter: data,
  };

  return page;
}

export async function getAllPages() {
  const allMdFiles = glob.sync(`${pagesDirectory}/**/*.md`, {
    ignore: `${pagesDirectory}/**/_*.md`,
  });

  const pages = allMdFiles.map((slug) => {
    if (!RegExp('.md').test(slug)) return null;

    const realSlug = slug.replace(`${pagesDirectory}/`, '').split('.')[0];
    const templateArray = slug.replace(`${pagesDirectory}/`, '').split('/');
    const fileContents = fs.readFileSync(slug, 'utf8');
    const { data, content } = matter(fileContents);

    const items = {
      slug: realSlug.split('/').slice(0, -1),
      template: templateArray[templateArray.length - 1].split('.')[0],
      content,
      frontmatter: data,
    };

    return items;
  });

  return pages;
}

export async function getAllPagesFromFolder(folder) {
  const allMdFiles = glob.sync(`${pagesDirectory}/${folder}/**/*.md`, {
    ignore: `${pagesDirectory}/${folder}/_*.md`, // ignore the top level markdown file
  });

  const pages = allMdFiles.map((slug) => {
    if (!RegExp('.md').test(slug)) return null;

    const realSlug = slug
      .replace(`${pagesDirectory}/${folder}/`, '')
      .split('.')[0];
    const templateArray = slug
      .replace(`${pagesDirectory}/${folder}/`, '')
      .split('/');
    const fileContents = fs.readFileSync(slug, 'utf8');
    const { data, content } = matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
      },
    });

    const items = {
      slug: realSlug.split('/').slice(0, -1),
      template: templateArray[templateArray.length - 1].split('.')[0],
      content,
      frontmatter: data,
    };

    return items;
  });

  return pages;
}

export async function getAllPagesFromFolderWithIgnore(folder, ignore) {
  const allMdFiles = glob.sync(`${pagesDirectory}/${folder}/**/*.md`, {
    ignore: [
      `${pagesDirectory}/${folder}/*.md`,
      `${pagesDirectory}/${folder}/${ignore}.md`,
    ],
  });

  const pages = allMdFiles.map((slug) => {
    if (!RegExp('.md').test(slug)) return null;

    const realSlug = slug
      .replace(`${pagesDirectory}/${folder}/`, '')
      .split('.')[0];
    const templateArray = slug
      .replace(`${pagesDirectory}/${folder}/`, '')
      .split('/');
    const fileContents = fs.readFileSync(slug, 'utf8');
    const { data, content } = matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
      },
    });

    const items = {
      slug: realSlug.split('/').slice(0, -1),
      template: templateArray[templateArray.length - 1].split('.')[0],
      content,
      frontmatter: data,
    };

    return items;
  });

  return pages;
}

const getPageBySlugAsync = async ({ url }, getSummary) =>
  getPageBySlug(url.split('/').slice(1), getSummary);

export const getCollection = async (collection, getSummary) =>
  Promise.all(
    collection.map((collectionItem) =>
      getPageBySlugAsync(collectionItem, getSummary)
    )
  );
