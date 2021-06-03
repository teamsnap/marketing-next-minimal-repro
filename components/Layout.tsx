import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import { useYoutubeLazy } from '../hooks/useYoutubeLazy';
import SEO from './SEO';
import Fonts from '../components/Fonts';

const initializeDataAPI = (constructor, collection) => {
  for (let i = 0, l = collection.length; i < l; i++) {
    new constructor(collection[i]);
  }
};

const initCallback = (supports) => {
  if (!supports) return;
  for (let i = 0, l = supports.length; i < l; i++) {
    initializeDataAPI(
      supports[i][1],
      document.querySelectorAll(supports[i][2])
    );
  }
};

export default function Layout({ children, frontmatter }) {
  // initialize data API for Bootstrap Native
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) return;
    initCallback(window?.BSN?.supports);
    useYoutubeLazy(true);
  }, [children]);

  // these will be for empty
  const title = '';
  const metadata = [];

  return (
    <>
      <Fonts
        hrefs={[
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap',
          'https://use.typekit.net/hki4mzk.css',
        ]}
      />
      <SEO
        metadata={frontmatter?.metadata ? frontmatter.metadata : metadata}
        title={frontmatter?.title ? frontmatter.title : title}
      />
      <Header
        nav={frontmatter?.nav}
        showBanner={false}
        shouldHide={frontmatter?.disableNav}
      />
      <div
        id="page"
        className={`${frontmatter?.class ? frontmatter.class : ''} ${
          frontmatter?.disableNav !== true ? 'Navigation__page' : 'null'
        } ${frontmatter?.nav?.transparent ? 'Navigation--transparent' : ''}
        `}
      >
        {children}
      </div>
      <Footer shouldHide={false} />
    </>
  );
}
