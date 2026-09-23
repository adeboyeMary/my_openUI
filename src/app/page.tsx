import Card from "@/components/ui/Card/Card";
import styles from "./page.module.scss";
import HeroSection from "@/components/HeroSection";
import { DUMMY_ROLES } from "@/components/DummyRole";
import PrimitiveComponents from "@/components/section3/PromitiveComponents";
// import { DUMMY_ROLES } from "@/constants/dummy";

const Home = () => {
  return (
    <div className={styles.page}>
      <header></header>
      <main className={styles.main}>
        <section className={styles.section1}>
          <HeroSection />
        </section>

        <section className={styles.section2}>
          <div className={styles.pSection}>
            <div className={styles.pDivs}>
              <p className={styles.p1}>ARCHITECTURAL PRINCIPLES</p>
              <span className={styles.p2}>
                Everything you need to build consistently.
              </span>
            </div>
            <p className={styles.p3}>
              A toolkit engineered from first principles so product teams ship
              zero-regret user interfaces.
            </p>
          </div>

          <div className={styles.rolesCont}>
            {DUMMY_ROLES.map((r) => (
              <Card key={r.id}>
                {/* <Image /> */}
                <>{r.icon}</>
                <h1 className={styles.label}>{r.label}</h1>
                <p className={styles.desc}>{r.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className={styles.section3}>
          <PrimitiveComponents />
        </section>
      </main>
    </div>
  );
};

export default Home;
