import { FunctionComponent } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./RecentProjectsContent.module.css";

export type RecentProjectsContentType = {
  className?: string;
};

const RecentProjectsContent: FunctionComponent<RecentProjectsContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.paragraphContent, className].join(" ")}>
      <div className={styles.projectsHeader}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.vuesaxlineararrowRightIcon}
            loading="lazy"
            alt=""
            src="/vuesaxlineararrowright-1.svg"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.bestProjectOfTheYearsParent}>
            <div className={styles.bestProjectOf}>
              Best Project of the Years
            </div>
            <div className={styles.ourRecentProjectsParent}>
              <h1 className={styles.ourRecentProjects}>Our recent projects</h1>
              <div className={styles.contactLink}>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.vuesaxlineararrowLeftIcon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlineararrowleft.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.projectList}>
              <ProjectCard
                projectImage="/rectangle-21@2x.png"
                title="Sobha Hearland II Villas"
                description="/starinactivebig.svg"
                rating="4.83"
              />
              <ProjectCard
                projectImage="/rectangle-21@2x.png"
                title="Sobha Hearland II Villas"
                description="/starinactivebig.svg"
                rating="4.83"
              />
              <ProjectCard
                projectImage="/rectangle-21@2x.png"
                title="Sobha Hearland II Villas"
                description="/starinactivebig1@2x.png"
                rating="4.83"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsContent;
