import Button from "../ui/Button/Button";
import styles from "./ReadDocs.module.scss";

const ReadDocSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightCard}>
        <h2 className={styles.h2}>Start crafting with OpenUI today</h2>
        <p>Install into any React or Next.js app in under sixty seconds.</p>
      </div>

      <div className={styles.buttonDiv}>
        <Button
          aria-label={"button"}
          variant="secondary"
          size="sm"
          className={styles.button1}
        >
          npm i @openui/react
        </Button>
        <Button
          aria-label={"read-docs button"}
          size="md"
          className={styles.button2}
        >
          Read Docs
        </Button>
      </div>
    </div>
  );
};

export default ReadDocSection;
