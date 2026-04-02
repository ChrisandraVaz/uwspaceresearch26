import styles from "./Sponsors.module.css";
import Footer from "./footer.tsx";

import altiumLogo from "./assets/sponsors/Altium_Logo.svg";
import csaLogo from "./assets/sponsors/CSA_Logo.png";
import engsocLogo from "./assets/sponsors/EngSoc_Logo.png";
import ieeeLogo from "./assets/sponsors/IEEE_Logo.jpg";
import nrcLogo from "./assets/sponsors/NRC_Logo.png";
import sedsLogo from "./assets/sponsors/SEDS_Logo.png";
import uwEngLogo from "./assets/sponsors/UW_Eng_Logo.avif";
import uwLogo from "./assets/sponsors/UW_Logo_2.avif";
import weefLogo from "./assets/sponsors/WEEF_Logo.avif";
import msamLogo from "./assets/sponsors/msam.png";
import camjLogo from "./assets/sponsors/camj.avif";

// TODO: Add logo file for Sandford Fleming Foundation (SF) once available

const sponsors = [
  { name: "SEDS Canada", logo: sedsLogo },
  { name: "WEEF", logo: weefLogo },
  { name: "Altium", logo: altiumLogo },
  { name: "Canadian Space Agency", logo: csaLogo, large: true },
  { name: "NRC CNRC", logo: nrcLogo },
  { name: "University of Waterloo", logo: uwLogo, large: true },
  { name: "Faculty of Engineering", logo: uwEngLogo, large: true },
  { name: "IEEE Canada", logo: ieeeLogo, large: true },
  { name: "Engineering Society", logo: engsocLogo, large: true },
  { name: "MSAM", logo: msamLogo },
  { name: "CAMJ", logo: camjLogo },
];

export default function Sponsors() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Sponsorship</h1>
          <p>
            We are grateful to our sponsors who make our research and projects
            possible.
          </p>
        </div>
      </div>
      <div className={styles.sponsorsSection}>
        <h2>Our Sponsors</h2>
        <div className={styles.logosGrid}>
          {sponsors.map((sponsor, index) => (
            <div className={`${styles.logoCard} ${sponsor.large ? styles.logoCardLarge : ""}`} key={index}>
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Interested in Sponsoring Us?</h3>
        <p>
          We'd love to connect! Reach out to us at{" "}
          <a href="mailto:uwspaceresearchteam@gmail.com">
            uwspaceresearchteam@gmail.com
          </a>{" "}
          to learn more about sponsorship opportunities.
        </p>
      </div>
      <Footer />
    </>
  );
}
