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
    minWidth: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/child.jpg"})`,
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img
              className={styles.image}
              src="./images/child.jpg"
              alt="Child"
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
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
      </Grid>
    </div>
  );
}

export default Home;
