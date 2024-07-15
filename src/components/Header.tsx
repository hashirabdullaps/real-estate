import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.menuItems}>
        <div className={styles.logo}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <img
              className={styles.rectangleIcon}
              loading="lazy"
              alt=""
              src="/rectangle-12@2x.png"
            />
          </div>
          <img
            className={styles.buildIcon}
            loading="lazy"
            alt=""
            src="/build@2x.png"
          />
        </div>
      </div>
      <div className={styles.menuItems1}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.menuList}>
            <a className={styles.aboutUs} cursor="pointer">
              About us
            </a>
          </div>
          <div className={styles.menuList1}>
            <a className={styles.projects}>Projects</a>
          </div>
          <div className={styles.menuList2}>
            <a className={styles.agents}>Agents</a>
          </div>
          <div className={styles.menuList3}>
            <a className={styles.services}>Services</a>
          </div>
          <div className={styles.menuList4}>
            <a className={styles.listings}>Listings</a>
          </div>
          <img
            className={styles.vuesaxlinearsearchNormalIcon}
            loading="lazy"
            alt=""
            src="/vuesaxlinearsearchnormal@2x.png"
          />
        </div>
      </div>
      <div className={styles.menuItemsParent}>
        <div className={styles.menuItems2}>
          <div className={styles.otherServicesParent}>
            <button className={styles.otherServices}>Other services</button>
            <div className={styles.vuesaxlineararrowRightWrapper}>
              <img
                className={styles.vuesaxlineararrowRightIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlineararrowright@2x.png"
              />
            </div>
          </div>
        </div>
        <button className={styles.contactUsWrapper}>
          <div className={styles.contactUs}>Contact us</div>
        </button>
      </div>
    </header>
  );
};

export default Header;
