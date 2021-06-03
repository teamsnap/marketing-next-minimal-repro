import Link from 'next/link';
import Logo from './svgIcons/Logo';

const Footer = ({ shouldHide = false }) => (
  <footer
    className={`Footer bg--dark-blue pt60-md pb60-md pt45 pb45${
      shouldHide ? ' hidden' : ''
    }`}
    id="footer"
  >
    <div className="container">
      <div className="Footer--row">
        <div className="Footer--col">
          <h5 className="mb20">Products</h5>
          <h6>
            <Link href="/leagues-and-clubs">
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Clubs & Leagues Main Footer Click"
                data-ga-label="Clubs & Leagues Main Footer"
              >
                Club or League Administrators
              </a>
            </Link>
          </h6>
          <ul className="List--noBullets">
            <li>
              <Link href="/leagues-and-clubs/features">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Features Footer Click"
                  data-ga-label="Clubs & Leagues Features Footer"
                >
                  Features
                </a>
              </Link>
            </li>
            <li>
              <Link href="/pricing/organizations">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Pricing Footer Click"
                  data-ga-label="Clubs & Leagues Pricing Footer"
                >
                  Pricing
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tournaments">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Tournaments Footer Click"
                  data-ga-label="Clubs & Leagues Tournaments Footer"
                >
                  Tournaments
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs/sport-league-faqs">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues FAQs Footer Click"
                  data-ga-label="Clubs & Leagues FAQs Footer"
                >
                  FAQs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs#league-demo-only">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Contact Sales Footer Click"
                  data-ga-label="Clubs & Leagues Contact Sales Footer"
                >
                  Contact Sales
                </a>
              </Link>
            </li>
          </ul>
          <h6>
            <Link href="/teams">
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Teams Main Footer Click"
                data-ga-label="Teams Main Footer"
              >
                Coaches or Team Managers
              </a>
            </Link>
          </h6>
          <ul className="List--noBullets">
            <li>
              <Link href="/teams/features">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Main Footer Click"
                  data-ga-label="Teams Main Footer"
                >
                  Features
                </a>
              </Link>
            </li>
            <li>
              <Link href="/pricing/teams">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Pricing Footer Click"
                  data-ga-label="Teams Pricing Footer"
                >
                  Pricing
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tournaments">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Tournaments Footer Click"
                  data-ga-label="Teams Tournaments Footer"
                >
                  Tournaments
                </a>
              </Link>
            </li>
            <li>
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Teams Get Started Footer Click"
                data-ga-label="Teams Get Started Footer"
                href="https://go.teamsnap.com/signup/missing_email"
                target="_blank"
                rel="noreferrer"
              >
                Get Started
              </a>
            </li>
          </ul>
          <h6>
            <Link href="/teams">
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Parents & Athletes Main Footer Click"
                data-ga-label="Parents & Athletes Main Footer"
              >
                Parents or Athletes
              </a>
            </Link>
          </h6>
          <ul className="List--noBullets">
            <li>
              <Link href="/teams/features">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Parents & Athletes Features Footer Click"
                  data-ga-label="Parents & Athletes Features Footer"
                >
                  Features
                </a>
              </Link>
            </li>
            <li>
              <Link href="/pricing/teams">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Parents & Athletes Pricing Footer Click"
                  data-ga-label="Parents & Athletes Pricing Footer"
                >
                  Pricing
                </a>
              </Link>
            </li>
            <li>
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Parents & Athletes Find My Team Footer Click"
                data-ga-label="Parents & Athletes Find My Team Footer"
                href="https://go.teamsnap.com/login/find_my_team"
                target="_blank"
                rel="noreferrer"
              >
                Find My Team
              </a>
            </li>
            <li>
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Parents & Athletes Get Started Footer Click"
                data-ga-label="Parents & Athletes Main Footer"
                href="https://go.teamsnap.com/signup/missing_email"
                target="_blank"
                rel="noreferrer"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div className="Footer--col">
          <h5 className="mb20">Sports</h5>
          <h6>
            <Link href="/leagues-and-clubs/sports">
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Clubs & Leagues Sports Main Footer Click"
                data-ga-label="Clubs & Leagues Sports Main Footer"
              >
                Clubs &amp; Leagues
              </a>
            </Link>
          </h6>
          <ul className="List--noBullets">
            <li>
              <Link href="/leagues-and-clubs/sports/baseball">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Baseball Footer Click"
                  data-ga-label="Clubs & Leagues Baseball Footer"
                >
                  Baseball
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs/sports/basketball">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Basketball Footer Click"
                  data-ga-label="Clubs & Leagues Basketball Footer"
                >
                  Basketball
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs/sports/football">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Football Footer Click"
                  data-ga-label="Clubs & Leagues Football Footer"
                >
                  Football
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs/sports/ice-hockey">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Ice Hockey Footer Click"
                  data-ga-label="Clubs & Leagues Ice Hockey Footer"
                >
                  Ice Hockey
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs/sports/lacrosse">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Lacrosse Footer Click"
                  data-ga-label="Clubs & Leagues Lacrosse Footer"
                >
                  Lacrosse
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs/sports/soccer">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Soccer Footer Click"
                  data-ga-label="Clubs & Leagues Soccer Footer"
                >
                  Soccer
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs/sports/softball">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Softball Footer Click"
                  data-ga-label="Clubs & Leagues Softball Footer"
                >
                  Softball
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs/sports/volleyball">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Clubs & Leagues Volleyball Footer Click"
                  data-ga-label="Clubs & Leagues Volleyball Footer"
                >
                  Volleyball
                </a>
              </Link>
            </li>
          </ul>
          <h6>
            <Link href="/teams/sports">
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Teams Sports Main Footer Click"
                data-ga-label="Teams Sports Main Footer"
              >
                Teams
              </a>
            </Link>
          </h6>
          <ul className="List--noBullets">
            <li>
              <Link href="/teams/sports/baseball">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Sports Baseball Footer Click"
                  data-ga-label="Teams Baseball Footer"
                >
                  Baseball
                </a>
              </Link>
            </li>
            <li>
              <Link href="/teams/sports/basketball">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Sports Basketball Footer Click"
                  data-ga-label="Teams Basketball Footer"
                >
                  Basketball
                </a>
              </Link>
            </li>
            <li>
              <Link href="/teams/sports/football">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Sports Football Footer Click"
                  data-ga-label="Teams Football Footer"
                >
                  Football
                </a>
              </Link>
            </li>
            <li>
              <Link href="/teams/sports/ice-hockey">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Sports Ice Hockey Footer Click"
                  data-ga-label="Teams Ice Hockey Footer"
                >
                  Ice Hockey
                </a>
              </Link>
            </li>
            <li>
              <Link href="/teams/sports/soccer">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Sports Soccer Footer Click"
                  data-ga-label="Teams Soccer Footer"
                >
                  Soccer
                </a>
              </Link>
            </li>
            <li>
              <Link href="/teams/sports/softball">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Sports Softball Footer Click"
                  data-ga-label="Teams Softball Footer"
                >
                  Softball
                </a>
              </Link>
            </li>
            <li>
              <Link href="/teams/sports">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Teams Sports More Footer Click"
                  data-ga-label="Teams More Footer"
                >
                  +100s more
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Footer--col">
          <h5 className="mb20">Resources</h5>
          <ul className="List--noBullets">
            <li>
              <Link href="/resources/return-to-sports">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Resources Return to Sports Footer Click"
                  data-ga-label="Resources Return to Sports Footer"
                >
                  Return To Play <span className="New--badge mr5">New!</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Resources Blog Footer Click"
                  data-ga-label="Resources Blog Footer"
                >
                  The Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/leagues-and-clubs-resource-library">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Resources Resource Library Footer Click"
                  data-ga-label="Resources Resource Library Footer"
                >
                  Clubs &amp; Leagues Resource Library
                </a>
              </Link>
            </li>
            <li>
              <Link href="/community/skills-drills">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Resources Skills Drills Footer Click"
                  data-ga-label="Resources Skills Drills Footer"
                >
                  Skills &amp; Drills
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company/press-releases">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Resources Press Releases Footer Click"
                  data-ga-label="Resources Press Releases Footer"
                >
                  Press Releases
                </a>
              </Link>
            </li>
            <li>
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Resources Help Center Footer Click"
                data-ga-label="Resources Help Center Footer"
                href="https://helpme.teamsnap.com/"
                target="_blank"
                rel="noreferrer"
              >
                TeamSnap Help Center
              </a>
            </li>
          </ul>
        </div>
        <div className="Footer--col">
          <h5 className="mb20">Company</h5>
          <ul className="List--noBullets">
            <li>
              <Link href="/company">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Company About Footer Click"
                  data-ga-label="Company About Footer"
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company/careers">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Company Careers Footer Click"
                  data-ga-label="Company Careers Footer"
                >
                  Careers
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company/advertising">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Company For Brands Footer Click"
                  data-ga-label="Company For Brands Footer"
                >
                  For Brands
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company/labrat">
                <a
                  className="ga-pushEvent"
                  data-ga-event="marketing-nav-footer"
                  data-ga-action="Company Lab Rats Footer Click"
                  data-ga-label="Company Lab Rats Footer"
                >
                  Lab Rats Program
                </a>
              </Link>
            </li>
            <li>
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Company API Footer Click"
                data-ga-label="Company API Footer"
                href="/documentation"
                rel="noreferrer"
              >
                TeamSnap API
              </a>
            </li>
            <li>
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Company TS Store Footer Click"
                data-ga-label="Company TS Store Footer"
                href="http://www.teamsnapshop.com/"
                target="_blank"
                rel="noreferrer"
              >
                Official TeamSnap Store
              </a>
            </li>
            <li>
              <a
                className="ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Company Disclosure Policy Footer Click"
                data-ga-label="Company Disclosure Policy Footer"
                href="https://hackerone.com/teamsnap"
              >
                Responsible Disclosure Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer--row mt60">
        <ul className="List--noBullets List--flex Footer--appLogos">
          <li>
            <a
              className="ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="App Logos Apple Footer Click"
              data-ga-label="App Logos Apple Footer"
              href="https://apps.apple.com/app/apple-store/id393048976?pt=414871&ct=TSfooter&mt=8"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                src="/images/app-store.svg"
                className="lazy"
                alt="Youth sports team and sports org app Apple App Store Logo"
              />
            </a>
          </li>
          <li>
            <a
              className="ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="App Logos Google Footer Click"
              data-ga-label="App Logos Google Footer"
              href="https://play.google.com/store/apps/details?id=com.teamsnap.teamsnap&referrer=utm_source%3Dwebsite%26utm_medium%3DTSfooter%26utm_term%3Dfooter%26utm_content%3Dbutton%26utm_campaign%3DTSfooter"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                src="/images/google-play.svg"
                className="lazy"
                alt="Youth sports team and sports org app Google Play Store Logo"
              />
            </a>
          </li>
        </ul>
        <ul className="List--noBullets List--flex">
          <li>
            <a
              className="pardotTrackClick Footer--socialItem ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="Social Facebook Footer Click"
              data-ga-label="Social Facebook Footer"
              href="https://www.facebook.com/TeamSnap"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="Icon"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`,
                    }}
                  />
                </defs>
                <title>social-media-facebook</title>
                <path
                  className="Icon"
                  d="M18.13,7.75H13.87V5.84a1,1,0,0,1,1-1.1h3v-4H13.54c-3.93,0-4.67,3-4.67,4.86V7.75h-3v4h3v11.5h5V11.75h3.85Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="pardotTrackClick Footer--socialItem ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="Social Twitter Footer Click"
              data-ga-label="Social Twitter Footer"
              href="https://twitter.com/teamsnap"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="Icon"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`,
                    }}
                  />
                </defs>
                <title>social-media-twitter</title>
                <path
                  className="cls-1"
                  d="M23.18,6.71l-2.1-.9,1.1-2.4-2.56.85a4.47,4.47,0,0,0-3-1.2,4.51,4.51,0,0,0-4.5,4.5v1c-3.54.73-6.63-1.2-9.5-4.5q-.75,4,1.5,6L.83,9.56a4.55,4.55,0,0,0,4.25,4l-2.75,1c1,2,2.82,2.31,5.25,2.5a11.52,11.52,0,0,1-6.75,2c12.76,5.67,20.25-2.66,20.25-10V8.23Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="pardotTrackClick Footer--socialItem ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="Social Pinterest Footer Click"
              data-ga-label="Social Pinterest Footer"
              href="https://www.pinterest.com/teamsnaphq"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="Icon"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`,
                    }}
                  />
                </defs>
                <title>social-pinterest</title>
                <path
                  className="cls-1"
                  d="M6.6,10.27a4,4,0,0,1-.16-1.15,5.46,5.46,0,0,1,5.68-5.52c3.1,0,4.8,1.89,4.8,4.42,0,3.32-1.47,6.13-3.66,6.13-1.21,0-1.63-.92-1.35-2.14.42-1.75,2.71-4.66,0-5.26S8.78,9.59,8.73,11.15l-1.66,7a14.51,14.51,0,0,0,0,4.91.17.17,0,0,0,.31.08A13.85,13.85,0,0,0,9.67,19c.16-.58.75-2.8.75-2.8a3.7,3.7,0,0,0,3.16,1.61c4.15,0,7.13-4.54,7.13-9.61,0-3.83-3.25-7.4-8.18-7.4-6.14,0-9.24,4.4-9.24,8.07a5.36,5.36,0,0,0,2,4.57Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="pardotTrackClick Footer--socialItem ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="Social Instagram Footer Click"
              data-ga-label="Social Instagram Footer"
              href="https://www.instagram.com/teamsnapapp"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="Icon"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`,
                    }}
                  />
                </defs>
                <title>social-instagram</title>
                <rect
                  className="cls-1"
                  x="0.74"
                  y="0.75"
                  width="22.5"
                  height="22.5"
                  rx="6"
                  ry="6"
                />
                <circle className="cls-1" cx="11.99" cy="12" r="5" />
                <path className="cls-1" d="M19.34,5.15a.5.5,0,1,1-1,0" />
                <path className="cls-1" d="M18.34,5.15a.5.5,0,0,1,1,0" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="pardotTrackClick Footer--socialItem ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="Social YouTube Footer Click"
              data-ga-label="Social YouTube Footer"
              href="https://www.youtube.com/user/TeamsnapHQ"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="Icon"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`,
                    }}
                  />
                </defs>
                <title>social-video-youtube</title>
                <rect
                  className="cls-1"
                  x="1"
                  y="12.25"
                  width="22"
                  height="11"
                  rx="4"
                  ry="4"
                />
                <polyline className="cls-1" points="4 0.75 7 4.75 7 9.25" />
                <polyline className="cls-1" points="10 0.75 7 4.75 7 9.25" />
                <path
                  className="cls-1"
                  d="M13,7.75a1.5,1.5,0,0,1-3,0v-3a1.5,1.5,0,1,1,3,0Z"
                />
                <path className="cls-1" d="M19,3.25v4a2,2,0,0,1-4,0v-4" />
                <line className="cls-1" x1="19" y1="3.25" x2="19" y2="9.25" />
                <line className="cls-1" x1="11" y1="17" x2="11" y2="20.25" />
                <line
                  className="cls-1"
                  x1="3.98"
                  y1="15.25"
                  x2="8.02"
                  y2="15.25"
                />
                <line className="cls-1" x1="6" y1="15.25" x2="6" y2="20.23" />
                <line
                  className="cls-1"
                  x1="13.5"
                  y1="14.25"
                  x2="13.5"
                  y2="20.23"
                />
                <path
                  className="cls-1"
                  d="M15.5,19.25a1,1,0,0,1-2,0V18a1,1,0,0,1,2,0Z"
                />
                <path className="cls-1" d="M9,17v2.25a1,1,0,0,0,2,0V17" />
                <path className="cls-1" d="M18.83,16.75a1,1,0,0,1,1,1h-2" />
                <path
                  className="cls-1"
                  d="M19.83,19.86a1.14,1.14,0,0,1-2-.74V17.75a1,1,0,0,1,1-1"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="pardotTrackClick Footer--socialItem ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="Social LinkedIn Footer Click"
              data-ga-label="Social LinkedIn Footer"
              href="https://www.linkedin.com/company/teamsnap"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="Icon"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`,
                    }}
                  />
                </defs>
                <title>professional-network-linkedin</title>
                <path
                  className="cls-1"
                  d="M5.67,22.63H.81V8.7H5.67Zm10.09-9.39a2.14,2.14,0,0,0-2.14,2.14v7.25H8.51V8.7h5.11v1.59a6.76,6.76,0,0,1,4.28-1.6c3.17,0,5.37,2.35,5.37,6.81v7.13H17.9V15.38A2.14,2.14,0,0,0,15.76,13.23Zm-10-9.36a2.5,2.5,0,1,1-2.5-2.5A2.5,2.5,0,0,1,5.74,3.88Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <hr className="mb30" />
      <div>
        <Link href="/">
          <a
            className="Footer--logo ga-pushEvent"
            data-ga-event="marketing-nav-footer"
            data-ga-action="Logo Click"
            data-ga-label="Logo Footer"
          >
            <Logo />
          </a>
        </Link>
      </div>
      <div className="Footer--row mt20">
        <p className="ms---1__sans">
          Copyright &copy; 2005&ndash;{new Date().getFullYear()} TeamSnap, Inc.
        </p>
        <ul className="List--noBullets List--flex">
          <li className="ms---1__sans">
            <a
              className="Link ga-pushEvent"
              data-ga-event="marketing-nav-footer"
              data-ga-action="Bottom Sitemap Footer Click"
              data-ga-label="Bottom Sitemap Footer"
              href="/sitemap.xml"
            >
              Sitemap
            </a>
          </li>
          <li className="ms---1__sans">
            <Link href="/terms">
              <a
                className="Link ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Bottom Terms Footer Click"
                data-ga-label="Bottom Terms Footer"
              >
                Terms
              </a>
            </Link>
          </li>
          <li className="ms---1__sans">
            <Link href="/privacy-policy">
              <a
                className="Link ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Bottom Privacy Footer Click"
                data-ga-label="Bottom Privacy Footer"
              >
                Privacy
              </a>
            </Link>
          </li>
          <li className="ms---1__sans">
            <Link href="/privacy-policy#notice-to-california">
              <a
                className="Link ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Bottom CA Privacy Footer Click"
                data-ga-label="Bottom CA Privacy Footer"
              >
                California Privacy
              </a>
            </Link>
          </li>
          <li className="ms---1__sans">
            <Link href="/do-not-sell-my-information">
              <a
                className="Link ga-pushEvent"
                data-ga-event="marketing-nav-footer"
                data-ga-action="Bottom Do not sell Footer Click"
                data-ga-label="Bottom Do not sell Footer"
              >
                Do not sell my personal information &ndash; CA resident only
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
