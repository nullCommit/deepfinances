import React from 'react';
import { Dashboard } from './src/screens/Dashboard/';

import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
