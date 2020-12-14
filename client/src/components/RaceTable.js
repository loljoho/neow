import React, { Component } from 'react';
import moment from 'moment';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import API from '../utils/API';
import Flags from '../utils/Flags';

function preventDefault(event) {
  event.preventDefault();
}

export class RaceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    this.getRaceData();
    this.isLoaded = true;
  }

  getRaceData() {
    API.getRaces()
      .then(res => {
        this.setState({
          isLoaded: true,
          data: res,
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error
        });
      });
  }

  useStyles() {
    return makeStyles((theme) => ({
      seeMore: {
        marginTop: theme.spacing(3),
      },
    }));
  }

  componentWillUnmount() {
    this.isLoaded = false;
  }

  render() {
    const { data: rows, isLoaded, error} = this.state;
    const classes = this.useStyles();
    if (error) {
      return (
        <>
          <h1>ERROR: { error.message }</h1>
        </>
      );
    } else if (!isLoaded) {
      return (
        <>
          <h1>LOADING ...</h1>
        </>
      );
    } else {
      // console.log(`data: ${rows}`);
      return (
        <>
          <Title>Race Schedule</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">Year</TableCell>
                <TableCell align="right">Rnd</TableCell>
                <TableCell>Race</TableCell>
                <TableCell>Circuit</TableCell>
                <TableCell align="center" colSpan="2">Location</TableCell>
                <TableCell align="center" colSpan="2">Date/Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                let flag = Flags.getByCountry(row.Circuit.Location.country).iso2;
                let date = moment(`${row.date}T${row.time}`);
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{ row.season }</TableCell>
                    <TableCell align="right">{ row.round }</TableCell>
                    <TableCell>{ row.raceName }</TableCell>
                    <TableCell>{ row.Circuit.circuitName }</TableCell>
                    <TableCell>{ row.Circuit.Location.locality }</TableCell>
                    <TableCell>
                      <span className={`flag-icon flag-icon-${flag}`} title={ row.Circuit.Location.country }></span>
                    </TableCell>
                    <TableCell>{ date.format('YYYY MMM DD') }</TableCell>
                    <TableCell align="center">{ date.format('HH:mm') }</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Link color="primary" href="#" onClick={preventDefault}>
              See more races
            </Link>
          </div>
        </>
      );
    }
  }
};

export default RaceTable;
