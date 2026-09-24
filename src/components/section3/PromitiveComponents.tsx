"use client";
import styles from "./PtimitiveComponents.module.scss";

import { ArrowRight, Copy, Info, Palette } from "lucide-react";
import Card from "../ui/Card/Card";
import { useState } from "react";

const PrimitiveComponents = () => {
  const [activeTab, setActiveTab] = useState("design");

  return (
    <>
      <header className={styles.header}>
        <p className={styles.headerP1}>PRIMITIVE CATALOG</p>
        <h1 className={styles.headerH1}>
          Simple building blocks. Beautiful results.
        </h1>
        <p className={styles.headerP2}>
          A preview of core primitives designed with mathematical precision and
          uncompromising accessibility.
        </p>
      </header>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <Card>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>BUTTONS</p>
              <p className={styles.p2}>Interactive</p>
            </div>
            <div className={styles.buttons}>
              <span className={styles.primaryButton}>Primary</span>
              <span className={styles.secondaryButton}>Secondary</span>
              <span className={styles.destructiveButton}>Destructive</span>
              <span className={styles.ghostButton}>Ghost</span>
            </div>
            <span className={styles.buttonsP}>
              Support 4 sizes, loading states, and start/end icons.
            </span>
          </Card>
          <Card>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>INPUT FIELD</p>
              <p className={styles.p2}>Controlled</p>
            </div>
            <form>
              <label className={styles.label}>API Secret Key</label>
              <div className={styles.inputWrapper}>
                <input className={styles.input}></input>
                <Copy width={12.75} height={15} color="#464555" />
              </div>
              <p className={styles.formP1}>Encrypted at rest with KMS</p>
              <p className={styles.formP2}>
                Full screen-reader label associations & clear action.
              </p>
            </form>
          </Card>
          <Card className={styles.semanticBadgeDiv}>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>STATUS BADGES</p>
              <p className={styles.p2}>Semantics</p>
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.defaultBadge}>Default</span>
              <span className={styles.activeBadge}>Active</span>
              <span className={styles.reviewBadge}>Review</span>
              <span className={styles.incidentBadge}>Incident</span>
            </div>
            <p className={styles.badgeP}>
              Accessible contrast validated against WCAG standards.
            </p>
          </Card>
        </div>

        <div className={styles.cards}>
          <Card className={styles.designTokenDiv}>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>DESIGN TOKENS</p>
              <p className={styles.p2}>Theme</p>
            </div>
            <div className={styles.tokenArchyDiv}>
              <div className={styles.tokenArchyHeader}>
                <p className={styles.tokenArchyP}>Token Architecture</p>
                <Palette width={13.33} height={13.33} color="#3525CD" />
              </div>
              <p className={styles.tokenArchyP1}>Radius, Spacing, Color</p>
            </div>
            <p className={styles.tokenArchyP2}>
              Standardized tokens for layout, radius, and color palettes.
            </p>
          </Card>
          <Card className={styles.tabsDiv}>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>SEGMENTED TABS</p>
              <p className={styles.p2}>Navigation</p>
            </div>
            <div className={styles.tabs}>
              <button
                type="button"
                onClick={() => setActiveTab("design")}
                className={`${styles.tabButton} ${
                  activeTab === "design" ? styles.activeTab : ""
                } `}
              >
                Design
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("code")}
                className={`${styles.tabButton} ${
                  activeTab === "code" ? styles.activeTab : ""
                } `}
              >
                Code
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("changelog")}
                className={`${styles.tabButton} ${
                  activeTab === "changelog" ? styles.activeTab : ""
                } `}
              >
                Changelog
              </button>
            </div>
            <p className={styles.p}>
              Arrow navigation and dynamic tab-index roving built in.
            </p>
          </Card>
          <Card className={styles.inlineAlertDiv}>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>INLINE ALERT</p>
              <p className={styles.p2}>Feedback</p>
            </div>
            <div className={styles.inlineAlertHeaderDiv}>
              <div className={styles.inlineAlertHeader}>
                <Info width={16.67} height={18.67} color="#3525CD" />
                <p className={styles.headerP}>Release Candidate ready</p>
              </div>
              <p className={styles.headerP2}>Ready for deployment in sandbox</p>
            </div>
            <p className={styles.headerP3}>
              Polite live region dispatching for screen reader alerts.
            </p>
          </Card>
        </div>
      </div>
      <div className={styles.sectionFooterDiv}>
        <p className={styles.sectionFooterP}>
          View all 42+ primitive components
        </p>
        <ArrowRight color="#3525cd" width={18} height={18} />
      </div>
    </>
  );
};

export default PrimitiveComponents;
