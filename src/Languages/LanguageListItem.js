import React from 'react';
import {withRouter} from 'react-router-dom';
import QueryListItem from '../commons/components/QueryList/QueryListItem';

function LanguageListItem(props) {
  const {language} = props;

  const primaryText = language.rtl
    ? `${language.name} - (RTL)`
    : language.name;

  const handleLanguageClick = () => {
    props.history.push(`/languages/${language.code}`);
  };

  return (
    <QueryListItem
      entity={language}
      onClick={handleLanguageClick}
      avatar={language.code}
      primaryText={primaryText}
      secondaryText={language.native}
    />
  );
}


export default withRouter(LanguageListItem);
