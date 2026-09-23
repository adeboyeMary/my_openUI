import styles from "./PtimitiveComponents.module.scss";

import { ArrowRight, Copy } from "lucide-react";
import Card from "../ui/Card/Card";

const PrimitiveComponents = () => {
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
              <label></label>
              <div>
                <input></input>
                <Copy />
              </div>
            </form>
          </Card>
          <Card>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>STATUS BADGES</p>
              <p className={styles.p2}>Semantics</p>
            </div>
            <div></div>
            <p></p>
          </Card>
        </div>

        <div className={styles.cards}>
          <Card>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>DESIGN TOKENS</p>
              <p className={styles.p2}>Theme</p>
            </div>
            <div></div>
            <p></p>
          </Card>
          <Card>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>SEGMENTED TABS</p>
              <p className={styles.p2}>Navigation</p>
            </div>
            <div></div>
            <p></p>
          </Card>
          <Card>
            <div className={styles.firstTopCardDiv1}>
              <p className={styles.p1}>INLINE ALERT</p>
              <p className={styles.p2}>Feedback</p>
            </div>
            <div></div>
            <p></p>
          </Card>
        </div>
      </div>
      <div>
        <p>View all 42+ primitive components</p>
        <ArrowRight />
      </div>
    </>
  );
};

export default PrimitiveComponents;
