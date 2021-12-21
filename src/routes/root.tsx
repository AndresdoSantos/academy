import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TrainingProvider } from '../contexts/TrainingContext';

import { TrainingProgram } from '../pages/TrainingProgram';
import { Profile } from '../pages/Profile';
import { Goal } from '../pages/Profile/Goals';
import { Body } from '../pages/Profile/Body';
import { Settings } from '../pages/Profile/Settings';
import { Payments } from '../pages/Profile/Settings/Payments';
import { Onboarding } from '../pages/Onboarding';
import { SignIn } from '../pages/SignIn';

const Stack = createNativeStackNavigator();

export function Root(): JSX.Element {
  return (
    <NavigationContainer>
      <TrainingProvider>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: '#fff',
              marginTop: 35,
            },
          }}
          initialRouteName="SignIn"
        >
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
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
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Payments"
            component={Payments}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </TrainingProvider>
    </NavigationContainer>
  );
}
