import { FunctionComponent } from "react";
import StepOption from "./StepOption";
import styles from "./StepsContainer.module.css";

export type StepsContainerType = {
  className?: string;
};

const StepsContainer: FunctionComponent<StepsContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.stepsContainer, className].join(" ")}>
      <div className={styles.transferDetailsWrapper}>
        <div className={styles.transferDetails}>
          <div className={styles.menuItems}>
            <div className={styles.threeStepsThree}>
              Three steps. Three minutes.
            </div>
          </div>
          <h1 className={styles.everythingShouldBe}>
            Everything should be this easy.
          </h1>
        </div>
      </div>
      <div className={styles.frameParent}>
        <StepOption
          icon="/vuesaxlinearmessages@2x.png"
          title="Answer questions"
        />
        <StepOption
          icon="/vuesaxlinearsmstracking@2x.png"
          title="Select a quote"
        />
        <StepOption icon="/vuesaxlinearedit2@2x.png" title="Get registered" />
      </div>
    </div>
  );
};

export default StepsContainer;
