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
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
