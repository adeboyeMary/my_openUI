import Button from "@/components/ui/Button/Button";
import styles from "./page.module.scss";
import Card from "@/components/ui/Card/Card";
import { ArrowRight, CircleCheck } from "lucide-react";
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
              <Button rightIcon={<ArrowRight width={18} height={18} />}>
                Explore components
              </Button>
              <Button variant="secondary">Read the docs</Button>
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
            <Card>
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
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
