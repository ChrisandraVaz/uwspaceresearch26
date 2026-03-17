import Footer from "./footer";

import ProjectHeader from "./components/ProjectHeader";
import wsstBg from "./assets/wsstbg2.png";

import styles from "./Astra.module.css";
import { Team } from "./team";

export default function Wsst() {
  return (
    <>
      <div className={styles.astraprojectcontainer}>
        <ProjectHeader
          title="WSST"
          subtitle="Waterloo Space Soldering Team"
          backgroundImage={wsstBg}
        />
        <div className={styles.intro}>
          <div className={styles.introleft}>
            <p>
              WSST is designing an automated centrifuge soldering device to test
              whether soldering in microgravity can be improved using simulated
              gravity. The experiment advances our previous centrifuge concept
              from melting solder samples to performing functional
              component-level soldering on printed circuit boards.
            </p>
          </div>
          <div className={styles.introright}>
            <h4>Time Frame</h4>
            <p>November 2025 - August 2026</p>
          </div>
        </div>
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Project Goals</h3>
            <h5>Problem Statement</h5>
            <div className={styles.problemstatement}>
              <h5>
                Soldering in microgravity produces joints with increased porosity
                due to the absence of buoyant forces, compromising mechanical
                strength and electrical conductivity.
              </h5>
            </div>
          </div>
          <div className={styles.projectgoalssection4}>
            <h5>The science behind it:</h5>
            <p>
              Soldering is a method of joining metal components by melting a
              filler metal, known as solder, and allowing it to flow into the
              joint. Under Earth's gravity, molten solder undergoes natural
              convection, and buoyant forces help remove trapped gas bubbles
              during solidification. In microgravity, these forces are absent, so
              gas bubbles remain trapped, creating internal voids that weaken the
              joint. Our experiment uses a centrifuge to generate artificial
              gravity during the soldering process, aiming to restore these
              beneficial forces and produce higher-quality solder joints.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <h5>Through WSST, we aim to:</h5>
            <div className={styles.projectaim}>
              <div className={styles.singleprojectaim}>
                <h2>1</h2>
                <p>
                  Validate an automated centrifuge soldering device capable of
                  attaching electronic components onto PCBs with precision and
                  repeatability in microgravity
                </p>
              </div>
              <div className={styles.singleprojectaim}>
                <h2>2</h2>
                <p>
                  Demonstrate reduced porosity in solder joints by simulating
                  varying gravity levels (0G, 1G, 3G, 5G) through controlled
                  centrifuge rotation
                </p>
              </div>
              <div className={styles.singleprojectaim}>
                <h2>3</h2>
                <p>
                  Evaluate thermal performance and demonstrate successful
                  formation of electrically functional solder joints on PCBs in
                  near-zero gravity conditions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutthecompetition}>
          <div className={styles.aboutthecompetitioncontent}>
            <h3>About the Competition</h3>
            <p>
              WSST is participating in CAN-RGX 9, a premier reduced gravity
              experiment competition for Canadian post-secondary students.
              Organized by SEDS Canada in collaboration with the Canadian Space
              Agency (CSA) and the National Research Council (NRC), this
              challenge invites students to design, build, and test experiments
              aboard the NRC's Falcon 20 aircraft during parabolic flight.
              <br />
              <br />
              Our team was selected in November 2025 and will fly our experiment
              in July 2026 aboard the modified Falcon 20, which provides periods
              of microgravity lasting 20-30 seconds per parabola.
              <br />
              <br />
              For more information, check out the{" "}
              <a href="https://www.seds.ca/can-rgx/" target="_blank">
                official website.
              </a>
            </p>
          </div>
        </div>
        <div className={styles.teamSection}>
          <h3>Meet the Team</h3>
          <Team />
        </div>
      </div>
      <Footer />
    </>
  );
}
