import 'react-native-gesture-handler';
import React from 'react';

import { Root } from './src/routes/root';
import { TrainingProgram } from './src/pages/TrainingProgram';

export default function App() {
  const isAuth = true;

  return <>{isAuth ? <Root /> : <TrainingProgram />}</>;
}
