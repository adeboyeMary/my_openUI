import { CircleCheck, ShieldCheck, SquareArrowOutUpRight } from "lucide-react";
import Card from "../ui/Card/Card";
import styles from "./InclusiveSection.module.scss";
import { DUMMY_DATA } from "@/constants/dummy";
import Button from "../ui/Button/Button";

const AllInclusiveSection = () => {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.headerSpan}>
            <ShieldCheck color="#3525CD" width={14.67} height={14} />
            WAI-ARIA 1.2 Compliant
          </span>
          <h1>Designed for everyone.</h1>
        </header>
        <p className={styles.p}>
          Accessibility isn't an afterthought. OpenUI considers semantic
          structure, keyboard interaction, focus management, contrast ratios,
          and assistive technology ergonomics from the very first token.
        </p>
        <div>
          <ul className={styles.ul}>
            {DUMMY_DATA.map((l) => (
              <li key={l.id} className={styles.li}>
                <CircleCheck
                  fill="#3525CD"
                  color="#ffffff"
                  size={27}
                  className={styles.circleCheckIcon}
                />
                <p>{l.label}</p>
              </li>
            ))}
          </ul>

          <Button
            size="sm"
            aria-label={"button"}
            rightIcon={<SquareArrowOutUpRight size={16.5} />}
            className={styles.Button}
          >
            Accessibility guidelines
          </Button>
        </div>
      </div>

      <div className={styles.rightCardWrapper}>
        <Card className={styles.rightCard}>
          <div className={styles.header}>
            <p>CONTRAST MATRIX</p>
            <p className={styles.p2}>7.42 : 1 Ratio</p>
          </div>
          <div className={styles.whiteCardDiv}>
            <div className={styles.whiteCard}>
              <span className={styles.whiteCardSpan} />
              <div className={styles.pDivs}>
                <p className={styles.p1}>Primary #3525CD</p>
                <p className={styles.p2}>Light background safe</p>
              </div>
            </div>
            <span className="span">AAA Pass</span>
          </div>

          <div className={styles.blackCardDiv}>
            <div className={styles.blackCard}>
              <span className={styles.blackCardSpan} />
              <div className={styles.pDivs}>
                <p className={styles.p1}>Text High-Contrast</p>
                <p className={styles.p2}>14.1 : 1 Foreground</p>
              </div>
            </div>
            <span className="span">AAA Pass</span>
          </div>
          <div className={styles.footer}>
            <p>Focus Indicators</p>
            <p className={styles.p2}>3px Offset Glow</p>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default AllInclusiveSection;
