import Button from "@/components/ui/Button/Button";
import styles from "./page.module.scss";
import Card from "@/components/ui/Card/Card";
import {
  ArrowRight,
  BadgeCheck,
  CircleCheck,
  Eye,
  Rocket,
  Shapes,
  SquareCode,
} from "lucide-react";
import { DUMMY_WORDS } from "@/constants/dummy";

const Home = () => {
  return (
    <div className={styles.page}>
      <header></header>
      <main className={styles.main}>
        <section className={styles.section1}>
          <div className={styles.hero}>
            <div className={styles.badgeDiv}>
              <>
                <span className={styles.circle}></span> <span>OPEN SOURCE</span>
              </>
              <>
                <span className={styles.circle}></span>
                <span>COMPONENT SYSTEM</span>
              </>
            </div>

            <>
              <h1 className={styles.h1}>Build beautiful interfaces.</h1>
              <h2 className={styles.h2}>Ship consistently.</h2>
              <p className={styles.p}>
                OpenUI is a flexible, accessible component system for teams who
                care about great products and great code. Built with thoughtful
                defaults, reusable components, and accessibility in mind.
              </p>
            </>
            <div className={styles.buttonDiv}>
              <Button
                aria-label="explore components button"
                rightIcon={<ArrowRight width={18} height={18} />}
              >
                Explore components
              </Button>
              <Button aria-label="Read docs button" variant="secondary">
                Read the docs
              </Button>
            </div>
            <ul className={styles.ul}>
              {DUMMY_WORDS.map((l) => (
                <li key={l.id} className={styles.li}>
                  <CircleCheck
                    color="#3525CD"
                    size={13}
                    className={styles.circleCheckIcon}
                  />
                  <p>{l.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.hero2}>
            <Card className={styles.heroCardContainer}>
              <div className={styles.nav}>
                <div className={styles.leftNav}>
                  <span className={styles.overviewBox}>Overview</span>
                  <span className={styles.analyticsBox}>Analytics</span>
                  <span className={styles.analyticsBox}>Settings</span>
                </div>
                <div className={styles.rightNav}>
                  <p className={styles.activeBox}>Active</p>
                  <span className={styles.betaBox}>Beta v1.4</span>
                </div>
              </div>

              <div className={styles.divContainer}>
                <Card className={styles.componentSystemDiv}>
                  <div className={styles.div}>
                    <span className={styles.span}>COMPONENT SYSTEM</span>
                    <Shapes color="#3525CD" size={16} />
                  </div>
                  <p className={styles.firstParagraph}> 8 Components</p>
                  <p className={styles.secondParagraph}>
                    Semantics & keyboard tested
                  </p>
                </Card>
                <Card className={styles.componentSystemDiv}>
                  <div className={styles.div}>
                    <span className={styles.span}>TECH STACK</span>
                    <SquareCode color="#3525CD" size={16} />
                  </div>
                  <p className={styles.firstParagraph}>React + TypeScript</p>
                  <p className={styles.secondParagraph}>Modular styling</p>
                </Card>
              </div>

              <form className={styles.form}>
                <label className={styles.label}>Email</label>
                <div className={styles.inputDiv}>
                  <input
                    placeholder="alex@company.com"
                    className={styles.input}
                  />
                  <BadgeCheck color="#3525CD" size={15.75} />
                </div>

                <p className={styles.p}>
                  Validated domain: identity provisioned via SSO
                </p>
              </form>

              <div className={styles.cardFooter}>
                <p>Cancel</p>
                <div className={styles.buttonDiv}>
                  <Button
                    className={styles.button}
                    size="sm"
                    variant="secondary"
                    aria-label=""
                    leftIcon={<Eye size={13.38} color="#131B2E" />}
                  >
                    Preview
                  </Button>
                  <Button
                    className={styles.button}
                    size="sm"
                    aria-label=""
                    leftIcon={<Rocket size={13.38} color="white" />}
                  >
                    Deploy app
                  </Button>
                </div>
              </div>
            </Card>

            <Card className={styles.codeSection}>
              <div>
                <div>
                  <p>UserProfile.tsx</p>
                </div>
                <p>TypeScript</p>
              </div>

              {/* the code section */}
              <pre>
                <code>
                  import {"{"} Button, Input, Badge, Card {"}"} from
                  "@openui/react"
                  {"\n\n"}
                  export function UserProfile() {"{"}
                  {"\n  "}
                  return ({"\n    "}
                  &lt;Card variant="subtle" className="p-6 space-y-4"&gt;
                  {"\n      "}
                  &lt;Badge tone="brand"&gt;Active v1.2&lt;/Badge&gt;
                  {"\n      "}
                  &lt;Input label="Workspace" defaultValue="production-us-east"
                  /&gt;
                  {"\n      "}
                  &lt;Button variant="primary"&gt;Save changes&lt;/Button&gt;
                  {"\n    "}
                  &lt;/Card&gt;
                  {"\n  "}
                  );
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
