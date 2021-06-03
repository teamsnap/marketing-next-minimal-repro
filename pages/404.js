import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout frontmatter={{ title: 'Whoops! Something happened!' }}>
      <div className="errorPage row flush">
        <div className="col-md-5 pl90-md pr90-md pl45 pr45 pt30 pb30">
          <h1 className="ms--8">Whoa! We missed that shot.</h1>
          <p className="ms--2__sans mb10">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable. Error code 404.
          </p>
          <p className="ms--base__sans mt10">You may also find these useful.</p>
          <ul className="List--noBullets mt10">
            <li className="mb10">
              <a className="Link" href="https://helpme.teamsnap.com/">
                TeamSnap Help Center
              </a>
            </li>
            <li className="mb10">
              <Link href="/blog">
                <a className="Link">TeamSnap Blog</a>
              </Link>
            </li>
            <li className="mb10">
              <Link href="/why">
                <a className="Link">Why TeamSnap</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-7">
          <img
            loading="lazy"
            src="/images/404.webp"
            alt="Check out our blog"
            className="center-block lazy loading"
            data-was-processed="true"
          />
        </div>
      </div>
    </Layout>
  );
}
