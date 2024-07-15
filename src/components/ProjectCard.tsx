import { FunctionComponent } from "react";
import styles from "./ProjectCard.module.css";

export type ProjectCardType = {
  className?: string;
  projectImage?: string;
  title?: string;
  description?: string;
  rating?: string;
};

const ProjectCard: FunctionComponent<ProjectCardType> = ({
  className = "",
  projectImage,
  title,
  description,
  rating,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.projectImageParent}>
        <img className={styles.projectImageIcon} alt="" src={projectImage} />
        <div className={styles.imageWrap} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.titleParent}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description} src={description}>
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
            bibendum.
          </div>
          <div className={styles.starsParent}>
            <div className={styles.stars}>
              <img
                className={styles.starinactivebigIcon}
                alt=""
                src={description}
              />
              <img
                className={styles.starinactivebigIcon1}
                alt=""
                src="/starinactivebig2@2x.png"
              />
              <img
                className={styles.starinactivebigIcon2}
                alt=""
                src="/starinactivebig3@2x.png"
              />
              <img
                className={styles.starinactivebigIcon3}
                alt=""
                src="/starinactivebig4@2x.png"
              />
              <img
                className={styles.starinactivebigIcon4}
                alt=""
                src="/starinactivebig5@2x.png"
              />
            </div>
            <div className={styles.rating}>{rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
