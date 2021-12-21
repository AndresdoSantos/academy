import React, { useMemo } from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';

import { Container, OnboardingContent } from './styles';

export function Onboarding(): JSX.Element {
  const onboardingItems = useMemo(
    () => [
      {
        id: 0,
        title: 'Corpo',
        description: 'Mantenha seu corpo saudável',
      },
      {
        id: 1,
        title: 'Corpo',
        description: 'Mantenha seu corpo saudável',
      },
      {
        id: 2,
        title: 'Corpo',
        description: 'Mantenha seu corpo saudável',
      },
    ],
    []
  );

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={onboardingItems}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <OnboardingContent>
            <View
              style={{
                height: 4,
                width: index === item.id ? 30 : 4,
                backgroundColor: '#000',
                borderRadius: 30,
              }}
            />
            <Text>{index}</Text>
            <Text>{item.description}</Text>
          </OnboardingContent>
        )}
      />
    </Container>
  );
}
