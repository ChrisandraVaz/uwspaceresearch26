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
          <a
            className={styles.projectsbutton}
            href="#projects"
            onClick={handleAnchorClick}
          >
            See our Projects
          </a>
        </div>
        <div className={styles.overlaysun}></div>
      </div>
      <div className={styles.projectscontainer} id="projects">
        <div className={styles.projectsheader}>
          <h1>Our Projects</h1>
        </div>
        <div className={styles.projectscontent}>
          <Link to="/projects/astra" className={styles.projectscontenttopbox}>
            <div className={styles.projectscontenttopbox2}>
              <img src={astraText}></img>
              <p>Adaptive Signal Transmission and Real-time Analytics</p>
            </div>
          </Link>
          <div className={styles.projectscontentbottombox}>
            <Link
              to="/projects/wsst"
              className={styles.projectscontentbottomleft}
            >
              <div>
                <h2>WSST</h2>
                <p>Waterloo Space Soldering Team</p>
              </div>
            </Link>
            <Link to="/projects" className={styles.projectscontentbottomright}>
              <div>
                <h2>See all projects</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
  // enable smooth scroll
  document.documentElement.style.scrollBehavior = "smooth";

  // after the scroll finishes (~500ms), turn it back off
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "auto";
  }, 500);
}
