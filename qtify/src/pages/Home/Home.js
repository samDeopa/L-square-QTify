import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
export default function Home() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setTopAlbums(response.data);
      });
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then((response) => {
        setNewAlbum(response.data);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className={styles.section}>
        <div className={styles.title}>
          <p>Top Albums</p>
          <Button>Collapse</Button>
        </div>
        <Section data={topAlbums} type="album" />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          <p>New Albums</p>
          <Button>Collapse</Button>
        </div>
        <Section data={newAlbum} type="album" />
      </div>
    </div>
  );
}
