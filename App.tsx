import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/router';

const App: React.FC = () => (
  <>
    <StatusBar backgroundColor="#690099" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
