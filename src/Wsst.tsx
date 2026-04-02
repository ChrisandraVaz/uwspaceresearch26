import Footer from "./footer";

import ProjectHeader from "./components/ProjectHeader";
import wsstBg from "./assets/wsstbg2.png";

import styles from "./Astra.module.css";
import wsstStyles from "./Wsst.module.css";
import { Team } from "./team";

// Solder comparison images
import solderLowVoid from "./assets/wsst/solder-low-void.jpg";
import solderHighVoid from "./assets/wsst/solder-high-void.jpg";

// WSST 2025-2026 photos
import wsstMachining from "./assets/wsst/wsst-machining.png";
import wsstPayload from "./assets/wsst/wsst-payload.png";
import wsstFalcon20 from "./assets/wsst/wsst-falcon20.png";
import wsstElectronics from "./assets/wsst/wsst-electronics.png";

export default function Wsst() {
  return (
    <>
      <div className={`${styles.astraprojectcontainer} ${wsstStyles.wsstPage}`}>
        <ProjectHeader
          title="WSST"
          subtitle="Waterloo Space Soldering Team"
          backgroundImage={wsstBg}
        />

        {/* Intro */}
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

        {/* Contact */}
        <div className={wsstStyles.contactBanner}>
          <p>
            Interested in our work or want to collaborate? Reach out to us at{" "}
            <a href="mailto:uwspacesoldering@gmail.com">
              uwspacesoldering@gmail.com
            </a>
          </p>
        </div>

        {/* Project Goals */}
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
              Performing component-level soldering on PCBs while applying
              controlled centrifugal acceleration will generate an effective body
              force that mimics gravity, promoting gas bubble migration and
              improving solder wetting during joint formation. Solder joints
              produced under increasing centrifugal acceleration (0G, 1G, 3G, 5G)
              are expected to exhibit reduced porosity, stronger mechanical
              adhesion, and improved electrical continuity compared to those
              soldered without centrifugal acceleration.
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

        {/* Long-Term Goals */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.longTermGoals}>
            <h3>Long-Term Goals</h3>
            <p>
              The ability to conduct soldering in microgravity environments would
              enable in-space electronics repairs, leading to significant cost and
              mass savings during launches. Currently, faulty electronic
              components aboard the International Space Station and other
              spacecraft must either be replaced with pre-launched spares or sent
              back to Earth for repair -- both extremely expensive and
              logistically challenging options.
            </p>
            <p>
              By proving that centrifugal soldering can produce reliable joints in
              microgravity, WSST aims to lay the groundwork for a future where
              astronauts can perform on-orbit electronics maintenance and repair.
              This capability would be critical for long-duration missions to the
              Moon, Mars, and beyond, where resupply from Earth is impractical.
              Reliable in-space soldering would reduce the need to carry excess
              spare parts, lowering launch mass and costs while increasing mission
              resilience and self-sufficiency.
            </p>
          </div>
        </div>

        {/* Experiment Design */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.experimentOverview}>
            <h3>Experiment Design</h3>
            <p>
              The design utilizes two miniature automated Pinecil V2 soldering
              irons mounted on a central column inside the centrifuge, facing
              radially outwards. Eight PCBs are mounted around the circumference,
              each populated with a single resistor. Solder wire is fed through
              integrated stepper-motor-driven feeders, while thermocouples provide
              real-time thermal feedback. Three sample populations are compared to
              evaluate the effect of centrifugal acceleration on joint quality.
            </p>
            <div className={wsstStyles.experimentDetails}>
              <div className={wsstStyles.experimentDetailCard}>
                <h5>Soldering Method</h5>
                <p>
                  Pinecil V2 Smart Mini Portable Soldering Iron with Sn60/Pb40
                  rosin-core solder wire (0.81mm diameter). Melting point:
                  183-191 degrees C.
                </p>
              </div>
              <div className={wsstStyles.experimentDetailCard}>
                <h5>Sample Groups</h5>
                <p>
                  Group 1: Centrifuge in microgravity (1G/3G/5G). Group 2: No
                  centrifuge in microgravity (0G). Group 3: Earth gravity control
                  (1G).
                </p>
              </div>
              <div className={wsstStyles.experimentDetailCard}>
                <h5>Total Samples</h5>
                <p>
                  64 solder joints across 16 parabolas -- 4 samples per parabola
                  (2 irons x 2 joints each), 16 samples per gravity group.
                </p>
              </div>
              <div className={wsstStyles.experimentDetailCard}>
                <h5>Analysis</h5>
                <p>
                  Void fraction measured via micro-CT scanning. Electrical
                  continuity, contact resistance, and mechanical shear testing
                  performed post-flight.
                </p>
              </div>
            </div>
          </div>

          {/* Payload photo */}
          <div className={wsstStyles.sectionPhoto}>
            <img
              src={wsstPayload}
              alt="WSST payload experiment inside Pelican case"
            />
            <p>The WSST payload assembly inside the Pelican case enclosure</p>
          </div>
        </div>

        {/* Mechanical Design */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Mechanical Design</h3>
            <p>
              The entire system is housed within a Pelican case and designed to
              comply with CAN-RGX 9 safety, mass, and power requirements --
              remaining within a 45 kg mass constraint and 600 W peak power limit.
              The centrifuge is spun by a 24 VDC BLDC motor through a central
              shaft, with slip rings transferring electrical connections to the
              rotating components inside. The mechanical subsystem includes
              precision-machined aluminum components, 3D-printed fixtures, and a
              robust exostructure that supports the centrifuge from above and
              below.
            </p>
          </div>

          {/* Machining photo */}
          <div className={wsstStyles.sectionPhoto}>
            <img
              src={wsstMachining}
              alt="WSST team member machining components on a lathe"
            />
            <p>A team member machining centrifuge components on the lathe</p>
          </div>
        </div>

        {/* Electrical & Software */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.systemDiagrams}>
            <h3>Electrical & Software Systems</h3>
            <p>
              The electrical system converts 115 VAC aircraft power to regulated
              24 VDC, distributed through a 36-channel slip ring to the rotating
              centrifuge assembly. An STM32 microcontroller serves as the central
              controller, coordinating BLDC motor speed regulation, soldering iron
              temperature control via PID loops, stepper motor actuation for wire
              feeding and column rotation, and real-time thermocouple data
              acquisition. Custom PCBs handle power distribution and motor
              driving, while the software architecture implements a state-machine
              design that sequences through soldering operations autonomously
              during each parabola.
            </p>
          </div>

          {/* Electronics photo */}
          <div className={wsstStyles.sectionPhoto}>
            <img
              src={wsstElectronics}
              alt="WSST team member working on electronics and wiring"
            />
            <p>Electronics integration and testing of the control system</p>
          </div>
        </div>

        {/* Preliminary Testing */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Preliminary Testing</h3>
            <p>
              The team has built and tested several key prototypes to validate
              design concepts before full system integration. This includes a
              linear actuator soldering test jig for determining optimal
              parameters, a wire feeder prototype using MIG welding wheels driven
              by stepper motors, and tip sled prototypes for secure iron mounting
              with heat-resistant insulation.
            </p>
          </div>
        </div>

        {/* Ground Test Plan */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Ground Test Plan</h3>
            <p>
              Before flight, the system undergoes a four-phase ground test
              campaign to validate mechanical integrity, electrical systems,
              centrifuge operation, and full mission profile execution.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <div className={wsstStyles.groundTestGrid}>
              <div className={wsstStyles.groundTestCard}>
                <div className={wsstStyles.groundTestCardHeader}>
                  Phase 1: Mechanical Tests
                </div>
                <div className={wsstStyles.groundTestCardContent}>
                  <p>
                    Fully assemble frame, mounts, and housing. Test main motor,
                    structural integrity of exostructure and motor mounts using
                    weights. Perform temperature cycling and apply weights to
                    the soldering assembly to mimic 5G acceleration force.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.groundTestCard}>
                <div className={wsstStyles.groundTestCardHeader}>
                  Phase 2: Electrical Tests
                </div>
                <div className={wsstStyles.groundTestCardContent}>
                  <p>
                    Connect the complete system -- motor control, heating PCB,
                    thermocouples, slip rings, and data acquisition -- to power.
                    Upload finalized firmware to STM32. Verify communication
                    with all subsystems including motor driver, heaters, encoder,
                    and temperature sensors.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.groundTestCard}>
                <div className={wsstStyles.groundTestCardHeader}>
                  Phase 3: Centrifuge Mechanism Tests
                </div>
                <div className={wsstStyles.groundTestCardContent}>
                  <p>
                    Place centrifuge inside the Pelican case. Run code for
                    irons, actuation, and motor control. Test centrifuge
                    rotation at desired RPM. Verify the heating mechanism
                    reaches target temperature and that solder samples melt
                    and cool within the established time.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.groundTestCard}>
                <div className={wsstStyles.groundTestCardHeader}>
                  Phase 4: Full System Test
                </div>
                <div className={wsstStyles.groundTestCardContent}>
                  <p>
                    Load samples and close the Pelican case. Run the entire
                    system using the start button to replicate the full mission
                    profile. All components activated as they would be in
                    flight. Data logged for storage. Analyze data to ensure
                    consistency with expected results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Challenges */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Engineering Design Challenges</h3>
            <p>
              Designing a centrifuge soldering system for microgravity introduces
              unique engineering challenges. Here are the key problems we
              identified and how we are solving them.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <div className={wsstStyles.challengesGrid}>
              <div className={wsstStyles.challengeCard}>
                <h5>Tip Alignment</h5>
                <span className={wsstStyles.challengeLabel}>Problem</span>
                <p className={wsstStyles.challengeProblem}>
                  Variations in soldering iron tip alignment may cause
                  insufficient heating of solder joints. The stepper motor
                  rotating the soldering assembly may skip steps, which cannot be
                  detected in open-loop control.
                </p>
                <span className={wsstStyles.challengeLabel}>Solution</span>
                <p className={wsstStyles.challengeSolution}>
                  Encoder mounted to the column rotation motor enables closed-loop
                  position control. PCB carriers have tapered mechanical alignment
                  guides positioned over each PCB. Tip sleds have yaw and pitch
                  adjustability to allow guides to correct tip position during
                  actuation.
                </p>
              </div>
              <div className={wsstStyles.challengeCard}>
                <h5>Heat & Fire Hazards</h5>
                <span className={wsstStyles.challengeLabel}>Problem</span>
                <p className={wsstStyles.challengeProblem}>
                  Heating sources (soldering irons) and electrical connections
                  inside an enclosed, rotating system may cause fire or burn
                  hazards during flight.
                </p>
                <span className={wsstStyles.challengeLabel}>Solution</span>
                <p className={wsstStyles.challengeSolution}>
                  Flammable materials are avoided near iron tips -- fiberglass
                  cloth and metal components are used exclusively. Iron tips are
                  insulated from mounts by fiberglass insulation. Housing around
                  tips prevents accidental contact when exchanging PCB carriers.
                  Irons are actively cooled during level flight.
                </p>
              </div>
              <div className={wsstStyles.challengeCard}>
                <h5>Center of Gravity Balancing</h5>
                <span className={wsstStyles.challengeLabel}>Problem</span>
                <p className={wsstStyles.challengeProblem}>
                  The large rotating soldering assembly makes it difficult to
                  predetermine the center of gravity location. An off-center CoG
                  will cause significant vibrations at high RPM.
                </p>
                <span className={wsstStyles.challengeLabel}>Solution</span>
                <p className={wsstStyles.challengeSolution}>
                  Designated locations in the design accommodate counterweights.
                  The centrifuge will be balanced after assembly using a method
                  similar to tire balancing weights. An accelerometer will be
                  mounted inside during ground tests to evaluate vibrations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Next Steps</h3>
            <p>
              The team is actively working toward the July 2026 flight campaign
              with these key priorities.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <div className={wsstStyles.nextStepsGrid}>
              <div className={wsstStyles.nextStepItem}>
                <span className={wsstStyles.nextStepNumber}>1</span>
                <p>
                  Assemble and test the soldering test jig for preliminary
                  soldering parameter results
                </p>
              </div>
              <div className={wsstStyles.nextStepItem}>
                <span className={wsstStyles.nextStepNumber}>2</span>
                <p>
                  Finalize soldering assembly design and produce prototype
                  soldering assembly
                </p>
              </div>
              <div className={wsstStyles.nextStepItem}>
                <span className={wsstStyles.nextStepNumber}>3</span>
                <p>
                  Design and implement custom PCBs for heating and motor power
                  &amp; control
                </p>
              </div>
              <div className={wsstStyles.nextStepItem}>
                <span className={wsstStyles.nextStepNumber}>4</span>
                <p>
                  Continue implementing heating and actuation interfaces and
                  integrate into STM32 firmware
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competition */}
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

        {/* Falcon 20 photo */}
        <div className={wsstStyles.sectionPhotoWide}>
          <img
            src={wsstFalcon20}
            alt="WSST team visiting the NRC Falcon 20 aircraft"
          />
          <p>The WSST team visiting the NRC Falcon 20 aircraft used for parabolic flight</p>
        </div>

        {/* Team */}
        <div className={styles.teamSection}>
          <h3>WSST 2025-2026</h3>
          <Team />
        </div>
      </div>
      <Footer />
    </>
  );
}
