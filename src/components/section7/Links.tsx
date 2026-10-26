import styles from "./Link.module.scss";
import Image from "next/image";

import logo from "../ui/assets/logo.svg";

const Links = () => {
  return (
    <div className={styles.generalWrapper}>
      <div className={styles.topCard}>
        <div className={styles.rightCard}>
          <header className={styles.header}>
            <Image src={logo} alt="logo" width={26} height={26} />
            OpenUI
          </header>
          <p className={styles.p1}>
            An open-source, mathematically rigorous design system and React
            component suite crafted for developer ergonomics and technical
            precision.
          </p>
          <p className={styles.p2}>Built with rigor for technical teams</p>
        </div>

        <div className={styles.navCard}>
          <nav>
            <h3 className={styles.h3}>COMPONENTS</h3>
            <ul className={styles.ul}>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#buttons-inputs">Buttons &amp; Inputs</a>
              </li>
              <li>
                <a href="#data-display">Data Display</a>
              </li>
              <li>
                <a href="#feedback-overlays">Feedback &amp; Overlays</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h3 className={styles.h3}>DOCUMENTATION</h3>
            <ul className={styles.ul}>
              <li>
                <a href="#getting-started">Getting Started</a>
              </li>
              <li>
                <a href="#design-tokens">Design Tokens</a>
              </li>
              <li>
                <a href="#accessibility-standards">Accessibility Standards</a>
              </li>
              <li>
                <a href="#theming-color">Theming &amp; Color</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h3 className={styles.h3}>RESOURCES</h3>
            <ul className={styles.ul}>
              <li>
                <a href="#github">GitHub Repository</a>
              </li>
              <li>
                <a href="#releases">Releases &amp; v1.0 Notes</a>
              </li>
              <li>
                <a href="#figma">Figma UI Library</a>
              </li>
              <li>
                <a href="#community">Community &amp; Discord</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.bottomCard}>
        <p>© 2025 OpenUI Project. Released under the MIT License.</p>
        <div className={styles.bottomCardSpanDiv}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>System Status</span>
        </div>
      </div>
    </div>
  );
};

export default Links;
