import FileBadgeIcon from "../FileBadgeIcon";
import Card from "../ui/Card/Card";
import styles from "./CodeSection.module.scss";

const CodeSection = () => {
  return (
    <Card className={styles.codeSection}>
      <div className={styles.fileNameDiv}>
        <div className={styles.fileName}>
          <FileBadgeIcon />
          <p>UserProfile.tsx</p>
        </div>
        <p>TypeScript</p>
      </div>

      {/* the code section */}
      <pre className={styles.codeWindow}>
        <code>
          <span className={styles.importSpan}>
            import {"{"} Button, Input, Badge, Card {"}"} from "@openui/react"
          </span>
          {"\n\n"}
          export function UserProfile() {"{"}
          {"\n  "}
          return ({"\n    "}
          &lt;Card variant="subtle" className="p-6 space-y-4"&gt;
          {"\n      "}
          &lt;Badge tone="brand"&gt;Active v1.2&lt;/Badge&gt;
          {"\n      "}
          &lt;Input label="Workspace" defaultValue="production-us-east" /&gt;
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

      {/* <pre className={styles.codeWindow}>
        <code>
          1. Wrapping only the actual import statement inside the custom styled span
          <span className={styles.importSpan}>
            {`import { Button, Input, Badge, Card } from "@openui/react";`}
          </span>

          Format the remaining structural blocks using standard template strings
          {`export function UserProfile() {
              return (
                <Card variant="subtle" className="p-6 space-y-4">
                  <Badge tone="brand">Active v1.2</Badge>
                  <Input label="Workspace" defaultValue="production-us-east" />
                  <Button variant="primary">Save changes</Button>
                </Card>
              );}
            `}
        </code>
      </pre> */}
    </Card>
  );
};

export default CodeSection;
