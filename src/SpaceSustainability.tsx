import styles from "./Astra.module.css";

import Footer from "./footer.tsx";
import ProjectHeader from "./components/ProjectHeader.tsx";

import projectsBg from "./assets/projects bg.png";

export default function SpaceSustainability() {
  return (
    <>
      <div className={styles.astraprojectcontainer}>
        <ProjectHeader
          title="Space Sustainability"
          subtitle="Advancing sustainable practices for space exploration"
          backgroundImage={projectsBg}
        />
        <div className={styles.intro}>
          <div className={styles.introleft}>
            <p>
              Our Space Sustainability initiative focuses on research and
              development of sustainable technologies and practices for the
              growing space industry. More details coming soon as this project
              takes shape.
            </p>
          </div>
          <div className={styles.introright}>
            <h4>Status</h4>
            <p>Coming Soon</p>
          </div>
        </div>
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>What to Expect</h3>
          </div>
          <div className={styles.projectgoalssection5}>
            <div className={styles.projectaim}>
              <div className={styles.singleprojectaim}>
                <h2>1</h2>
                <p>
                  Researching and addressing the challenges of space debris and
                  long-term orbital sustainability
                </p>
              </div>
              <div className={styles.singleprojectaim}>
                <h2>2</h2>
                <p>
                  Developing innovative solutions for sustainable space
                  exploration and resource utilization
                </p>
              </div>
              <div className={styles.singleprojectaim}>
                <h2>3</h2>
                <p>
                  Collaborating with industry partners and academic institutions
                  to drive impactful research
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
