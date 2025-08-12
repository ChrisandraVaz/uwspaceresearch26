import { Screencasts } from "./Screencasts";
import Footer from "./footer";

import { TableOfContents } from "./components/TableofContents";
import ProjectHeader from "./components/ProjectHeader";
import wsstBg from "./assets/wsstbg2.png";

import styles from "./Astra.module.css";

export default function Wsst() {
  return (
    <>
      <div className={styles.wsstcontainer}>
        <ProjectHeader
          title="WSST"
          subtitle="Waterloo Space Soldering Team"
          backgroundImage={wsstBg}
        />
        <TableOfContents />
        <Screencasts />
      </div>
      <Footer />
    </>
  );
}
