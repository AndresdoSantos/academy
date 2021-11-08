import 'react-native-gesture-handler';
import React from 'react';

import { Onboarding } from './src/pages/Onboarding';
import { Root } from './src/routes/root';

export default function App() {
  const isAuth = true;

  return <>{isAuth ? <Root /> : <Onboarding />}</>;
}
