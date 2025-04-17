import { Logo } from '@/shared/ui';
import { FOOTER_LINKS, SOCIAL_LINKS } from './lib';
import styles from './styles.module.scss';

const renderNavLinks = () => (
  <nav className={styles.footer__nav}>
    {FOOTER_LINKS.map(({ id, list }) => (
      <ul key={id}>
        {list.map(({ text, href }) => (
          <li className={styles.footer__listItem} key={href}>
            <a href={href}>{text}</a>
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
        <a href={href} target="_blank" aria-label={ariaLabel} rel="noopener noreferrer">
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
