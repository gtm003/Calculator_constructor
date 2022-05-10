import { Typography } from '@mui/material';
import React from 'react';

import styles from './App.module.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Lets go!</Typography>
    </div>
  );
};

export default App;
