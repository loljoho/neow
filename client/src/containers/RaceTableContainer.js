import React, { Component } from 'react';
import RaceTable from '../components/RaceTable';
import API from '../utils/API';

export class RaceTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    API.getRaces()
      .then(res => console.log(res.json()))
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  render() {
    return (
      <>
        <RaceTable />
      </>
    )
  }
};

export default RaceTableContainer;
