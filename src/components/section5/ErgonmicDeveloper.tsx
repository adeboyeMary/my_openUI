"use client";

import styles from "./ErgonmicDeveloper.module.scss";
import Image from "next/image";
import Card from "../ui/Card/Card";
import FileBadgeIcon from "../FileBadgeIcon";
import { CircleSmall, Copy } from "lucide-react";
import interact from "../ui/assets/interact.svg";
import divide from "../ui/assets/divider.svg";
import tab from "../ui/assets/tab.svg";

const ErgonomicDeveloper = () => {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.headerP1}>DEVELOPER ERGONOMICS</p>
        <h1 className={styles.headerH1}>Beautiful UI. Clean code. </h1>
        <p className={styles.headerP2}>
          Composable components designed to be intuitively easy to understand
          and effortless to customize.
        </p>
      </header>

      <div className={styles.cardsContainer}>
        <Card className={styles.codeSection}>
          <header className={styles.fileNameDiv}>
            <div className={styles.fileName}>
              <FileBadgeIcon className={styles.badgeIcon} />
              <p>Welcome.tsx</p>
            </div>
            <button
              type="button"
              onClick={() => console.log("Copied!...")}
              className={styles.copyDiv}
            >
              <Copy width={13.33} height={13.33} color="#EEF0FF" />
              <p>Copy</p>
            </button>
          </header>

          {/* the code section */}
          <pre className={styles.codeWindow}>
            <code>
              <span className={styles.importSpan}>
                import {"{"} Button {"}"} from "@openui/react"
              </span>
              {"\n\n"}
              export function Welcome() {"{"}
              {"\n  "}
              return ({"\n    "}
              &lt;Button variant="primary"
              {"\n      "}
              &lt;size="lg"
              {"\n      "}
              onClick={"{"}() {"=>"} console.log("Ready!"){"}"}
              {"\n    "}
              &gt;
              {"\n      "}
              Get started
              {"\n    "}
              &lt;/Button&gt;
              {"\n  "}
              );
              {"\n"}
              {"}"}
            </code>
          </pre>

          <footer className={styles.footer}>
            <p>Modular architecture • SCSS compatible</p>
            <p>Tree-shakeable ESM</p>
          </footer>
        </Card>

        {/* Right card */}
        <div className={styles.rightCard}>
          <div className={styles.rightCardHead}>
            <p>LIVE PREVIEW CANVAS</p>
            <div className={styles.circleIcon}>
              <CircleSmall color="#3525CD" fill="#3525CD" size={14} />
              <span>Mounted</span>
            </div>
          </div>

          <div className={styles.outerDiv}>
            <div className={styles.innerDiv}>
              <span className={styles.innerSpan}>Get started</span>
            </div>
            <div className={styles.bottomDiv}>
              <div className={styles.div}>
                <span className={styles.span}>
                  <Image
                    src={interact}
                    height={14}
                    width={14}
                    alt="interactIcon"
                  />
                </span>
                Interactive
              </div>

              <div className={styles.div}>
                <span className={styles.span}>
                  <Image src={divide} height={14} width={14} alt="tabIcon" />
                </span>
              </div>

              <div className={styles.div}>
                <span className={styles.span}>
                  <Image src={tab} height={14} width={14} alt="tabIcon" />
                </span>
                Tab Index 0
              </div>
            </div>
          </div>

          <p>
            Zero configuration needed. Supports deep polymorphic slotting with
            React primitives and arbitrary layout engines.
          </p>
        </div>
      </div>
    </>
  );
};

export default ErgonomicDeveloper;
