import styles from "./team.module.css";

interface Person {
  name: string;
  role: string;
  imageUrl?: string;
  link?: string;
  placeholder?: boolean;
}

// Current team avatars
import avatarDevshi from "./assets/avatars/Devshi.jpg";
import avatarMegan from "./assets/avatars/Megan.jpg";
import avatarChrisandra from "./assets/avatars/Chrisandra.jpeg";
import avatarRishi from "./assets/avatars/Rishi.png";
import avatarKatherine from "./assets/avatars/Katherine.png";
import avatarAsmi from "./assets/avatars/Asmi.jpg";
import avatarCatherine from "./assets/avatars/Catherine.png";
import avatarKrish from "./assets/avatars/Krish.png";
import avatarShamanthi from "./assets/avatars/shamanthi.jpg";
import avatarZiren from "./assets/avatars/Ziren.png";
import avatarFaraaz from "./assets/avatars/Faraaz.png";
import avatarRachel from "./assets/avatars/Rachel.png";
import avatarJerry from "./assets/avatars/Jerry.png";
import avatarEmma from "./assets/avatars/Emma.jpg";
import avatarMysha from "./assets/avatars/Mysha.jpg";
import avatarJady from "./assets/avatars/Jady.jpg";
import avatarAdelina from "./assets/avatars/Adelina.png";
import avatarCaleb from "./assets/avatars/Caleb.png";

// Space Sustainability
import avatarMadison from "./assets/madison-prange.jpg";
import avatarAnita from "./assets/avatars/Anita.jpg";
import avatarKate from "./assets/avatars/Kate.jpg";
import avatarGurpreet from "./assets/avatars/Gurpreet.jpg";
import avatarDrishti from "./assets/avatars/Drishti.jpg";
import avatarAidan from "./assets/avatars/Aidan.jpg";
import avatarTheria from "./assets/avatars/Theria.jpg";
import avatarLakysha from "./assets/avatars/Lakysha.jpg";
import avatarIsabella from "./assets/avatars/Isabella.jpg";
import avatarHazel from "./assets/avatars/Hazel.jpg";
import avatarSydney from "./assets/avatars/Sydney.jpg";
import avatarKrishJain from "./assets/avatars/KrishJain.jpg";
import avatarAlex from "./assets/avatars/Alex.jpg";

// Alumni avatars
import avatarEmilia from "./assets/avatars/Emilia.jpg";
import avatarRyan from "./assets/avatars/Ryan.jpg";
import avatarAndre from "./assets/avatars/Andre.jpg";
import avatarLili from "./assets/avatars/Lili.jpg";
import avatarNathan from "./assets/avatars/Nathan.jpg";
import avatarSameek from "./assets/avatars/Sameek.jpg";
import avatarRelja from "./assets/avatars/Relja.jpg";
import avatarRyanC from "./assets/avatars/RyanC.jpg";
import avatarBenjamin from "./assets/avatars/Benjamin.jpg";
import avatarNikola from "./assets/avatars/Nikola.jpg";
import avatarAaryn from "./assets/avatars/Aaryn.jpg";
import avatarChelsea from "./assets/avatars/Chelsea.jpg";
import avatarElbert from "./assets/avatars/Elbert.jpg";
import avatarIman from "./assets/avatars/Iman.jpg";

// WSST pyramid rows — top to bottom, widening
const managers: Person[] = [
  { name: "Devshi", role: "Project Manager, Research Advisor", imageUrl: avatarDevshi },
  { name: "Megan", role: "Project Manager, Research Advisor", imageUrl: avatarMegan },
];

const researchAndBusiness: Person[] = [
  { name: "Chrisandra", role: "Business & Outreach Lead", imageUrl: avatarChrisandra },
  { name: "Rishi", role: "Research Member", imageUrl: avatarRishi },
  { name: "Katherine", role: "Research Member", imageUrl: avatarKatherine },
];

const software: Person[] = [
  { name: "Asmi", role: "Software Lead, Mission Specialist #3", imageUrl: avatarAsmi },
  { name: "Catherine", role: "Software Developer", imageUrl: avatarCatherine },
  { name: "Krish", role: "Software Developer", imageUrl: avatarKrish },
];

const electrical: Person[] = [
  { name: "Shamanthi", role: "Electrical Lead, Mission Specialist #2", imageUrl: avatarShamanthi },
  { name: "Ziren", role: "Electrical Designer", imageUrl: avatarZiren },
  { name: "Faraaz", role: "Electrical Designer", imageUrl: avatarFaraaz },
  { name: "Rachel", role: "Electrical Designer", imageUrl: avatarRachel },
];

const mechanical: Person[] = [
  { name: "Jerry", role: "Mech Lead, Mission Specialist #1", imageUrl: avatarJerry },
  { name: "Emma", role: "Mech Designer", imageUrl: avatarEmma },
  { name: "Mysha", role: "Mech Designer, Social Media Lead", imageUrl: avatarMysha },
  { name: "Jady", role: "Mech Designer", imageUrl: avatarJady },
  { name: "Adelina", role: "Mech Designer", imageUrl: avatarAdelina },
  { name: "Caleb", role: "Mech Designer", imageUrl: avatarCaleb },
];

// ASTRA project team (CAN-SBX 7, Jan 2025 - Aug 2025)
export const astraTeam: Person[] = [
  { name: "Mysha Hamid", role: "Project Lead", imageUrl: avatarMysha, link: "https://www.linkedin.com/in/myshahamid/" },
  { name: "Nikola Jokic", role: "Electrical Designer", imageUrl: avatarNikola, link: "https://www.linkedin.com/in/nikola-joki%C4%87/" },
  { name: "Emma Pileggi", role: "Mechanical Lead", imageUrl: avatarEmma, link: "https://www.linkedin.com/in/emma-pileggi-2a37002b4/" },
  { name: "Jady Xu", role: "Mechanical Designer", imageUrl: avatarJady, link: "https://www.linkedin.com/in/jady-xu/" },
  { name: "Asmi Gujral", role: "Software Lead, Project Manager", imageUrl: avatarAsmi, link: "https://www.linkedin.com/in/asmigujral/" },
  { name: "Chelsea Dmytryk", role: "Software Designer", imageUrl: avatarChelsea, link: "https://www.linkedin.com/in/chelseadmytryk/" },
  { name: "Elbert Chen", role: "Software Designer", imageUrl: avatarElbert, link: "https://www.linkedin.com/in/elbert-chen/" },
  { name: "Iman Umair-Qaiser", role: "Software Designer", imageUrl: avatarIman, link: "https://www.linkedin.com/in/iuqaiser/" },
  { name: "Aaryn Xie", role: "Business & Funding Lead", imageUrl: avatarAaryn, link: "https://www.linkedin.com/in/aaryn-xie/" },
  { name: "Megan Chang", role: "Outreach Lead", imageUrl: avatarMegan, link: "https://www.linkedin.com/in/meganchang2/" },
];

// Space Sustainability project team
export const ssTeam: Person[] = [
  { name: "Madison Prange", role: "Project Lead", imageUrl: avatarMadison },
  { name: "Kate Jessop", role: "Science Lead", imageUrl: avatarKate },
  { name: "Drishti Manilall", role: "Science Lead", imageUrl: avatarDrishti },
  { name: "Gurpreet Singh", role: "Industry Partner", imageUrl: avatarGurpreet },
  { name: "Nikiel Lange", role: "Data Lead", placeholder: true },
  { name: "Anita Shunbuli", role: "Electrical Member", imageUrl: avatarAnita },
  { name: "Aidan Schreder", role: "Mech Member", imageUrl: avatarAidan },
  { name: "Anaisha Jain", role: "Mech Member", placeholder: true },
  { name: "Theria Liu", role: "Operations, Science", imageUrl: avatarTheria },
  { name: "Lakysha Ramnani", role: "Operations, Science", imageUrl: avatarLakysha },
  { name: "Alex Ng", role: "Operations, Science", imageUrl: avatarAlex },
  { name: "Isabella Lyn", role: "Mechanical Member", imageUrl: avatarIsabella },
  { name: "Hazel Bains", role: "Electrical Member", imageUrl: avatarHazel },
  { name: "Sydney Yang", role: "Software Member", imageUrl: avatarSydney },
  { name: "Krish Jain", role: "Electrical Member", imageUrl: avatarKrishJain },
  { name: "Emily Hoang", role: "Software Member", placeholder: true },
];

const alumni: Person[] = [
  { name: "Emilia Castillo", role: "Business & Outreach Lead", imageUrl: avatarEmilia },
  { name: "Ryan Mark", role: "Mechanical Lead & Webmaster", imageUrl: avatarRyan },
  { name: "Andre Arroyo-Cottier", role: "Mechanical Designer", imageUrl: avatarAndre },
  { name: "Lili Strong", role: "Electrical Lead", imageUrl: avatarLili },
  { name: "Nathan Bellsmith", role: "Integration & Systems Lead", imageUrl: avatarNathan },
  { name: "Sameek Sharma", role: "Electrical Lead", imageUrl: avatarSameek },
  { name: "Relja Vojvodic", role: "Firmware / Software Lead", imageUrl: avatarRelja },
  { name: "Ryan Chang", role: "Flight Campaign & Logistics", imageUrl: avatarRyanC },
  { name: "Benjamin Orchard", role: "Research", imageUrl: avatarBenjamin },
  { name: "Nikola Jokic", role: "Electrical Designer", imageUrl: avatarNikola },
  { name: "Aaryn Xie", role: "Business & Funding Lead", imageUrl: avatarAaryn },
  { name: "Chelsea Dmytryk", role: "Software Designer", imageUrl: avatarChelsea },
  { name: "Elbert Chen", role: "Software Designer", imageUrl: avatarElbert },
  { name: "Iman Umair-Qaiser", role: "Software Designer", imageUrl: avatarIman },
];

function MemberCard({ person }: { person: Person }) {
  const content = (
    <>
      <div className={styles.memberpic}>
        {person.placeholder ? (
          <div className={styles.placeholderavatar}>
            <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="rgba(255,255,255,0.35)"/>
            </svg>
          </div>
        ) : person.imageUrl ? (
          <img src={person.imageUrl} alt={person.name} width={96} height={96} />
        ) : (
          <div className={styles.placeholderavatar}>
            {person.name.split(" ").map((n) => n[0]).join("")}
          </div>
        )}
      </div>
      <h3 className={styles.membername}>{person.name}</h3>
      <p className={styles.memberrole}>{person.role}</p>
    </>
  );

  return <li>{person.link ? <a href={person.link} target="_blank">{content}</a> : content}</li>;
}

function Row({ people, centered }: { people: Person[]; centered?: boolean }) {
  return (
    <ul role="list" className={centered ? styles.rowcentered : styles.rowgrid}>
      {people.map((p, i) => (
        <MemberCard key={i} person={p} />
      ))}
    </ul>
  );
}

// WSST team in pyramid layout
export function Team() {
  return (
    <div className={styles.pyramid}>
      <Row people={managers} centered />
      <Row people={researchAndBusiness} centered />
      <Row people={software} />
      <Row people={electrical} />
      <Row people={mechanical} />
    </div>
  );
}

// Reusable grid for ASTRA and other project teams
export function TeamGrid({ members }: { members: Person[] }) {
  return (
    <div className={styles.membercontainer}>
      <ul role="list" className={styles.membercontainerli}>
        {members.map((person, index) => (
          <MemberCard key={index} person={person} />
        ))}
      </ul>
    </div>
  );
}

export function Alumni() {
  return (
    <div className={styles.membercontainer}>
      <h3 className={styles.alumniheading}>Alumni</h3>
      <ul role="list" className={styles.membercontainerli}>
        {alumni.map((person, i) => (
          <MemberCard key={i} person={person} />
        ))}
      </ul>
    </div>
  );
}
