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
                <h1>WSST 2025-2026</h1>
                <p>Waterloo Space Soldering Team</p>
              </div>
              <div className={styles.containerright}>
                <span className={styles.yearTag}>2025 - 2026</span>
                <span className={styles.compTag}>CAN-RGX 9</span>
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
                <span className={styles.yearTag}>2025</span>
                <span className={styles.compTag}>CAN-SBX 7</span>
              </div>
            </div>
          </Link>
          <Link to="/projects/wsst-2024">
            <div
              className={styles.wsstcontainer}
              id={styles.singleprojectcontainer}
            >
              <div className={styles.containerleft}>
                <h1>WSST 2023-2024</h1>
                <p>Waterloo Space Soldering Team (inaugural)</p>
              </div>
              <div className={styles.containerright}>
                <span className={styles.yearTag}>2023 - 2024</span>
                <span className={styles.compTag}>CAN-RGX</span>
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
                <p>Detecting and tracking space debris from orbit</p>
              </div>
              <div className={styles.containerright}>
                <span className={styles.yearTag}>2026</span>
                <span className={styles.compTag}>Hyperion</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
