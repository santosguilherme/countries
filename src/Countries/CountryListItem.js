import React from 'react';

import {withRouter} from 'react-router-dom';

import QueryListItem from '../commons/components/QueryList/QueryListItem';

function CountryListItem(props) {
  const {country} = props;
  const {code, name, emoji, native} = country;

  const handleCountryClick = continent => {
    props.history.push(`/countries/${continent.code}`);
  };

  return (
    <QueryListItem
      entity={country}
      avatar={code}
      onClick={handleCountryClick}
      primaryText={`${name} - ${emoji}`}
      secondaryText={native}
    />
  );
}

export default withRouter(CountryListItem);
