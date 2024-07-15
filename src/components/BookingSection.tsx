import { FunctionComponent } from "react";
import styles from "./BookingSection.module.css";

export type BookingSectionType = {
  className?: string;
};

const BookingSection: FunctionComponent<BookingSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.weAreAGlobalBoutiqueRealWrapper}>
        <h1 className={styles.weAreA}>
          We are a global, boutique real estate brokerage
        </h1>
      </div>
      <div className={styles.aboutDetails}>
        <div className={styles.aboutParagraph}>
          <div className={styles.aboutDescriptionContainerParent}>
            <div className={styles.aboutDescriptionContainer}>
              <div className={styles.theTransferOfRealEstateParent}>
                <h1 className={styles.theTransferOf}>
                  The transfer of real estate
                </h1>
                <div className={styles.loremIpsumDolorSitAmetConWrapper}>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                    sit pellentesque sollicitudin. Egestas faucibus lacus diam
                    in senectus consectetur. Mattis elit adipiscing quisque
                    tellus scelerisque vehicula ante nunc. Tellus consequat nisl
                    quis nisl justo.
                  </div>
                </div>
              </div>
              <div className={styles.actionButtonsWrapper}>
                <div className={styles.actionButtons}>
                  <button className={styles.booknow}>
                    <div className={styles.bookNow}>Book Now!</div>
                  </button>
                  <button className={styles.readmore}>
                    <div className={styles.readMore}>Read More</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.targetAudience}>
              <div className={styles.audienceList}>
                <div className={styles.audienceItems}>
                  <div className={styles.div}>12+</div>
                  <div className={styles.customers}>Customers</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div1}>14+</div>
                  <div className={styles.projectGallery}>
                    <div className={styles.offices}>Offices</div>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <div className={styles.div2}>10+</div>
                  <div className={styles.students}>Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.leftsectionParent}>
          <img
            className={styles.leftsectionIcon}
            loading="lazy"
            alt=""
            src="/rectangle-27@2x.png"
          />
          <div className={styles.rightsection} />
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
