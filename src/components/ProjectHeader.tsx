import styles from "../Astra.module.css";

interface HeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function ProjectHeader({
  title,
  subtitle,
  backgroundImage,
}: HeaderProps) {
  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%), url(${backgroundImage})`,
      }}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
