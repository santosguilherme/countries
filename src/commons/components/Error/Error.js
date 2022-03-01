import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import Typography from '@material-ui/core/Typography';
import {ErrorContent} from './styles';

function Error(props) {
  const {children} = props;

  return (
    <ErrorContent>
      <ErrorIcon color="error"/>
      <Typography component="span" variant="body2" color="error">{children}</Typography>
    </ErrorContent>
  );
}

export default Error;
