import React from 'react';

import QueryListItem from '../commons/components/QueryList/QueryListItem';

function CountryListItem(props) {
  const {country} = props;
  const {code, name, emoji, native} = country;

  return (
    <QueryListItem
      entity={country}
      avatar={code}
      primaryText={`${name} - ${emoji}`}
      secondaryText={native}
    />
  );
}

export default CountryListItem;
