import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { LoadingContent } from './styles';

function Loading(props) {
  return (
    <LoadingContent>
      <CircularProgress />
    </LoadingContent>
  );
}

export default Loading;
