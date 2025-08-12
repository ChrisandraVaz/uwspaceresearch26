import styles from "./team.module.css";

interface Person {
  name: string;
  role: string;
  imageUrl: string;
  link: string;
}

import avatarImageDevshi from "./assets/avatars/Devshi.jpg";
import avatarImageAsmi from "./assets/avatars/Asmi.jpg";
import avatarImageRelja from "./assets/avatars/Relja.jpg";
import avatarImageLili from "./assets/avatars/Lili.jpg";
import avatarImageSameek from "./assets/avatars/Sameek.jpg";
import avatarImageEmilia from "./assets/avatars/Emilia.jpg";
import avatarImageNathan from "./assets/avatars/Nathan.jpg";
import avatarImageMegan from "./assets/avatars/Megan.jpg";
import avatarImageAndre from "./assets/avatars/Andre.jpg";
import avatarImageMysha from "./assets/avatars/Mysha.jpg";
import avatarImageRyan from "./assets/avatars/Ryan.jpg";
import avatarImageNikola from "./assets/avatars/Nikola.jpg";
import avatarImageEmma from "./assets/avatars/Emma.jpg";
import avatarImageJady from "./assets/avatars/Jady.jpg";
import avatarImageChelsea from "./assets/avatars/Chelsea.jpg";
import avatarImageElbert from "./assets/avatars/Elbert.jpg";
import avatarImageIman from "./assets/avatars/Iman.jpg";
import avatarImageAaryn from "./assets/avatars/Aaryn.jpg";

const people: Person[] = [
  {
    name: "Mysha Hamid",
    role: "Project Lead",
    imageUrl: avatarImageMysha,
    link: "https://www.linkedin.com/in/myshahamid/",
  },
  {
    name: "Nikola Jokic",
    role: "Electrical Designer",
    imageUrl: avatarImageNikola,
    link: "https://www.linkedin.com/in/nikola-joki%C4%87/",
  },
  {
    name: "Emma Pileggi",
    role: "Mechanical Lead",
    imageUrl: avatarImageEmma,
    link: "https://www.linkedin.com/in/emma-pileggi-2a37002b4/",
  },
  {
    name: "Jady Xu",
    role: "Mechanical Designer",
    imageUrl: avatarImageJady,
    link: "https://www.linkedin.com/in/jady-xu/",
  },
  {
    name: "Asmi Gujral",
    role: "Software Lead, Project Manager",
    imageUrl: avatarImageAsmi,
    link: "https://www.linkedin.com/in/asmigujral/",
  },
  {
    name: "Chelsea Dmytryk",
    role: "Software Designer",
    imageUrl: avatarImageChelsea,
    link: "https://www.linkedin.com/in/chelseadmytryk/",
  },
  {
    name: "Elbert Chen",
    role: "Software Designer",
    imageUrl: avatarImageElbert,
    link: "https://www.linkedin.com/in/elbert-chen/",
  },
  {
    name: "Iman Umair-Qaiser",
    role: "Software Designer",
    imageUrl: avatarImageIman,
    link: "https://www.linkedin.com/in/iuqaiser/",
  },
  {
    name: "Aaryn Xie",
    role: "Business & Funding Lead",
    imageUrl: avatarImageAaryn,
    link: "https://www.linkedin.com/in/aaryn-xie/",
  },
  {
    name: "Megan Chang",
    role: "Outreach Lead",
    imageUrl: avatarImageMegan,
    link: "https://www.linkedin.com/in/meganchang2/",
  },
];

const alumni: Person[] = [
  {
    name: "Devshi",
    role: "Project Lead & Sponsorship",
    imageUrl: avatarImageDevshi,
    link: "",
  },
  {
    name: "Emilia",
    role: "Outreach Lead",
    imageUrl: avatarImageEmilia,
    link: "",
  },
  {
    name: "Ryan",
    role: "Mechanical Lead & Webmaster",
    imageUrl: avatarImageRyan,
    link: "https://www.linkedin.com/in/ryanymark/",
  },
  {
    name: "Andre",
    role: "Mechanical Designer",
    imageUrl: avatarImageAndre,
    link: "",
  },
  {
    name: "Lili",
    role: "Electrical Lead",
    imageUrl: avatarImageLili,
    link: "",
  },
  {
    name: "Nathan",
    role: "Electrical Designer",
    imageUrl: avatarImageNathan,
    link: "",
  },
  {
    name: "Sameek",
    role: "Electrical Lead",
    imageUrl: avatarImageSameek,
    link: "https://www.linkedin.com/in/sameek-sharma/",
  },
  {
    name: "Relja",
    role: "Firmware / Software Lead",
    imageUrl: avatarImageRelja,
    link: "",
  },
];

export function Team() {
  return (
    <div className={styles.membercontainer}>
      <ul role="list" className={styles.membercontainerli}>
        {people.map((person, index) => (
          <li key={index}>
            <div className={styles.memberpic}>
              <a href={person.link} target="_blank">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  width={96}
                  height={96}
                />
              </a>
            </div>
            <h3 className={styles.membername}>{person.name}</h3>
            <p className={styles.memberrole}>{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Alumni() {
  return (
    <div className={styles.membercontainer}>
      <ul role="list" className={styles.membercontainerli}>
        {alumni.map((person, index) => (
          <li key={index}>
            <div className={styles.memberpic}>
              <img
                src={person.imageUrl}
                alt={person.name}
                width={96}
                height={96}
              />
            </div>
            <h3 className={styles.membername}>{person.name}</h3>
            <p className={styles.memberrole}>{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
