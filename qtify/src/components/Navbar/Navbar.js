import { Box } from "@mui/material";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="logo.png" alt="Logo" />
      <Box className={styles.searchbar}>
        <input placeholder="Search a album of your choice" name="search" />
        <button>
          <SearchIcon fontSize="large" />
        </button>
      </Box>

      <button className={styles.feedbackButton}>Give Feedback</button>
    </nav>
  );
}
