import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import API from '../utils/API';
import Flags from '../utils/Flags';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function RaceWidget() {
  const classes = useStyles();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      const result = await API.getNextRace()
        .then((result) => {
          console.log('result', result);
          return result;
        });
      setData(result);
    };
    fetchData().catch(err => console.warn('error', err.message));
  });
  console.log(data);
  return (
    <React.Fragment>
      <Title>Next Round</Title>
      <Typography component="p" variant="h4">
        Grand Prix
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Details
        </Link>
      </div>
    </React.Fragment>
  );
}
