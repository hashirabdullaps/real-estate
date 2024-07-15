import { FunctionComponent } from "react";
import Qoute from "./Qoute";
import styles from "./SubscriptionSection.module.css";

export type SubscriptionSectionType = {
  className?: string;
};

const SubscriptionSection: FunctionComponent<SubscriptionSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.subscription, className].join(" ")}>
      <div className={styles.backgroundShape} />
      <img
        className={styles.dRenderingIsometricFdgdf1Icon}
        loading="lazy"
        alt=""
        src="/3drenderingisometricfdgdf-1@2x.png"
      />
      <div className={styles.subscribeContent}>
        <h1 className={styles.subscribeOurNewsletter}>
          Subscribe Our Newsletter
        </h1>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
          pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
          consectetur. Mattis elit adipiscing quisque tellus scelerisque
          vehicula ante nunc.
        </div>
      </div>
      <Qoute propWidth="469px" enterYourEmailPlaceholder="Enter your email" />
    </section>
  );
};

export default SubscriptionSection;
