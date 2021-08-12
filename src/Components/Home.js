import React from "react";
import styles from "./Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/child.jpg"})`,
  },
}));
function Home() {
  const classes = useStyles();
  const history = useHistory();
  const handleFindDonor = () => {
    history.push("/donor");
  };
  return (
    <div className={classes.root}>
      <img className={styles.image} src="./images/child.jpg" alt="Child" />
      <h1 className={styles.heading}>Donate Blood Save Life!</h1>
      <Button
        variant="contained"
        className={styles.findButton}
        color="primary"
        onClick={handleFindDonor}
      >
        Find Donor
      </Button>
      <Button
        variant="contained"
        className={styles.registerButton}
        color="secondary"
        onClick={handleFindDonor}
      >
        Register Now!
      </Button>
    </div>
  );
}

export default Home;
