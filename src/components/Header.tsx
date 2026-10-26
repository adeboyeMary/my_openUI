import Image from "next/image";

import { Link, Search, Star, Sun, User } from "lucide-react";
import styles from "./Header.module.scss";
import logo from "./ui/assets/logo.svg";

export const Header = () => {
  return (
    <section className={styles.headerWrapper}>
      {/* Left section */}
      <div className={styles.leftGroup}>
        <div className={styles.logoBlock}>
          <div className={styles.logoSquare}>
            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 1h5v5H1V1zm9 0h5v5h-5V1zM1 10h5v5H1v-5zm9 0h5v5h-5v-5z" />
            </svg> */}
            <Image
              src={logo}
              alt="OpenUI official brand mark"
              width={26}
              height={26}
            />
          </div>
          <span className={styles.brandName}>OpenUI</span>
          <span className={styles.versionBadge}>v1.0</span>
        </div>

        {/* <nav className={styles.navLinks}>
          <Link href="#home" className={styles.activeLink}>
            Home
          </Link>
          <Link href="#component">Components</Link>
          <Link href="#accessibility">Accessibility</Link>
        </nav> */}
      </div>

      {/* Middle section */}
      <div className={styles.searchWrapper}>
        <Search size={14} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search components..."
          disabled
          aria-disabled="true"
        />
        <span className={styles.shortcutKey}>⌘K</span>
      </div>

      {/* Right section */}
      <div className={styles.rightGroup}>
        <div className={styles.githubBadge}>
          <div className={styles.githubLeft}>
            {/* <Github size={14} /> */}
            <span>GitHub</span>
          </div>
          <div className={styles.githubRight}>
            <Star size={12} fill="#64748b" />
            <span>2.4k</span>
          </div>
        </div>

        {/* Theme Light Toggle */}
        <button
          type="button"
          className={styles.utilityBtn}
          aria-label="Toggle light theme"
        >
          <Sun size={16} />
        </button>

        {/* Action Buttons */}
        <button type="button" className={styles.ctaButton}>
          Get Started
        </button>

        <button
          type="button"
          className={styles.avatarBtn}
          aria-label="User profile"
        >
          <User size={16} />
        </button>
      </div>
    </section>
  );
};
