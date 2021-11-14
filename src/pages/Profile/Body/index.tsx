import React, { useMemo } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';

import {
  BodyBasicSectionItem,
  BodyContainer,
  BodyHeaderWrapper,
  BodySubtitle,
  BodySubtitleWrapper,
  BodyTitle,
} from './styles';

type BodyBasic = 'weight' | 'height';

export function Body(): JSX.Element {
  const { goBack } = useNavigation();

  const basics = useMemo((): BodyBasic[] => ['weight', 'height'], []);

  return (
    <BodyContainer>
      <BodyHeaderWrapper>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="chevron-back" size={20} />
        </TouchableOpacity>
      </BodyHeaderWrapper>

      <BodyTitle>My Body</BodyTitle>

      <BodySubtitleWrapper>
        <BodySubtitle>Basics</BodySubtitle>
      </BodySubtitleWrapper>

      <FlatList
        data={basics}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
        }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <BodyBasicSectionItem item={item}>
            <Text style={{ fontSize: 30, color: '#fff' }}>
              {item === 'weight' ? '72kg' : '175cm'}
            </Text>
            <Text style={{ fontSize: 20, color: '#fff' }}>
              {item === 'weight' ? 'Weight' : 'Height'}
            </Text>
          </BodyBasicSectionItem>
        )}
      />
    </BodyContainer>
  );
}
