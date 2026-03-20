import Footer from "./footer";

import ProjectHeader from "./components/ProjectHeader";
import wsstBg from "./assets/wsstbg2.png";

import styles from "./Astra.module.css";
import wsstStyles from "./Wsst.module.css";
import { Team } from "./team";

// Solder comparison images
import solderLowVoid from "./assets/wsst/solder-low-void.jpg";
import solderHighVoid from "./assets/wsst/solder-high-void.jpg";

// CAD / design images
import centrifugeAssembly from "./assets/wsst/centrifuge-assembly.png";
import centrifugeFront from "./assets/wsst/centrifuge-front.png";
import pelicanCaseLayout from "./assets/wsst/pelican-case-layout.png";
import solderingAssembly from "./assets/wsst/soldering-assembly.png";
import wireFeederCad from "./assets/wsst/wire-feeder-cad.png";
import tipSledCad from "./assets/wsst/tip-sled-cad.png";
import pcbCarrier from "./assets/wsst/pcb-carrier.png";

// Prototype images
import wireFeederPrototype from "./assets/wsst/wire-feeder-prototype.png";
import tipSledPrototype from "./assets/wsst/tip-sled-prototype.png";
import testJigCad from "./assets/wsst/test-jig-cad.png";

// System diagrams
import electricalDiagram from "./assets/wsst/electrical-diagram.png";
import softwareDiagram from "./assets/wsst/software-diagram.png";

// Design challenge images
import alignmentGuide from "./assets/wsst/alignment-guide.png";
import heatInsulation from "./assets/wsst/heat-insulation.png";
import cogBalancing from "./assets/wsst/cog-balancing.png";

// Budget images
import fundingTracking from "./assets/wsst/funding-tracking.png";
import budgetSheet from "./assets/wsst/budget-sheet.png";

export default function Wsst() {
  return (
    <>
      <div className={styles.astraprojectcontainer}>
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
                  183-191°C.
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
                  64 solder joints across 16 parabolas — 4 samples per parabola
                  (2 irons × 2 joints each), 16 samples per gravity group.
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

          {/* Flight Plan */}
          <div className={wsstStyles.flightPlan}>
            <h3>Flight Plan</h3>
            <table className={wsstStyles.flightTable}>
              <thead>
                <tr>
                  <th>Flight Maneuver</th>
                  <th>Event</th>
                  <th>Samples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st Parabola</td>
                  <td>Centrifuge simulates 5G</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>2nd Parabola</td>
                  <td>Centrifuge simulates 3G</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>3rd Parabola</td>
                  <td>Centrifuge simulates 1G</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>4th Parabola</td>
                  <td>Centrifuge not spinning (0G)</td>
                  <td>4</td>
                </tr>
                <tr className={wsstStyles.levelFlight}>
                  <td>Level Flight</td>
                  <td>Swap PCB carriers (new 8 PCBs)</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>5th Parabola</td>
                  <td>Centrifuge simulates 5G</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>6th Parabola</td>
                  <td>Centrifuge simulates 3G</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>7th Parabola</td>
                  <td>Centrifuge simulates 1G</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>8th Parabola</td>
                  <td>Centrifuge not spinning (0G)</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Science Traceability Matrix */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Science Traceability Matrix</h3>
            <p>
              The mission objectives are mapped to specific measurements,
              instruments, and requirements to ensure scientific rigor and
              traceability throughout the experiment.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <table className={wsstStyles.stmTable}>
              <thead>
                <tr>
                  <th>Scientific Objective</th>
                  <th>Measurement</th>
                  <th>Instrument</th>
                  <th>Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Demonstrate ability of centrifuge to produce artificial
                    gravity in microgravity
                  </td>
                  <td>
                    Measure RPM of rotating centrifuge
                  </td>
                  <td>Tachometer, Motor Encoder</td>
                  <td>
                    Range: 5–100,000 rpm; Accuracy: 0.05%; Encoder: 1000 PPR
                  </td>
                </tr>
                <tr>
                  <td>
                    Demonstrate thermal performance for soldering
                  </td>
                  <td>
                    Measure soldering iron tip temperature during operation
                  </td>
                  <td>External thermocouple, Built-in tip thermocouple</td>
                  <td>
                    Range: 100–500°C; Accuracy: ±1°C; Resolution: 0.1°C;
                    Response: ≤0.5s
                  </td>
                </tr>
                <tr>
                  <td>
                    Quantify effect of centrifugal forces on solder joints
                  </td>
                  <td>Visual inspection and porosity analysis</td>
                  <td>Optical Microscope, CT scan, Image Processing (MATLAB)</td>
                  <td>
                    18MP camera; 40× magnification; calculate joint porosity
                    percentage
                  </td>
                </tr>
                <tr>
                  <td>
                    Quantify effect of centrifugal forces on solder joints
                  </td>
                  <td>Electrical continuity and contact resistance testing</td>
                  <td>Digital Multimeter, Oscilloscope, Power Supply</td>
                  <td>
                    DMM: DC/AC voltage, current, resistance, continuity; PSU:
                    0–30V DC, 0–1A
                  </td>
                </tr>
                <tr>
                  <td>
                    Quantify effect of centrifugal forces on solder joints
                  </td>
                  <td>Mechanical shear testing (component-to-PCB)</td>
                  <td>Bond/shear tester, Precision load cell</td>
                  <td>
                    Standard performance metrics; student-accessible equipment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mechanical Design */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Mechanical Design</h3>
            <p>
              The entire system is housed within a Pelican case and designed to
              comply with CAN-RGX 9 safety, mass, and power requirements —
              remaining within a 45 kg mass constraint and 600 W peak power limit.
              The centrifuge is spun by a 24 VDC BLDC motor through a central
              shaft, with slip rings transferring electrical connections to the
              rotating components inside.
            </p>
          </div>

          <div className={styles.projectgoalssection5}>
            <div className={wsstStyles.designGallery}>
              <div className={wsstStyles.designCard}>
                <img
                  src={centrifugeAssembly}
                  alt="Centrifuge assembly CAD model"
                />
                <div className={wsstStyles.designCardContent}>
                  <h5>Centrifuge Assembly</h5>
                  <p>
                    Contains eight sample PCBs around the perimeter, a rotating
                    central column with soldering assembly, and P100 particulate
                    filters for fume management. Supported from above and below
                    by an aluminum extrusion exostructure.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.designCard}>
                <img
                  src={centrifugeFront}
                  alt="Centrifuge front cross-section view"
                />
                <div className={wsstStyles.designCardContent}>
                  <h5>Cross-Section View</h5>
                  <p>
                    Front view showing the soldering assembly mounted on the
                    central column, motor mount below, and the exostructure
                    providing structural support for the rotating system.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.designCard}>
                <img
                  src={solderingAssembly}
                  alt="Soldering assembly mechanism"
                />
                <div className={wsstStyles.designCardContent}>
                  <h5>Soldering Assembly</h5>
                  <p>
                    Servo-driven double rack and pinion mechanism extends iron
                    sleds outwards. A closed-loop stepper motor drives the central
                    column through a belt, rotating between PCB stations.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.designCard}>
                <img src={pcbCarrier} alt="PCB and brass wool carrier frame" />
                <div className={wsstStyles.designCardContent}>
                  <h5>PCB Carrier Frame</h5>
                  <p>
                    Eight PCBs with alignment guides arranged on two U-shaped
                    carrier frames. Brass wool tip cleaning stations placed
                    between every two sample PCBs for residual solder removal.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.designCard}>
                <img src={tipSledCad} alt="Tip sled CAD model" />
                <div className={wsstStyles.designCardContent}>
                  <h5>Tip Sleds</h5>
                  <p>
                    Securely hold soldering tips with fiberglass insulation. Slide
                    along guide rails with rack-driven actuation. Adjustable slots
                    allow yaw freedom for alignment guide correction.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.designCard}>
                <img src={wireFeederCad} alt="Wire feeder mechanism CAD" />
                <div className={wsstStyles.designCardContent}>
                  <h5>Wire Feeders</h5>
                  <p>
                    Compact 3D printer-style extruders with NEMA 8 stepper motors
                    and MIG welding wire-wheels. Solder wire fed through PTFE
                    tubing and brass nozzle for precise deposition at joint sites.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.designCard}>
                <img
                  src={pelicanCaseLayout}
                  alt="Pelican case layout showing all components"
                />
                <div className={wsstStyles.designCardContent}>
                  <h5>Pelican Case Layout</h5>
                  <p>
                    Houses the centrifuge assembly, replacement PCB carriers,
                    24 VDC power supply, and electronics housing with STM32 and
                    custom PCBs. Fully enclosed for flight safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Electrical & Software */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.systemDiagrams}>
            <h3>Electrical & Software Systems</h3>
            <p>
              Powered by 115 VAC aircraft outlet, converted to regulated 24 VDC.
              Slip rings transfer power and signals into the rotating centrifuge.
              An STM32 microcontroller coordinates motor control, heating
              regulation, and data acquisition across all subsystems.
            </p>
            <div className={wsstStyles.powerStats}>
              <div className={wsstStyles.powerStat}>
                <h4>415 W</h4>
                <span>Est. Max Power</span>
              </div>
              <div className={wsstStyles.powerStat}>
                <h4>~26.5 kg</h4>
                <span>Total System Mass</span>
              </div>
              <div className={wsstStyles.powerStat}>
                <h4>36</h4>
                <span>Slip Ring Channels</span>
              </div>
              <div className={wsstStyles.powerStat}>
                <h4>STM32</h4>
                <span>Microcontroller</span>
              </div>
            </div>
          </div>

          <div className={styles.projectgoalssection5}>
            <div className={wsstStyles.diagramGrid}>
              <div className={wsstStyles.diagramItem}>
                <img
                  src={electricalDiagram}
                  alt="Electrical system block diagram"
                />
                <p>Electrical system block diagram</p>
              </div>
              <div className={wsstStyles.diagramItem}>
                <img src={softwareDiagram} alt="Software architecture overview" />
                <p>Software architecture overview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preliminary Testing */}
        <div className={styles.projectgoals}>
          <div className={styles.projectgoalssection1}>
            <h3>Preliminary Testing</h3>
            <p>
              The team has built and tested several key prototypes to validate
              design concepts before full system integration.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <div className={wsstStyles.prototypingGallery}>
              <div className={wsstStyles.prototypeCard}>
                <img src={testJigCad} alt="Soldering parameter test jig CAD" />
                <div className={wsstStyles.prototypeCardContent}>
                  <h5>Soldering Test Jig</h5>
                  <p>
                    Linear actuator test jig used to determine optimal solder
                    wire length per joint and soldering time. Arduino-controlled
                    motor drives tip to PCB for a specified duration.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.prototypeCard}>
                <img
                  src={wireFeederPrototype}
                  alt="Wire feeder physical prototype"
                />
                <div className={wsstStyles.prototypeCardContent}>
                  <h5>Wire Feeder Prototype</h5>
                  <p>
                    First prototype successfully fed solder wire after adjusting
                    MIG wheel spacing and stepper driver current limits.
                    Intermittent feeding validated for soldering operation.
                  </p>
                </div>
              </div>
              <div className={wsstStyles.prototypeCard}>
                <img
                  src={tipSledPrototype}
                  alt="Tip sled initial prototype"
                />
                <div className={wsstStyles.prototypeCardContent}>
                  <h5>Tip Sled Prototype</h5>
                  <p>
                    Initial prototype demonstrating secure hold of the soldering
                    tip. Being refined for integration with the actuation system
                    and heat resistance testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Cycle Ground Test */}
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
                    Connect the complete system — motor control, heating PCB,
                    thermocouples, slip rings, and data acquisition — to power.
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
              identified and how we're solving them.
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
                <img
                  src={alignmentGuide}
                  alt="PCB alignment guide detail"
                  className={wsstStyles.challengeImg}
                />
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
                  Flammable materials are avoided near iron tips — fiberglass
                  cloth and metal components are used exclusively. Iron tips are
                  insulated from mounts by fiberglass insulation. Housing around
                  tips prevents accidental contact when exchanging PCB carriers.
                  Irons are actively cooled during level flight.
                </p>
                <img
                  src={heatInsulation}
                  alt="Tip sled with fiberglass insulation"
                  className={wsstStyles.challengeImg}
                />
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
                <img
                  src={cogBalancing}
                  alt="Tire balancing weight reference"
                  className={wsstStyles.challengeImg}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Flight Day Procedures */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.proceduresSection}>
            <h3>Flight Day Procedures</h3>
            <p>
              Three mission specialists and a ground crew follow detailed
              procedures across pre-flight, in-flight, and post-flight phases.
            </p>
          </div>
          <div className={styles.projectgoalssection5}>
            <div className={wsstStyles.procedureSteps}>
              <div className={wsstStyles.procedurePhase}>
                <div className={wsstStyles.procedurePhaseHeader}>Pre-Flight</div>
                <div className={wsstStyles.procedurePhaseContent}>
                  <ol>
                    <li>Open all required code, software, and monitoring systems</li>
                    <li>Run code to test actuators, irons, and sensors</li>
                    <li>Load samples into the centrifuge, clear prior test data</li>
                    <li>Confirm wiring for actuators, irons, and sensors</li>
                    <li>Ensure everything in Pelican case is fastened for flight</li>
                    <li>Close Pelican case, ensure computer is properly mounted</li>
                    <li>Notify flight staff that the experiment is ready</li>
                  </ol>
                </div>
              </div>
              <div className={wsstStyles.procedurePhase}>
                <div className={wsstStyles.procedurePhaseHeader}>In-Flight</div>
                <div className={wsstStyles.procedurePhaseContent}>
                  <ol>
                    <li>Connect laptop to Pelican case, run code to start actuators and irons</li>
                    <li>Validate iron temperatures via GUI during each parabola</li>
                    <li>Monitor thermocouple data collection throughout flight</li>
                    <li>Activate code for centrifuge speed changes between parabola sets</li>
                    <li>Swap PCB carriers during level flight periods</li>
                    <li>Observe solder samples for any abnormalities</li>
                    <li>Safely turn off actuators and irons after final parabola</li>
                  </ol>
                </div>
              </div>
              <div className={wsstStyles.procedurePhase}>
                <div className={wsstStyles.procedurePhaseHeader}>Post-Flight</div>
                <div className={wsstStyles.procedurePhaseContent}>
                  <ol>
                    <li>Allow samples adequate cooling time</li>
                    <li>Verify data was logged to computer locally</li>
                    <li>Shut off motors and irons, final temperature readings</li>
                    <li>Hit stop button to cut power to all components</li>
                    <li>Remain seated until safely on the ground</li>
                    <li>Notify staff that experiment is ready for removal</li>
                    <li>Open Pelican case and organize components for travel</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Power & Mass Budget Breakdown */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.systemDiagrams}>
            <h3>Power & Mass Budget</h3>
            <p>
              Detailed breakdown of power draw by component and mass distribution
              across mechanical and electrical subsystems.
            </p>
            <div className={wsstStyles.massBudget}>
              <div className={wsstStyles.massItem}>
                <h4>~20.5 kg</h4>
                <span>Mechanical</span>
              </div>
              <div className={wsstStyles.massItem}>
                <h4>~6 kg</h4>
                <span>Electrical</span>
              </div>
              <div className={wsstStyles.massItem}>
                <h4>~26.5 kg</h4>
                <span>Total</span>
              </div>
            </div>
            <table className={wsstStyles.powerTable}>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Max Power</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DC Motor (centrifuge)</td>
                  <td>150 W</td>
                </tr>
                <tr>
                  <td>Pinecil Soldering Irons (×2)</td>
                  <td>180 W</td>
                </tr>
                <tr>
                  <td>Inner Shaft Motor</td>
                  <td>40 W</td>
                </tr>
                <tr>
                  <td>Extruder Motors (×2)</td>
                  <td>24 W</td>
                </tr>
                <tr>
                  <td>Servo (rack & pinion)</td>
                  <td>10 W</td>
                </tr>
                <tr>
                  <td>Fans (×2)</td>
                  <td>2.88 W</td>
                </tr>
                <tr>
                  <td>STM32 Nucleo</td>
                  <td>2.5 W</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Estimated Maximum</td>
                  <td>~415 W</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Budget & Funding */}
        <div className={styles.projectgoals}>
          <div className={wsstStyles.budgetSection}>
            <h3>Budget & Funding</h3>
            <p>
              WSST is funded through a combination of university grants,
              engineering society sponsorships, in-kind lab access, and industry
              sponsors. The total project budget covers components, testing,
              software licenses, outreach, and flight campaign expenses.
            </p>
            <div className={wsstStyles.budgetHighlights}>
              <div className={wsstStyles.budgetHighlight}>
                <h4>$11,000</h4>
                <span>Total Budget</span>
              </div>
              <div className={wsstStyles.budgetHighlight}>
                <h4>$71,043</h4>
                <span>Funding Secured</span>
              </div>
              <div className={wsstStyles.budgetHighlight}>
                <h4>$6,000</h4>
                <span>Flight Campaign</span>
              </div>
              <div className={wsstStyles.budgetHighlight}>
                <h4>$1,700</h4>
                <span>Testing & Research</span>
              </div>
            </div>
            <div className={wsstStyles.budgetImages}>
              <div className={wsstStyles.budgetImageItem}>
                <img src={budgetSheet} alt="WSST budget breakdown by category" />
                <p>Budget breakdown by expense category</p>
              </div>
              <div className={wsstStyles.budgetImageItem}>
                <img
                  src={fundingTracking}
                  alt="WSST funding and grant tracking"
                />
                <p>Funding sources and grant tracking</p>
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

        {/* Team */}
        <div className={styles.teamSection}>
          <h3>Meet the Team</h3>
          <Team />
        </div>
      </div>
      <Footer />
    </>
  );
}
