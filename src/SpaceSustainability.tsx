import styles from "./Astra.module.css";
import ssStyles from "./SpaceSustainability.module.css";

import Footer from "./footer.tsx";
import ProjectHeader from "./components/ProjectHeader.tsx";
import { TeamGrid, ssTeam } from "./team.tsx";

import soberPayload from "./assets/sober-payload.jpg";
import soberTeam from "./assets/sober-team.jpg";
import soberLaunch from "./assets/sober-launch.jpg";

export default function SpaceSustainability() {
 return (
  <>
   <div className={styles.astraprojectcontainer}>
    <ProjectHeader
     title="Space Sustainability"
     subtitle="Detecting and tracking space debris from orbit using multispectral imaging"
     backgroundImage={soberPayload}
    />
    <div className={styles.intro}>
     <div className={styles.introleft}>
      <p>
       Space Sustainability is a WSRT project focused on building
       space-based tools to monitor Resident Space Objects (RSOs) - from
       active satellites to orbital debris. Our current mission, Hyperion,
       integrates a multispectral imaging payload onto a 3U CubeSat
       built by Orbital, a Waterloo design team, to demonstrate
       autonomous RSO detection and tracking from orbit.
      </p>
     </div>
     <div className={styles.introright}>
      <h4>Time Frame</h4>
      <p>January 2026 - Ongoing</p>
     </div>
    </div>

    <div className={styles.projectgoals}>
     {/* Project mission */}
     <div className={styles.projectgoalssection1}>
      <h3>Project Goals</h3>
      <div className={styles.problemstatement}>
       <h5>
        Hyperion's primary mission is to demonstrate autonomous,
        space-based detection and tracking of RSOs using co-aligned
        longwave infrared (LWIR) and visible (VIS) sensors on a CubeSat
        platform.
       </h5>
      </div>
     </div>

     <div className={styles.projectgoalssection5}>
      <h5>Through Hyperion, we aim to:</h5>
      <div className={styles.projectaim}>
       <div className={styles.singleprojectaim}>
        <h2>1</h2>
        <p>
         Detect and track RSOs, acquiring synchronized visible and
         thermal image data during target passes
        </p>
       </div>
       <div className={styles.singleprojectaim}>
        <h2>2</h2>
        <p>
         Generate brightness and thermal intensity profiles over time
         to enable preliminary multi-band characterization
        </p>
       </div>
       <div className={styles.singleprojectaim}>
        <h2>3</h2>
        <p>
         Demonstrate that CubeSats can contribute meaningful multi-band
         observational data to support scalable Space Situational
         Awareness (SSA) systems
        </p>
       </div>
      </div>
     </div>

     <div className={styles.projectgoalssection4}>
      <h5>Data comparison:</h5>
      <p>
       Data collected by Hyperion will be compared with previously
       acquired SOBER balloon mission data, enabling a direct two-tier
       comparison between atmospheric- and space-based SSA observations,
       with available ground-based data providing a tertiary point of
       comparison.
      </p>
     </div>

     {/* SOBER Background - kept brief */}
     <div className={styles.projectgoalssection1}>
      <h3>Built on SOBER</h3>
     </div>

     <div className={styles.projectgoalssection4}>
      <p>
       Hyperion builds on the success of project SOBER (Space Observation
       Brightness & Earth Reference), a stratospheric balloon payload
       launched in October 2025 in Kiruna, Sweden through ESA's BEXUS
       programme. SOBER detected and measured the brightness of RSOs in
       both visible and infrared bands from altitudes of at least 27 km,
       demonstrating that high-altitude platforms can be used for
       multispectral Space Situational Awareness. Orbital has asked Space
       Sustainability to integrate this proven technology onto their 3U
       CubeSat, taking it from the stratosphere to orbit.
      </p>
     </div>

     {/* SOBER photos */}
     <div className={styles.projectgoalssection5}>
      <h5>SOBER Mission Gallery</h5>
      <div className={ssStyles.galleryGrid}>
       <div className={ssStyles.galleryItem}>
        <img
         src={soberPayload}
         alt="SOBER payload with IR and visible sensors"
        />
        <p>SOBER payload with IR and visible sensors</p>
       </div>
       <div className={ssStyles.galleryItem}>
        <img
         src={soberTeam}
         alt="SOBER team at ESA BEXUS in Kiruna, Sweden"
        />
        <p>SOBER team at ESA BEXUS in Kiruna, Sweden</p>
       </div>
       <div className={ssStyles.galleryItem}>
        <img
         src={soberLaunch}
         alt="Balloon launch preparation in Kiruna"
        />
        <p>Balloon launch preparation in Kiruna</p>
       </div>
      </div>
     </div>
    </div>

    {/* Timeline */}
    <div className={styles.aboutthecompetition}>
     <div className={styles.aboutthecompetitioncontent}>
      <h3>Timeline & Opportunities</h3>
      <p>
       The team is applying to ESA's Fly Your Satellite! programme as
       well as CSA's CUBICS initiative. Both are confirmed to be calling
       for new proposals this summer, and the integration of this
       scientific payload plays a huge role in eligibility to be selected.
      </p>
      <div className={ssStyles.timeline}>
       <div className={ssStyles.timelineItem}>
        <span className={ssStyles.timelineDate}>January 2026</span>
        <span className={ssStyles.timelineDesc}>
         Project started. Research initiated and project idea showcased
         at the Canadian Space Conference with WSRT.
        </span>
       </div>
       <div className={ssStyles.timelineItem}>
        <span className={ssStyles.timelineDate}>February 2026</span>
        <span className={ssStyles.timelineDesc}>
         Team recruitment completed with all subteams established.
         Beginning preliminary design and research activities.
        </span>
       </div>
       <div className={ssStyles.timelineItem}>
        <span className={ssStyles.timelineDate}>March 2026</span>
        <span className={ssStyles.timelineDesc}>
         Submitted application to ESA's Fly Your Satellite! programme
         for vibration and TVAC testing. First formal inclusion of
         Space Sustainability within a mission proposal.
        </span>
       </div>
       <div className={ssStyles.timelineItem}>
        <span className={ssStyles.timelineDate}>March – May 2026</span>
        <span className={ssStyles.timelineDesc}>
         Active development of payload and subsystem designs across
         electrical, mechanical, and software teams.
        </span>
       </div>
       <div className={ssStyles.timelineItem}>
        <span className={ssStyles.timelineDate}>
         May – August 2026
        </span>
        <span className={ssStyles.timelineDesc}>
         Pursue launch opportunities through ESA's Fly Your Satellite!
         and CSA's CUBICS. Integration into 3U CubeSat.
        </span>
       </div>
      </div>
     </div>
    </div>

    <div className={styles.teamSection}>
     <h3>Meet the Team</h3>
     <TeamGrid members={ssTeam} />
    </div>
   </div>
   <Footer />
  </>
 );
}
