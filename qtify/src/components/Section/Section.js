import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section({ data, type }) {
  return (
    <div className={styles.section}>
      {data.map((album) => {
        return (
          <Card
            data={{
              image: album.image,
              follows: album.follows,
              title: album.title,
              slug: album.slug,
              song: album.songs,
            }}
            type={type}
          />
        );
      })}
    </div>
  );
}
