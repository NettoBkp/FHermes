import React from 'react';
import Autocomplete from '../Autocomplete';
import Row from '../Row';

export default
<Row>
  <Autocomplete
    title='Company'
    data={
      {
        'Apple': null,
        'Microsoft': null,
        'Google': 'http://placehold.it/250x250'
      }
    }
  />
</Row>;
