import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';

export default function SEO({ metadata, title, disableTitleSuffix = false }) {
  const router = useRouter();

  return (
    <Head>
      {metadata?.title ? (
        <title>
          {metadata.title}
          {!disableTitleSuffix && ' | TeamSnap'}
        </title>
      ) : (
        <title>
          {title} {!disableTitleSuffix && ' | TeamSnap'}
        </title>
      )}
      {metadata?.description && (
        <>
          <meta property="twitter:description" content={metadata.description} />
          <meta property="og:description" content={metadata.description} />
        </>
      )}
      {metadata &&
        Object.entries(metadata).map((meta, index) => {
          if (meta[0] === 'title')
            return <React.Fragment key={index}></React.Fragment>;
          if (meta[0] === 'schema')
            return <React.Fragment key={index}></React.Fragment>;
          if (meta[0] === 'canonical')
            return <React.Fragment key={index}></React.Fragment>;
          if (meta[1] === '')
            return <React.Fragment key={index}></React.Fragment>;
          return (
            <meta
              key={index}
              name={(meta[0] as string) || null}
              content={(meta[1] as string) || null}
            />
          );
        })}
      {metadata?.canonical ? (
        <link
          rel="canonical"
          href={`https://www.teamsnap.com${metadata.canonical}`}
        />
      ) : (
        <link
          rel="canonical"
          href={`https://www.teamsnap.com${router.asPath}`}
        />
      )}
      {!metadata?.['og:title'] && (
        <meta
          property="og:title"
          content={`${metadata?.title ? metadata.title : title} ${
            !disableTitleSuffix && '| TeamSnap'
          }`}
        />
      )}
      <meta
        property="og:url"
        content={`https://www.teamsnap.com${router.asPath}`}
      />
      {!metadata?.['og:image'] && (
        <meta
          property="og:image"
          content="https://www.teamsnap.com/images/teamsnap-open-graph.jpg"
        />
      )}
      <meta property="og:site_name" content="TeamSnap" />
      <meta property="og:locale" content="en_US" />
      {!metadata?.['twitter:title'] && (
        <meta
          property="twitter:title"
          content={`${metadata?.title ? metadata.title : title} ${
            !disableTitleSuffix && '| TeamSnap'
          }`}
        />
      )}
      {!metadata?.['twitter:image'] && (
        <meta
          property="twitter:image"
          content={
            metadata?.['og:image']
              ? metadata['og:image']
              : 'https://www.teamsnap.com/images/teamsnap-open-graph.jpg'
          }
        />
      )}
      <meta property="twitter:site" content="@teamsnap" />
      <meta property="twitter:creator" content="@teamsnap" />
      {metadata?.schema ? (
        <script type="application/ld+json">{metadata.schema}</script>
      ) : (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "Website",
                "name": "TeamSnap",
                "url" : "https://www.teamsnap.com/",
                "Image": "https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1398359819/ebi2jfu0t7embtj1i35w.png",
                "About" : "The #1 sports team management app makes communication and organization a breeze. Clubs and leagues love us too. Try it now.",
                "sameAs": [
                    "https://www.facebook.com/TeamSnap/",
                    "https://twitter.com/teamsnap",
                    "https://www.linkedin.com/company/teamsnap/",
                    "https://play.google.com/store/apps/details?id=com.teamsnap.teamsnap&hl=en_US&gl=US",
                    "https://apps.apple.com/us/app/teamsnap/id393048976",
                    "https://www.youtube.com/channel/UCjjNveTAAHkE64PgEMxy0zQ",
                    "https://www.crunchbase.com/organization/teamsnap",
                    "https://www.glassdoor.com/Overview/Working-at-TeamSnap-EI_IE836552.11,19.htm",
                    "https://www.getapp.com/industries-software/a/teamsnap/reviews/",
                    "https://www.capterra.com/p/123208/TeamSnap/"  
                ]
                }`,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context" : "http://schema.org",
                "@type" : "MobileApplication",
                "url" : "https://www.teamsnap.com/",
                "image" : "https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1398359819/ebi2jfu0t7embtj1i35w.png",
                "name" : "TeamSnap",
              "sameAs": [
                  "https://www.facebook.com/TeamSnap/",
                  "https://twitter.com/teamsnap",
                  "https://www.linkedin.com/company/teamsnap/",
                  "https://play.google.com/store/apps/details?id=com.teamsnap.teamsnap&hl=en_US&gl=US",
                  "https://apps.apple.com/us/app/teamsnap/id393048976",
                  "https://www.youtube.com/channel/UCjjNveTAAHkE64PgEMxy0zQ",
                  "https://www.crunchbase.com/organization/teamsnap",
                  "https://www.glassdoor.com/Overview/Working-at-TeamSnap-EI_IE836552.11,19.htm",
                  "https://www.getapp.com/industries-software/a/teamsnap/reviews/",
                  "https://www.capterra.com/p/123208/TeamSnap/"  
                ],
              "ApplicationCategory" : "Sports Team Management",
              "AggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "35900"
                },
              "OperatingSystem" : [
                "IOS",
                "Android",
                "Chrome",
                "Firefox",
                "Safari",
                "Microsoft Edge"
              ],
              "description" : "The #1 sports team management app makes communication and organization a breeze. Clubs and leagues love us too. Try it now."
              }`,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "TeamSnap",
                "brand" : "TeamSnap",
                "url" : "https://www.teamsnap.com/",
                "logo": "https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1398359819/ebi2jfu0t7embtj1i35w.png",
              "AggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "35900"
                },
                "sameAs": [
                  "https://www.facebook.com/TeamSnap/",
                  "https://twitter.com/teamsnap",
                  "https://www.linkedin.com/company/teamsnap/",
                  "https://play.google.com/store/apps/details?id=com.teamsnap.teamsnap&hl=en_US&gl=US",
                  "https://apps.apple.com/us/app/teamsnap/id393048976",
                  "https://www.youtube.com/channel/UCjjNveTAAHkE64PgEMxy0zQ",
                  "https://www.crunchbase.com/organization/teamsnap",
                  "https://www.glassdoor.com/Overview/Working-at-TeamSnap-EI_IE836552.11,19.htm",
                  "https://www.getapp.com/industries-software/a/teamsnap/reviews/",
                  "https://www.capterra.com/p/123208/TeamSnap/"  
                ]
              }`,
            }}
          />
        </>
      )}
    </Head>
  );
}
