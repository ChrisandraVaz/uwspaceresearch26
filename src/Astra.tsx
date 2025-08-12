import styles from "./Astra.module.css";

import astraBg from "./assets/astrabg2.png";

import satelliteIcon from "./assets/satellite.svg";
import researcherIcon from "./assets/researcher.svg";
import astronautIcon from "./assets/astronaut.svg";

import Footer from "./footer.tsx";
import ProjectsHeader from "./components/ProjectHeader.tsx";

export default function Astra() {
  return (
    <>
      <div className={styles.astraprojectcontainer}>
        <ProjectsHeader
          title="ASTRA"
          subtitle="Adaptive Signal Transmission and Real-time Analytics"
          backgroundImage={astraBg}
        />
        <div className={styles.intro}>
          <div className={styles.introleft}>
            <p>
              ASTRA leverages machine learning to actively filters cosmic rays
              and improves signal transmission, improving future satellite
              communication and providing a solution to a persistent problem in
              data transmissions.
            </p>
          </div>
          <div className={styles.introright}>
            <h4>Time Frame</h4>
            <p>January 2025 - August 2025</p>
          </div>
        </div>
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Project Goals</h3>
            <h5>Problem Statement</h5>
            <div className={styles.problemstatement}>
              <h5>
                Transmitting data within and through the stratosphere has proven
                to be highly difficult due to the cosmic noise and environmental
                conditions.{" "}
              </h5>
            </div>
          </div>
          <div className={styles.projectgoalssection2}>
            <div className={styles.satellitepic}></div>

            <p className={styles.communicationparagraph}>
              Communication through high altitudes is crucial not only for
              atmospheric research but also for systems located in space. The
              harsh conditions of the stratosphere and space, particularly the
              high exposure to cosmic rays, create challenges for signal
              transmission and integrity. These rays create noise and disrupt
              electronic systems causing issues with maintaining reliable
              communication links.{" "}
            </p>
            <div className={styles.personsaffectedcontainer}>
              <h5>
                This issue affects everyone who relies on accurate, real-time
                data collection and transmission:
              </h5>
              <div className={styles.personsaffected}>
                <div className={styles.singlepersonsaffected}>
                  <img src={satelliteIcon}></img>
                  Satellite operators
                </div>
                <div className={styles.singlepersonsaffected}>
                  <img src={researcherIcon}></img>
                  Atmospheric researchers
                </div>
                <div className={styles.singlepersonsaffected}>
                  <img src={astronautIcon}></img>
                  Space exploration missions
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectgoalssection4}>
            <h5>The science behind it:</h5>
            <p>
              Cosmic noise consists of high-energy particles, which originate in
              space. Studies have shown that cosmic noise and interference
              during high-frequency data transmission can lead to signal
              degradation and data loss, which impacts mission-critical systems,
              especially in space-borne applications. With satellite
              communication, having efficient signal clarity is crucial for
              effective operations. With the increasing number of space missions
              and atmospheric studies, solving this issue becomes more urgent.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <h5>Through ASTRA, we aim to:</h5>
            <div className={styles.projectaim}>
              <div className={styles.singleprojectaim}>
                <h2>1</h2>
                <p>
                  Improve signal transmission, thereby advancing the efficiency
                  of space communication systems
                </p>
              </div>
              <div className={styles.singleprojectaim}>
                <h2>2</h2>
                <p>
                  Develop a means of actively filtering cosmic rays by utilizing
                  a machine-learning model
                </p>
              </div>
              <div className={styles.singleprojectaim}>
                <h2>3</h2>
                <p>
                  Provide a solution to a persistent problem in data
                  transmissions and make a positive impact on future satellite
                  communication
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutthecompetition}>
          <div className={styles.aboutthecompetitioncontent}>
            <h3>About the Competition</h3>
            <p>
              UW ASTRA is participating in the Canadian Stratospheric Balloon
              Experiment, a premier competition for Canadian post-secondary
              students. Organized by SEDS Canada in collaboration with the
              Canadian Space Agency (CSA), this annual challenge invites
              students to design, build and test small scientific experiments to
              be flown aboard high-altitude balloons. Our team has been selected
              to design, build, and launch our experiment aboard a high-altitude
              balloon, reaching up to 35 km to test it in near-space conditions.
              For more information, check out the official website.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
