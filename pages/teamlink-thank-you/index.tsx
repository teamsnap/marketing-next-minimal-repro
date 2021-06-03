import Layout from '../../components/Layout';

export default function TeamlinkThankYou() {
  return (
    <Layout
      frontmatter={{
        title: 'Thank you!',
        robots: 'noindex, nofollow',
        metadata: {
          description: 'Thanks for submitting a form',
        },
      }}
    >
      <section className="pb30" id="thankYou">
        <div className="container">
          <div className="row">
            <section className="col-md-9 mb10">
              <h1 className="thin mb10 js-thank-you-heading">Thank You!</h1>
              <p className="js-thank-you-content h5 mb30">
                Check out what TeamSnap Registration can do for you.
              </p>
              <div className="youtube-wrapper">
                <div
                  className="youtube--lazy js-thank-you-video"
                  data-embed="7Z1xUHBCHRM"
                >
                  <div className="play-button"></div>
                </div>
              </div>
            </section>
            <aside className="col-md-3 mt20" id="sidebar">
              <div className="center-text hidden-xs hodden-sm">
                <a href="/blog/general-sports/national-girls-women-in-sports-day-stories">
                  <img
                    alt="Sign Up For Free"
                    className="img-thumbnail img-cta mb15 img-responsive"
                    src="/images/TS_NationalWomensSportsDay_235x276_A.jpg"
                  />
                </a>
              </div>
            </aside>
            <div className="clear"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
