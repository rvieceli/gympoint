import React from 'react';
import { StatusBar } from 'react-native';

import './config/reactotronConfig';

import Routes from './routes';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Routes />
    </>
  );
}
