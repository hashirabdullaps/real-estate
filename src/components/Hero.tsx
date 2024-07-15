import { FunctionComponent } from "react";
import Qoute from "./Qoute";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.heroBackgroundImage} />
      <img
        className={styles.heroChild}
        loading="lazy"
        alt=""
        src="/group-2@2x.png"
      />
      <div className={styles.welcomeToRealstate}>Welcome to Realstate</div>
      <div className={styles.heroContent}>
        <h1 className={styles.manageYourProperty}>Manage Your Property</h1>
        <div className={styles.yourWillHave}>
          Your will have everything nearby supermarket, buses , station, the
          carmen neighborhood, etc
        </div>
        <Qoute />
      </div>
    </div>
  );
};

export default Hero;
