import React from 'react';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

function QueryListItem(props) {
  const {onClick, entity, avatar, primaryText, secondaryText} = props;

  const handleClick = () => {
    onClick(entity);
  };

  return (
    <ListItem onClick={handleClick} button>
      <ListItemAvatar>
        <Avatar>
          {avatar}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
}

export default QueryListItem;
