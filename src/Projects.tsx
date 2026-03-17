import styles from "./Projects.module.css";

import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className={styles.projectscontainer}>
        <div className={styles.projectstitle}>
          <h1>Projects</h1>
          <p>
            Take a closer look at the projects we've been working on since 2024.
          </p>
        </div>
        <div className={styles.allprojectscontainer}>
          <Link to="/projects/wsst">
            <div
              className={styles.wsstcontainer}
              id={styles.singleprojectcontainer}
            >
              <div className={styles.containerleft}>
                <h1>WSST</h1>
                <p>Waterloo Space Soldering Team</p>
              </div>
              <div className={styles.containerright}>
                <p>Nov 2025 - Current</p>
                <p>CAN-RGX 9</p>
              </div>
            </div>
          </Link>
          <Link to="/projects/astra">
            <div
              className={styles.astracontainer}
              id={styles.singleprojectcontainer}
            >
              <div className={styles.containerleft}>
                <h1>ASTRA</h1>
                <p>Adaptive Signal Transmission and Real-time Analytics</p>
              </div>
              <div className={styles.containerright}>
                <p>Jan 2025 - Current</p>
                <p>CAN-SBX 7</p>
              </div>
            </div>
          </Link>
          <Link to="/projects/space-sustainability">
            <div
              className={styles.sscontainer}
              id={styles.singleprojectcontainer}
            >
              <div className={styles.containerleft}>
                <h1>Space Sustainability</h1>
                <p>Advancing sustainable practices for space exploration</p>
              </div>
              <div className={styles.containerright}>
                <p>Coming Soon</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
