import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Card({props}) {
const {type, length} = props;
  return (
    <React.Fragment>
      <div style={{textAlign: 'center'}}>
        <h1 style={{color: '#2F76D2', fontFamily: 'Roboto","Helvetica","Arial",sans-serif'}}>{type}</h1>
      <Typography component="p" variant="h2">
       {length}
      </Typography>
    
      </div>
    </React.Fragment>
  );
}