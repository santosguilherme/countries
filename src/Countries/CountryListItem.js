import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

function CountryListItem(props) {
  const {country} = props;
  const {code, name, emoji, native} = country;

  return (
    <ListItem button>
      <Avatar>
        {code}
      </Avatar>
      <ListItemText primary={`${name} - ${emoji}`} secondary={native}/>
    </ListItem>
  );
}

export default CountryListItem;
