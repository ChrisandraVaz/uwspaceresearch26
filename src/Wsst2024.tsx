import Footer from "./footer";

import ProjectHeader from "./components/ProjectHeader";
import wsstBg from "./assets/wsstbg2.png";

import styles from "./Astra.module.css";
import wsstStyles from "./Wsst.module.css";
import w24 from "./Wsst2024.module.css";
import { TeamGrid, wsst2024Team } from "./team";

// Solder comparison images (reused)
import solderLowVoid from "./assets/wsst/solder-low-void.jpg";
import solderHighVoid from "./assets/wsst/solder-high-void.jpg";

// 2023-2024 project photos
import imgCentrifuge from "./assets/wsst2024/centrifuge-assembly.png";
import imgCentrifugeFinal from "./assets/wsst2024/centrifuge-final.png";
import imgModule from "./assets/wsst2024/centrifuge-module-build.jpg";
import imgHeater from "./assets/wsst2024/kapton-heater-module.jpg";
import imgTestBench from "./assets/wsst2024/test-bench.png";
import imgMachiningBandsaw from "./assets/wsst2024/machining-bandsaw.jpg";
import imgMachiningMill from "./assets/wsst2024/machining-mill.jpg";
import imgThermalTest from "./assets/wsst2024/thermal-test.png";

export default function Wsst2024() {
  return (
    <>
      <div className={`${styles.astraprojectcontainer} ${wsstStyles.wsstPage}`}>
        <ProjectHeader
          title="WSST 2023-2024"
          subtitle="Waterloo Space Soldering Team — CAN-RGX"
          backgroundImage={wsstBg}
        />

        {/* Intro */}
        <div className={styles.intro}>
          <div className={styles.introleft}>
            <p>
              The inaugural WSST project designed, built, and flew a centrifuge
              soldering experiment aboard the National Research Council's
              Falcon 20 aircraft during the CAN-RGX parabolic flight campaign.
              The experiment tested whether simulating gravity with a
              centrifuge could improve the quality of solder joints formed in
              microgravity.
            </p>
          </div>
          <div className={styles.introright}>
            <h4>Time Frame</h4>
            <p>Sept 2023 - July 2024</p>
          </div>
        </div>

        {/* Hero photo — finished centrifuge */}
        <div className={w24.heroPhoto}>
          <img
            src={imgCentrifuge}
            alt="Final assembled WSST centrifuge with SEDS logo"
          />
          <p className={w24.caption}>
            Final assembled centrifuge during integration testing.
          </p>
        </div>

        {/* Quick stats */}
        <div className={w24.statsRow}>
          <div className={w24.statCard}>
            <h2>400+</h2>
            <p>Solder samples</p>
          </div>
          <div className={w24.statCard}>
            <h2>8</h2>
            <p>Soldering modules</p>
          </div>
          <div className={w24.statCard}>
            <h2>600 W</h2>
            <p>Power budget</p>
          </div>
          <div className={w24.statCard}>
            <h2>20-30 s</h2>
            <p>Microgravity per parabola</p>
          </div>
        </div>

        {/* Project Goals */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Project Goals</h3>
            <h5>Problem Statement</h5>
            <div className={styles.problemstatement}>
              <h5>
                Solder joints formed in microgravity suffer from increased
                interior porosity because buoyant forces on flux and escaping
                gases are absent, weakening mechanical strength and electrical
                conductivity.
              </h5>
            </div>
          </div>

          <div className={styles.projectgoalssection4}>
            <h5>The science behind it:</h5>
            <p>
              Under Earth's gravity, molten solder undergoes natural
              convection, and buoyant forces help lift trapped gas bubbles out
              of the joint during solidification. In microgravity, these forces
              vanish, so gas bubbles remain trapped and form voids inside the
              joint. Our experiment used a centrifuge to generate artificial
              gravity during the melt, aiming to restore the natural buoyant
              forces and produce higher-quality solder joints.
            </p>
            <div className={wsstStyles.solderComparison}>
              <div className={wsstStyles.solderComparisonItem}>
                <img
                  src={solderLowVoid}
                  alt="Solder joint cross-section with low void percentage"
                />
                <p>Low void percentage (Earth gravity)</p>
              </div>
              <div className={wsstStyles.solderComparisonItem}>
                <img
                  src={solderHighVoid}
                  alt="Solder joint cross-section with high void percentage"
                />
                <p>High void percentage (microgravity)</p>
              </div>
            </div>
          </div>

          <div className={styles.projectgoalssection4}>
            <h5>Hypothesis:</h5>
            <p>
              In a microgravity environment, solder joints formed inside a
              spinning centrifuge will experience centrifugal acceleration that
              mimics gravity, allowing the solder to solidify with quality
              comparable to joints soldered on Earth.
            </p>
          </div>

          <div className={styles.projectgoalssection5}>
            <h5>Through WSST 2023-2024, we aimed to:</h5>
            <div className={styles.projectaim}>
              <div className={styles.singleprojectaim}>
                <h2>1</h2>
                <p>
                  Demonstrate centrifuge operation in microgravity and verify
                  its ability to produce artificial gravity via onboard RPM
                  and accelerometer data
                </p>
              </div>
              <div className={styles.singleprojectaim}>
                <h2>2</h2>
                <p>
                  Quantify the effect of centrifugal force on microgravity
                  solder joint quality through void percentage and electrical
                  continuity measurements
                </p>
              </div>
              <div className={styles.singleprojectaim}>
                <h2>3</h2>
                <p>
                  Compare three sample populations — centrifuge microgravity,
                  non-centrifuge microgravity, and Earth control — to isolate
                  the effect of artificial gravity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experiment Design */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.experimentOverview}>
            <h3>Experiment Design</h3>
            <p>
              The 2023-2024 experiment melted solder paste samples using
              Kapton-polyimide resistive heaters bonded to copper foil. Eight
              soldering modules, each carrying 50 solder paste points, were
              arranged vertically around the circumference of a cylindrical
              centrifuge — yielding over 400 samples and more than 125 joints
              per comparison population.
            </p>

            {/* Heater module photo */}
            <div className={w24.sideBySide}>
              <div className={w24.photoCard}>
                <img
                  src={imgHeater}
                  alt="Kapton polyimide heater film bonded to copper foil mounted in a stud fixture"
                />
                <p className={w24.caption}>
                  A single soldering module: Kapton heater film bonded to
                  copper foil, held between threaded studs.
                </p>
              </div>
              <div className={w24.photoCard}>
                <img
                  src={imgThermalTest}
                  alt="FLIR thermal camera capturing heater module at 168 degrees C"
                />
                <p className={w24.caption}>
                  FLIR thermal imaging verifies the heater reaches melt
                  temperature (~168 °C) within seconds.
                </p>
              </div>
            </div>

            <div className={wsstStyles.experimentDetails}>
              <div className={wsstStyles.experimentDetailCard}>
                <h5>Heating Method</h5>
                <p>
                  30 W Kapton-polyimide resistive heater film bonded to copper
                  foil, with low-temperature solder paste arrayed on top.
                  Thermistor-based closed-loop temperature control.
                </p>
              </div>
              <div className={wsstStyles.experimentDetailCard}>
                <h5>Sample Groups</h5>
                <p>
                  Group 1: Centrifuge in microgravity. Group 2: No centrifuge
                  in microgravity. Group 3: Earth gravity control.
                </p>
              </div>
              <div className={wsstStyles.experimentDetailCard}>
                <h5>Total Samples</h5>
                <p>
                  400+ solder paste samples across 8 modules (50 paste points
                  per module), with 125+ joints in each gravity population.
                </p>
              </div>
              <div className={wsstStyles.experimentDetailCard}>
                <h5>Analysis</h5>
                <p>
                  Electrical conductivity measured via digital multimeter.
                  Cross-sectional void percentage analyzed with compound
                  microscopy and MATLAB image processing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mechanical Design */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Mechanical Design</h3>
            <p>
              The entire system was housed inside a 50 × 50 × 50 cm Pelican
              case. A brushless DC gear motor drove the cylindrical centrifuge
              through a shaft coupler, while roller bearings on three axes
              (rated 45 lb each) carried the gravitational loads with a safety
              factor greater than 6×. An aluminum-extrusion exostructure
              supported the power electronics and routed cables to a slip
              ring. A 99.97% soldering-grade filter sat atop the centrifuge to
              capture lead, cadmium, and arsenic fumes.
            </p>
          </div>

          {/* Build / fabrication gallery */}
          <div className={w24.fabGrid}>
            <div className={w24.photoCard}>
              <img
                src={imgMachiningBandsaw}
                alt="Team member cutting aluminum on a bandsaw"
              />
              <p className={w24.caption}>
                Bandsawing aluminum stock for the exostructure.
              </p>
            </div>
            <div className={w24.photoCard}>
              <img
                src={imgMachiningMill}
                alt="Drilling an aluminum extrusion on a milling machine"
              />
              <p className={w24.caption}>
                Milling mounting holes into the aluminum extrusion frame.
              </p>
            </div>
            <div className={w24.photoCard}>
              <img
                src={imgModule}
                alt="Team member assembling a soldering module inside the centrifuge"
              />
              <p className={w24.caption}>
                Loading soldering modules into the 3D-printed centrifuge
                drum.
              </p>
            </div>
          </div>
        </div>

        {/* Electrical & Software */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.systemDiagrams}>
            <h3>Electrical & Software Systems</h3>
            <p>
              The avionics stack stayed under the Falcon 20's 600 W AC (115 V)
              power budget. An Arduino drove the motor while an STM32
              microcontroller controlled the eight soldering modules via
              closed-loop thermistor feedback. An accelerometer recorded
              centrifuge acceleration in real time throughout each parabola,
              and all sensor data was logged on-board for post-flight
              analysis.
            </p>
          </div>

          <div className={w24.sectionPhotoFull}>
            <img
              src={imgTestBench}
              alt="Bench-top integration test with centrifuge mounted on exostructure and Arduino control electronics"
            />
            <p className={w24.caption}>
              Full bench-top integration test — centrifuge on exostructure,
              motor driver, and Arduino-based control electronics wired end to
              end.
            </p>
          </div>
        </div>

        {/* Flight Procedure */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>On-Aircraft Procedure</h3>
            <p>
              The automated mission profile kept crew interaction to a single
              button press per parabola.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <div className={wsstStyles.nextStepsGrid}>
              <div className={wsstStyles.nextStepItem}>
                <span className={wsstStyles.nextStepNumber}>1</span>
                <p>Level flight: pre-heat samples to 95 °C (~15 s)</p>
              </div>
              <div className={wsstStyles.nextStepItem}>
                <span className={wsstStyles.nextStepNumber}>2</span>
                <p>Start centrifuge rotation before entering microgravity</p>
              </div>
              <div className={wsstStyles.nextStepItem}>
                <span className={wsstStyles.nextStepNumber}>3</span>
                <p>
                  At microgravity onset, ramp heaters to full melt temperature;
                  shut off automatically 5 s after melt
                </p>
              </div>
              <div className={wsstStyles.nextStepItem}>
                <span className={wsstStyles.nextStepNumber}>4</span>
                <p>
                  Solder solidifies within ~20 s; log RPM, acceleration, and
                  sample temperatures
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Outreach */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Outreach</h3>
            <p>
              Alongside the flight campaign, WSST partnered with the
              University of Waterloo Women in Engineering chapter for
              Introduce a Girl to Engineering Day on March 7, 2024. The team
              ran a hands-on centrifuge-building workshop for elementary
              school students and a soldering workshop for high schoolers,
              tying both activities back to the physics behind the CAN-RGX
              experiment.
            </p>
          </div>
        </div>

        {/* Final showcase photo */}
        <div className={w24.heroPhoto}>
          <img
            src={imgCentrifugeFinal}
            alt="Final WSST centrifuge on display at the CAN-RGX final event"
          />
          <p className={w24.caption}>
            The completed centrifuge on display at the CAN-RGX final event.
          </p>
        </div>

        {/* Competition */}
        <div className={styles.aboutthecompetition}>
          <div className={styles.aboutthecompetitioncontent}>
            <h3>About the Competition</h3>
            <p>
              CAN-RGX (Canadian Reduced Gravity Experiment) is a premier
              reduced-gravity experiment competition for Canadian
              post-secondary students. Organized by SEDS Canada in partnership
              with the Canadian Space Agency and the National Research
              Council, the program invites student teams to design, build,
              and fly experiments aboard the NRC's modified Falcon 20
              aircraft.
              <br />
              <br />
              WSST's inaugural team was selected for CAN-RGX and flew the
              centrifuge soldering experiment in July 2024 from Longueuil,
              Quebec. Each parabola delivered 20-30 seconds of microgravity
              for the experiment to execute its autonomous mission profile.
              <br />
              <br />
              For more information, check out the{" "}
              <a href="https://www.seds.ca/can-rgx/" target="_blank">
                official website.
              </a>
            </p>
          </div>
        </div>

        {/* Team */}
        <div className={styles.teamSection}>
          <h3>WSST 2023-2024</h3>
          <TeamGrid members={wsst2024Team} />
        </div>
      </div>
      <Footer />
    </>
  );
}
