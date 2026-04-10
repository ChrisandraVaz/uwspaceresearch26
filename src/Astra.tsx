import styles from "./Astra.module.css";
import wsstStyles from "./Wsst.module.css";

import astraBg from "./assets/astrabg2.png";

import satelliteIcon from "./assets/satellite.svg";
import researcherIcon from "./assets/researcher.svg";
import astronautIcon from "./assets/astronaut.svg";

import Footer from "./footer.tsx";
import ProjectsHeader from "./components/ProjectHeader.tsx";
import { TeamGrid, astraTeam } from "./team.tsx";

export default function Astra() {
  return (
    <>
      <div className={styles.astraprojectcontainer}>
        <ProjectsHeader
          title="ASTRA"
          subtitle="Adaptive Signal Transmission and Real-time Analytics"
          backgroundImage={astraBg}
        />
        <div className={wsstStyles.contactBanner}>
          <p>
            Interested in our work or want to collaborate? Reach out to us at{" "}
            <a href="mailto:uwspacesoldering@gmail.com">
              uwspacesoldering@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.intro}>
          <div className={styles.introleft}>
            <p>
              ASTRA is a student-built experiment focused on improving
              communication in high-altitude and space environments. Our team
              developed a system that uses machine learning to filter out noise
              and improve the clarity of transmitted signals in real-time,
              creating smarter communication systems that adapt to changing
              conditions instead of relying only on fixed filtering methods.
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
              When signals are transmitted through the atmosphere or in space,
              they can be disrupted by cosmic radiation and environmental noise,
              which can degrade the signal and lead to data loss. This is a
              major challenge for satellite communications, atmospheric research,
              and future space missions that rely on accurate real-time data.
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
              ASTRA was part of the Canadian Stratospheric Balloon Experiment
              (CAN-SBX), organized by SEDS Canada in collaboration with the
              Canadian Space Agency. In August 2025, our payload launched from
              Timmins, Ontario on a high-altitude balloon and reached
              approximately 27 km above Earth, where we tested our system in
              near-space conditions.
              <br></br>
              <br></br>For more information, check out the{" "}
              <a href="https://www.seds.ca/can-sbx/" target="_blank">
                official website.
              </a>
            </p>
          </div>
        </div>
        <div className={styles.currentstatus}>
          <div className={styles.currentstatuscontent}>
            <h3>Current Status</h3>
            <p>
              Our team is currently analyzing the flight data and preparing a
              research paper submitted for the International Astronautical
              Congress (IAC) 2026. The goal is to share our results and
              demonstrate how adaptive machine learning techniques could help
              improve communication systems for future space missions.
            </p>
          </div>
        </div>
        <div className={styles.teamSection}>
          <h3>Meet the Team</h3>
          <TeamGrid members={astraTeam} />
        </div>
      </div>
      <Footer />
    </>
  );
}
