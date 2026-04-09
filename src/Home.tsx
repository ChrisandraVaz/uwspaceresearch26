import styles from "./Home.module.css";
import astraText from "./assets/uw astra title.svg";

import Footer from "./footer.tsx";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className={styles.herocontainer}>
        <div className={styles.herotextcontainer}>
          <h1>Where students engineer the future of space</h1>
          <p>
            WSRT is a student-led design team at the University of Waterloo
            dedicated to advancing aerospace research through hands-on design
            and engineering competitions.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/projects" className={styles.projectsbutton}>
              See our Projects
            </Link>
            <a
              href="https://forms.gle/1A8g2wmryW5533Z98"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.joinButton}
            >
              Join our Team →
            </a>
          </div>
        </div>
        <div className={styles.overlaysun}></div>
      </div>
      <div className={styles.projectscontainer} id="projects">
        <div className={styles.projectsheader}>
          <h1>Our Projects</h1>
        </div>
        <div className={styles.projectscontent}>
          <div className={styles.projectsrow}>
            <Link to="/projects/wsst" className={styles.projectcard}>
              <div className={styles.projectcardwsst}>
                <h2>WSST</h2>
                <p>Waterloo Space Soldering Team</p>
              </div>
            </Link>
            <Link
              to="/projects/astra"
              className={`${styles.projectcard} ${styles.projectcardastrabg}`}
            >
              <div>
                <img src={astraText} className={styles.astraTextImg}></img>
                <p>Adaptive Signal Transmission and Real-time Analytics</p>
              </div>
            </Link>
            <Link
              to="/projects/space-sustainability"
              className={`${styles.projectcard} ${styles.projectcardspacesustbg}`}
            >
              <div>
                <h2>Space Sustainability</h2>
                <p>Coming Soon</p>
              </div>
            </Link>
          </div>
          <Link to="/projects" className={styles.seeallprojects}>
            See all projects
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

