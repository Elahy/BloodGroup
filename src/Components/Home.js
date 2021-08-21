import React from "react";
import styles from "./Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "90vh",
    background: "black",
  },
}));
function Home() {
  const classes = useStyles();
  const history = useHistory();
  const handleFindDonor = () => {
    history.push("/donorlist");
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={4}>
          <div>
            <img
              className={styles.image}
              src="./images/child.jpg"
              alt="Child"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.section}>
            <h1 className={styles.heading}>Donate Blood Save Life!</h1>
            <h3 className={styles.quote}>
              "Your Little Effort Can Give Others Second Chance To Live Life"
            </h3>
            <p className={styles.text}>Need Blood for someone?</p>
            <button className={styles.findButton} onClick={handleFindDonor}>
              Find Donor
            </button>
            <p className={styles.text}>New to this community?</p>
            <button className={styles.registerButton} onClick={handleFindDonor}>
              Register Now!
            </button>
            <p>
              <Link to="/guideline" className={styles.link}>
                See our community guidelines.
              </Link>
            </p>
          </div>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
