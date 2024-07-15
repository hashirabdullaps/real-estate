import { FunctionComponent } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StepsContainer from "../components/StepsContainer";
import RecentProjectsContent from "../components/RecentProjectsContent";
import BookingSection from "../components/BookingSection";
import SubscriptionSection from "../components/SubscriptionSection";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <section className={styles.frameParent}>
        <Header />
        <Hero />
      </section>
      <section className={styles.projectTitle}>
        <StepsContainer />
      </section>
      <RecentProjectsContent />
      <section className={styles.brokerageButtons}>
        <BookingSection />
      </section>
      <SubscriptionSection />
    </div>
  );
};

export default LandingPage;
