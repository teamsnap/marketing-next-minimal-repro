import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../components/Layout';
import { getPageBySlug, getAllPages } from '../lib/pageApi';

export default function Page({ page }) {
  return (
    <Layout frontmatter={page.frontmatter}>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getPageBySlug(params.slug);

  if (page === null || !page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPages();

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
};
