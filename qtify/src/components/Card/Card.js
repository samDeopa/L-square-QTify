import { Chip } from "@mui/material";
import "./Card.module.css";
import styles from "./Card.module.css";

export default function Card({ data, type }) {
  switch (type) {
    case "album": {
      //slug is the id of the album
      const { image, follows, title, slug, song } = data;
      return (
        <div className={styles.card}>
          <div className={styles.content}>
            <img src={image} alt="album cover"></img>
            <Chip
              label={`${follows} Follows`}
              size="small"
              className={styles.chip}
            />
          </div>
          <div className={styles.title}>{title}</div>
        </div>
      );
    }
    case "song": {
      const { image, likes, title, id } = data;
      return (
        <div className={styles.card}>
          <div className={styles.content}>
            <img src={image} alt="song cover"></img>
            <Chip
              label={`${likes} Likes`}
              size="small"
              className={styles.chip}
            />
          </div>
          <div className={styles.title}>{title}</div>
        </div>
      );
    }
    default: {
      return <></>;
    }
  }
}
