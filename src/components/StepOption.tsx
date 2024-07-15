import { FunctionComponent } from "react";
import styles from "./StepOption.module.css";

export type StepOptionType = {
  className?: string;
  icon?: string;
  title?: string;
};

const StepOption: FunctionComponent<StepOptionType> = ({
  className = "",
  icon,
  title,
}) => {
  return (
    <div className={[styles.vuesaxlinearmessagesParent, className].join(" ")}>
      <img
        className={styles.vuesaxlinearmessagesIcon}
        loading="lazy"
        alt=""
        src={icon}
      />
      <h2 className={styles.answerQuestions}>{title}</h2>
      <div
        className={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. `}</div>
    </div>
  );
};

export default StepOption;
