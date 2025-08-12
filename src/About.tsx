import styles from "./About.module.css";

import Footer from "./footer.tsx";
import { Alumni, Team } from "./team.tsx";

import wsrtLogoL from "./assets/wsrt large icon.png";
import linkedInLogo from "./assets/linkedin.svg";
import instagramLogo from "./assets/Instagram.svg";

export default function About() {
  return (
    <>
      <div className={styles.title}>
        <h1>About</h1>
        <p>
          The Waterloo Space Research Team empowers undergraduate students to
          explore the frontiers of space research through{" "}
          <strong>
            <em>hands-on design, engineering,</em>
          </strong>{" "}
          and
          <strong>
            <em> experimentation.</em>
          </strong>
        </p>
      </div>
      <div className={styles.mission}>
        <img src={wsrtLogoL}></img>
        <div className={styles.missiontext}>
          <h6>OUR MISSION</h6>
          <p>
            We advance knowledge in aerospace, science, and technology through
            innovation and collaboration.
          </p>
          <p>
            We equip future leaders by providing opportunities for hands-on
            experimentation in space exploration and engineering.
          </p>
        </div>
      </div>
      <div className={styles.connect}>
        <div className={styles.connectleft}>
          <h4>Want to get involved?</h4>
          <p>
            Whether you're looking to join our team or attend our outreach
            events, stay in the loop by following us on social media.
          </p>
          <div className={styles.connectbuttoncontainer}>
            <a
              className={styles.connectbutton}
              href="https://www.instagram.com/uwspaceresearch/"
              target="_blank"
            >
              <img src={instagramLogo}></img>Instagram
            </a>
            <a
              className={styles.connectbutton}
              href="https://www.linkedin.com/company/uw-space-research/"
              target="_blank"
            >
              <img src={linkedInLogo}></img>LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.connectright}>
          <h4>Interested in Sponsoring Us?</h4>
          <p>
            We'd love to connect! Reach out to us at{" "}
            <a href="mailto:uwspaceresearchteam@gmail.com">
              uwspaceresearchteam@gmail.com
            </a>{" "}
            to learn more about sponsorship opportunities.
          </p>
        </div>
      </div>
      <div className={styles.members}>
        <h2>Our Team</h2>
        <h3>Current Members</h3>
        <Team />
        <h3>Alumni</h3>
        <Alumni />
      </div>
      <Footer />
    </>
  );
}
