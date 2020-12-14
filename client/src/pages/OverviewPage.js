import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ResultChart from '../components/ResultChart';
import RaceWidget from '../components/RaceWidget';
import RaceTable from '../components/RaceTable';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 360,
  },
}));

export default function OverviewPage() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper,  classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <ResultChart />
        </Paper>
      </Grid>
      {/* Widgets */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <RaceWidget />
        </Paper>
      </Grid>
      {/* Races */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <RaceTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
