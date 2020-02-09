import React, { useEffect } from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./LayoutLoadable.js'),
  loading: () => <>Loading...</>
});