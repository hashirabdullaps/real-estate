import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Qoute.module.css";

export type QouteType = {
  className?: string;
  enterYourEmailPlaceholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Qoute: FunctionComponent<QouteType> = ({
  className = "",
  propWidth,
  enterYourEmailPlaceholder,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.enterYourEmailWrapper}>
        <input
          className={styles.enterYourEmail}
          placeholder="Enter your email"
          type="text"
        />
      </div>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.getAQuote}>Get a Quote</div>
      </button>
    </div>
  );
};

export default Qoute;
