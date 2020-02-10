import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import Preloader from './PreLoader';

export default Loadable({
  loader: () => import('./LayoutLoadable.js'),
  loading: () => <div className="preloader-container">
    <Preloader
      color="#3c3f52"
      width="64"
      height="64"
    />
  </div>
});