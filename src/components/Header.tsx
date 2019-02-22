import React from 'react';
import { Typography } from '@material-ui/core';

export class Header extends React.Component {
  render = () => (
    <>
      <Typography variant="h5">
        Technology Radar - for Melissa Palmer
      </Typography>
      
      {this.props.children}
    </>
  );
}

