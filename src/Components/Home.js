import React from "react";
import styles from "./Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "90vh",
    background: "black",
  },
  paper: {
    flexGrow: 1,
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "22px",
    background: "transparent",
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
      <Grid container spacing={3}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <img
              className={styles.image}
              src="./images/child.jpg"
              alt="Child"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
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
          </Paper>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
