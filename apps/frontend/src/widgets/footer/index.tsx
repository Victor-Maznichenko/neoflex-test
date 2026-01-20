import { Link } from 'react-router-dom';

import { Logo } from '@/shared/ui';

import { FOOTER_LINKS, SOCIAL_LINKS } from './lib';

import styles from './styles.module.scss';

const renderNavLinks = () => (
  <nav className={styles.footer__nav}>
    {FOOTER_LINKS.map(({ id, list }) => (
      <ul key={id}>
        {list.map(({ text, path }) => (
          <li key={path} className={styles.footer__listItem}>
            <Link to={path}>{text}</Link>
          </li>
        ))}
      </ul>
    ))}
  </nav>
);

const renderSocialLinks = () => (
  <ul className={styles.footer__social}>
    {SOCIAL_LINKS.map(({ href, Component, ariaLabel }) => (
      <li key={href}>
        <a href={href} aria-label={ariaLabel} rel="noopener noreferrer" target="_blank">
          <Component />
        </a>
      </li>
    ))}
  </ul>
);

export const Footer = () => (
  <footer className={styles.footer}>
    <Logo />
    {renderNavLinks()}
    {renderSocialLinks()}
  </footer>
);
