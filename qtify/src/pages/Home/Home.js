import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [topAlbums, setTopAlbums] = useState([]);
  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setTopAlbums(response.data);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className={styles.section}>
        <div className={styles.title}>Top Albums</div>
        <Section data={topAlbums} type="album" />
      </div>
    </div>
  );
}
