import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footertop}>
          <div className={styles.footertext}>
            <h2>Let's connect</h2>
            <p>
              Whether you're a student, sponsor, or just curious, don’t hesitate
              to reach out!
            </p>
          </div>
          <div className={styles.footerlinks}>
            <a href="mailto:uwspaceresearch@gmail.com">Email</a>
            <a
              href="https://www.instagram.com/uwspaceresearch/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/uw-space-research/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.footerbottom}>
          <p>Made with 💜 in Waterloo, ON</p>
          <small>© Waterloo Space Research Team 2025</small>
        </div>
      </div>
    </>
  );
}
