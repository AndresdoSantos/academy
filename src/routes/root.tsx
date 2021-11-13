import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TrainingProgram } from '../pages/TrainingProgram';
import { AssembleTraining } from '../pages/AssembleTraining';
import { CreatingTrainingProvider } from '../contexts/CreateTrainingContext';

const Stack = createNativeStackNavigator();

export function Root(): JSX.Element {
  return (
    <NavigationContainer>
      <CreatingTrainingProvider>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: '#fff',
              marginTop: 35,
              padding: 15,
            },
          }}
          initialRouteName="TrainingProgram"
        >
          <Stack.Screen
            name="TrainingProgram"
            component={TrainingProgram}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AssembleTraining"
            component={AssembleTraining}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </CreatingTrainingProvider>
    </NavigationContainer>
  );
}
