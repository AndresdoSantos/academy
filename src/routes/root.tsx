import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CreatingTrainingProvider } from '../contexts/CreateTrainingContext';

import { TrainingProgram } from '../pages/TrainingProgram';
import { Profile } from '../pages/Profile';
import { Goal } from '../pages/Profile/Goals';
import { Body } from '../pages/Profile/Body';

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
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Goal"
            component={Goal}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Body"
            component={Body}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </CreatingTrainingProvider>
    </NavigationContainer>
  );
}
