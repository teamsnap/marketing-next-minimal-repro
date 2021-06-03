import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import Logo from './svgIcons/Logo';
import ChevronDown from './svgIcons/ChevronDown';
import ChevronRight from './svgIcons/ChevronRight';

const Header = ({ nav, showBanner = false, shouldHide = false }) => {
  const header = useRef<HTMLDivElement>(null);
  const [shouldOpenMenu, setShouldOpenMenu] = useState(false);
  const [isNavTransparent, setIsNavTransparent] = useState(true);
  const router = useRouter();
  let currentSlug = router?.asPath || '';
  let activeSlug = currentSlug;

  const activeRouting = {
    products: [
      '/leagues-and-clubs',
      '/teams',
      '/tournaments',
      '/leagues-and-clubs/sports',
      '/leagues-and-clubs/features',
      '/teams/sports',
      '/teams/features',
      '/tournaments/tournament-schedule-maker',
      '/tournaments/tournament-registration',
    ],
    pricing: ['/pricing/organizations', '/pricing/teams'],
    why: ['/why'],
    company: ['/company', '/company/advertising', '/company/careers'],
    resources: [
      '/resources/return-to-sports',
      '/leagues-and-clubs-resource-library',
      '/blog',
      '/documentation',
    ],
  };

  // handle menu
  useEffect(() => {
    const body = document.body;
    shouldOpenMenu ? body.classList.add('open') : body.classList.remove('open');
  }, [shouldOpenMenu]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const headerHeight = header?.current?.offsetHeight || 0;
    window?.scrollY < headerHeight
      ? setIsNavTransparent(true)
      : setIsNavTransparent(false);
  };

  return (
    <header
      ref={header}
      className={`Header${
        nav?.transparent && isNavTransparent && !shouldOpenMenu
          ? ' Header--transparent'
          : ''
      }${nav?.variant === 'dark' ? ' Header--dark' : ''}${
        shouldHide ? ' hidden' : ''
      }${shouldOpenMenu ? ' open' : ''}`}
    >
      <div className="Navigation__Container container">
        <div className="Navigation__Logo">
          <Link href="/">
            <a className="Navigation__LogoLink">
              <Logo />
            </a>
          </Link>
        </div>
        <div className={`Navigation__Main ${shouldOpenMenu ? 'open' : ''}`}>
          <nav aria-labelledby="mainNavigation">
            <div className="ButtonGroup hiddenDesktop SignUpBlock">
              <a
                className="Button Button--blue ga-login ga-pushEvent"
                href="https://go.teamsnap.com/"
                data-ga-event="marketing-nav-login"
              >
                Log in
              </a>
              <a
                className="Button ga-pushEvent"
                href="https://go.teamsnap.com/login/find_my_team"
                data-ga-event="marketing-nav-find-my-team"
              >
                Find My Team{' '}
              </a>
            </div>
            <ul className="Navigation__List" id="mainNavigation" role="menu">
              <li data-hover="products" role="menuitem">
                <span
                  className={`Navigation__List-link Navigation__List-link--icon ${
                    activeRouting.products.includes(currentSlug) ? 'active' : ''
                  }`}
                >
                  Products <ChevronDown classes="Icon Icon--down" />
                  <nav
                    role="navigation"
                    data-secondary-nav="products"
                    aria-labelledby="productsNavigation"
                  >
                    <ul
                      className="NavigationSecondary__list"
                      id="productsNavigation"
                      role="menu"
                    >
                      <li
                        className={`NavigationSecondary__item ${
                          activeSlug === activeRouting.products[3] ||
                          activeSlug === activeRouting.products[0] ||
                          activeSlug === activeRouting.products[4]
                            ? 'active'
                            : ''
                        }`}
                        role="menuitem"
                      >
                        <div className="NavigationSecondary__item-content">
                          <div>
                            <Link href="/leagues-and-clubs">
                              <a
                                className="ga-leagues ga-pushEvent"
                                data-ga-event="marketing-nav-leagues"
                              >
                                <h5 className="Navigation__heading">
                                  <img
                                    loading="lazy"
                                    className="NavigationSecondary__branding lazy"
                                    src="/images/cl-badge.png"
                                    alt="Organizations logo"
                                  />
                                  Clubs &amp; Leagues{' '}
                                  <ChevronRight classes="Icon" />
                                </h5>
                              </a>
                            </Link>
                            <Link href="/leagues-and-clubs">
                              <a
                                className="ga-leagues ga-pushEvent"
                                data-ga-event="marketing-nav-leagues"
                              >
                                <p className="Navigation__paragraph">
                                  For clubs, leagues &amp; associations with
                                  multiple teams
                                </p>
                              </a>
                            </Link>
                            <ul className="NavigationSecondary__contentList">
                              <li
                                className="ga-c-l-sports ga-pushEvent"
                                data-ga-event="marketing-nav-sub-c-l-sports"
                              >
                                <Link href="/leagues-and-clubs/sports">
                                  <a>
                                    Sports <ChevronRight classes="Icon" />
                                  </a>
                                </Link>
                              </li>
                              <li
                                className="lastLink ga-c-l-features ga-pushEvent"
                                data-ga-event="marketing-nav-sub-c-l-features"
                              >
                                <Link href="/leagues-and-clubs/features">
                                  <a>
                                    Features
                                    <ChevronRight classes="Icon" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`NavigationSecondary__item ${
                          activeSlug === activeRouting.products[1] ||
                          activeSlug === activeRouting.products[5] ||
                          activeSlug === activeRouting.products[6]
                            ? 'active'
                            : ''
                        }`}
                        role="menuitem"
                      >
                        <div className="NavigationSecondary__item-content">
                          <div>
                            <Link href="/teams">
                              <a
                                className="ga-teams ga-pushEvent"
                                data-ga-event="marketing-nav-teams"
                              >
                                <h5 className="Navigation__heading">
                                  <img
                                    loading="lazy"
                                    className="NavigationSecondary__branding lazy"
                                    src="/images/teamsnap-badge.png"
                                    alt="Teams logo"
                                  />
                                  Teams <ChevronRight classes="Icon" />
                                </h5>
                              </a>
                            </Link>
                            <Link href="/teams">
                              <a
                                className="ga-teams ga-pushEvent"
                                data-ga-event="marketing-nav-teams"
                              >
                                <p className="Navigation__paragraph">
                                  The easiest way to manage a team
                                </p>
                              </a>
                            </Link>
                            <ul className="NavigationSecondary__contentList">
                              <li
                                className="ga-teams-sports ga-pushEvent"
                                data-ga-event="marketing-nav-sub-teams-sports"
                              >
                                <Link href="/teams/sports">
                                  <a>
                                    Sports <ChevronRight classes="Icon" />
                                  </a>
                                </Link>
                              </li>
                              <li
                                className="lastLink ga-teams-features ga-pushEvent"
                                data-ga-event="marketing-nav-sub-teams-features"
                              >
                                <Link href="/teams/features">
                                  <a>
                                    Features <ChevronRight classes="Icon" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`NavigationSecondary__item ${
                          activeSlug === activeRouting.products[2] ||
                          activeSlug === activeRouting.products[7] ||
                          activeSlug === activeRouting.products[8]
                            ? 'active'
                            : ''
                        }`}
                        role="menuitem"
                      >
                        <div className="NavigationSecondary__item-content">
                          <div>
                            <Link href="/tournaments">
                              <a
                                className="ga-tournaments ga-pushEvent"
                                data-ga-event="marketing-nav-tournaments"
                              >
                                <h5 className="Navigation__heading">
                                  <img
                                    loading="lazy"
                                    className="NavigationSecondary__branding lazy"
                                    src="/images/tournaments-badge.png"
                                    alt="Tournaments logo"
                                  />
                                  Tournaments <ChevronRight classes="Icon" />
                                </h5>
                              </a>
                            </Link>
                            <Link href="/tournaments">
                              <a
                                className="ga-tournaments ga-pushEvent"
                                data-ga-event="marketing-nav-tournaments"
                              >
                                <p className="Navigation__paragraph">
                                  Build and manage your events in a snap
                                </p>
                              </a>
                            </Link>
                            <ul className="NavigationSecondary__contentList">
                              <li
                                className="ga-tournaments-schedule-maker ga-pushEvent"
                                data-ga-event="marketing-nav-sub-tournaments-schedule-maker"
                              >
                                <Link href="/tournaments/tournament-schedule-maker">
                                  <a>
                                    Scheduling <ChevronRight classes="Icon" />
                                  </a>
                                </Link>
                              </li>
                              <li
                                className="lastLink ga-tournaments-registration ga-pushEvent"
                                data-ga-event="marketing-nav-sub-tournaments-registration"
                              >
                                <Link href="/tournaments/tournament-registration">
                                  <a>
                                    Registration <ChevronRight classes="Icon" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </span>
              </li>
              <li data-hover="pricing" role="menuitem">
                <span
                  className={`Navigation__List-link Navigation__List-link--icon ${
                    activeRouting.pricing.includes(currentSlug) ? 'active' : ''
                  }`}
                >
                  Pricing <ChevronDown classes="Icon Icon--down" />
                  <nav
                    role="navigation"
                    data-secondary-nav="pricing"
                    aria-labelledby="pricingNavigation"
                  >
                    <ul
                      className="NavigationSecondary__list NavigationSecondary__list--full"
                      id="pricingNavigation"
                      role="menu"
                    >
                      <li
                        className={`NavigationSecondary__item ga-c-l-pricing ga-pushEvent ${
                          activeSlug === activeRouting.pricing[0]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-sub-c-l-pricing"
                        role="menuitem"
                      >
                        <Link href="/pricing/organizations">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <div>
                                <h5 className="Navigation__heading">
                                  <img
                                    loading="lazy"
                                    className="NavigationSecondary__branding lazy"
                                    src="/images/cl-badge.png"
                                    alt="Organization logo"
                                  />
                                  Clubs &amp; Leagues
                                </h5>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`NavigationSecondary__item ga-c-l-pricing ga-pushEvent ${
                          activeSlug === activeRouting.pricing[1]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-sub-teams-pricing"
                        role="menuitem"
                      >
                        <Link href="/pricing/teams">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <h5 className="Navigation__heading">
                                <img
                                  loading="lazy"
                                  className="NavigationSecondary__branding lazy"
                                  src="/images/teamsnap-badge.png"
                                  alt="Teams logo"
                                />
                                Teams
                              </h5>
                            </div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </span>
              </li>
              <li role="menuitem">
                <Link href="/why">
                  <a
                    className={`Navigation__List-link ga-pushEvent ${
                      activeRouting.why.includes(activeSlug) ? 'active' : ''
                    }`}
                    data-ga-event="marketing-nav-why"
                  >
                    Why
                  </a>
                </Link>
              </li>
              <li data-hover="company" role="menuitem">
                <span
                  className={`Navigation__List-link Navigation__List-link--icon ${
                    activeRouting.company.includes(activeSlug) ? 'active' : ''
                  }`}
                >
                  Company <ChevronDown classes="Icon Icon--down" />
                  <nav
                    role="navigation"
                    data-secondary-nav="company"
                    aria-labelledby="companyNavigation"
                  >
                    <ul
                      className="NavigationSecondary__list NavigationSecondary__list--full"
                      id="companyNavigation"
                      role="menu"
                    >
                      <li
                        className={`NavigationSecondary__item ga-about ga-pushEvent ${
                          activeSlug === activeRouting.company[0]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-about"
                        role="menuitem"
                      >
                        <Link href="/company">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <h5 className="Navigation__heading">About</h5>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`NavigationSecondary__item ga-about ga-pushEvent ${
                          activeSlug === activeRouting.company[1]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-sub-about-advertising"
                        role="menuitem"
                      >
                        <Link href="/company/advertising">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <h5 className="Navigation__heading">
                                For Brands
                              </h5>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`NavigationSecondary__item ga-about ga-pushEvent ${
                          activeSlug === activeRouting.company[2]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-sub-about-company-careers"
                        role="menuitem"
                      >
                        <Link href="/company/careers">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <h5 className="Navigation__heading">Careers</h5>
                            </div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </span>
              </li>
              <li data-hover="resources" role="menuitem">
                <span
                  className={`Navigation__List-link Navigation__List-link--icon ${
                    activeRouting.resources.includes(activeSlug) ? 'active' : ''
                  }`}
                >
                  Resources<span className="New--badge mr5">New!</span>
                  <ChevronDown classes="Icon Icon--down" />
                  <nav
                    role="navigation"
                    data-secondary-nav="resources"
                    aria-labelledby="resourcesNavigation"
                  >
                    <ul
                      className="NavigationSecondary__list NavigationSecondary__list--full"
                      id="resourcesNavigation"
                      role="menu"
                    >
                      <li
                        className={`NavigationSecondary__item ga-about ga-pushEvent ${
                          activeSlug === activeRouting.resources[0]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-sub-resources-return-to-sports"
                        role="menuitem"
                      >
                        <Link href="/resources/return-to-sports">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <h5 className="Navigation__heading">
                                Return To Play
                                <span className="New--badge mr5">New!</span>
                              </h5>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`NavigationSecondary__item ga-about ga-pushEvent ${
                          activeSlug === activeRouting.resources[1]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-sub-resources-resource-library"
                        role="menuitem"
                      >
                        <Link href="/leagues-and-clubs-resource-library">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <h5 className="Navigation__heading">
                                Resource Library
                              </h5>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`NavigationSecondary__item ga-about ga-pushEvent ${
                          activeSlug === activeRouting.resources[2]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-sub-resources-blog"
                        role="menuitem"
                      >
                        <Link href="/blog">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <h5 className="Navigation__heading">Blog</h5>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li
                        className="NavigationSecondary__item  ga-pushEvent"
                        data-ga-event="marketing-nav-sub-resources-help"
                        role="menuitem"
                      >
                        <a
                          href="https://helpme.teamsnap.com/"
                          target="_blank"
                          rel="noopener"
                        >
                          <div className="NavigationSecondary__item-content">
                            <h5 className="Navigation__heading">Help Center</h5>
                          </div>
                        </a>
                      </li>
                      <li
                        className={`NavigationSecondary__item ga-about ga-pushEvent ${
                          activeSlug === activeRouting.resources[3]
                            ? 'active'
                            : ''
                        }`}
                        data-ga-event="marketing-nav-sub-resources-docs"
                        role="menuitem"
                      >
                        <Link href="/documentation">
                          <a>
                            <div className="NavigationSecondary__item-content">
                              <h5 className="Navigation__heading">API Docs</h5>
                            </div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Navigation__Buttons">
          <p className="Navigation__Links">
            <span className="hiddenMobile">
              <a
                className="ga-pushEvent"
                href="https://go.teamsnap.com/login/find_my_team"
                data-ga-event="marketing-nav-find-my-team"
              >
                Find My Team{' '}
              </a>
            </span>
          </p>
          <div className="Navigation__ButtonGroup ButtonGroup">
            <a
              href="https://go.teamsnap.com/signup/missing_email"
              className="Button Button--primary ga-signup ga-pushEvent"
              data-ga-event="marketing-nav-signup"
            >
              Sign up
            </a>
            <a
              href="https://go.teamsnap.com/"
              className="Button Login ga-login ga-pushEvent"
              data-ga-event="marketing-nav-login"
            >
              Log in
            </a>
          </div>
          <div className="Navigation__ButtonGroup ButtonGroup ButtonGroupMobile">
            <a
              href="https://go.teamsnap.com/signup/missing_email"
              className="Button Button--primary Button--Small ga-signup ga-pushEvent"
              data-ga-event="marketing-nav-signup"
            >
              Sign up
            </a>
            <a
              href="https://go.teamsnap.com/"
              className="Button Login ga-login ga-pushEvent hidden"
              data-ga-event="marketing-nav-login"
            >
              Log in
            </a>
            <button
              className="Button ToggleMenu Button--Small ga-pushEvent"
              data-ga-event="marketing-nav-mobile-menu"
              onClick={() => setShouldOpenMenu(!shouldOpenMenu)}
            >
              {shouldOpenMenu ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
