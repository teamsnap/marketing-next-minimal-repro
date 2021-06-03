import * as React from 'react';
import Head from 'next/head';

export type FontsProps = {
  /**
   * URL to your Google Fonts StyleSheet.
   *
   * Be sure to end with `&display=swap` for best performance.
   */
  hrefs: string[];
};

let hydrated = false;

const Fonts: React.FC<FontsProps> = ({ hrefs }) => {
  const hydratedRef = React.useRef(false);
  const [, rerender] = React.useState(false);

  React.useEffect(() => {
    if (!hydratedRef.current) {
      hydrated = true;
      hydratedRef.current = true;
      rerender(true);
    }
  }, []);

  return (
    <Head>
      {hrefs.map((href, index) => (
        <React.Fragment key={index}>
          <link rel="preload" as="style" href={href} />
          <link
            href={href}
            rel="stylesheet"
            media={!hydrated ? 'print' : 'all'}
          />
        </React.Fragment>
      ))}
    </Head>
  );
};

export default Fonts;
