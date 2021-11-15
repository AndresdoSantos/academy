import React, { useMemo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';

import {
  BodyBasicOtherAcademyServicesWrapper,
  BodyBasicSectionItemContent,
  BodyBasicSectionItemWrapper,
  BodyContainer,
  BodyHeaderWrapper,
  BodySubtitle,
  BodySubtitleWrapper,
  BodyTitle,
} from './styles';

type BodyBasic = 'peso' | 'altura';

export function Body(): JSX.Element {
  const { goBack } = useNavigation();

  const basics = useMemo((): BodyBasic[] => ['peso', 'altura'], []);

  return (
    <BodyContainer>
      <BodyHeaderWrapper>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="chevron-back" size={20} />
        </TouchableOpacity>
      </BodyHeaderWrapper>

      <BodyTitle>Meu Corpo</BodyTitle>

      <BodySubtitleWrapper>
        <BodySubtitle>Básico</BodySubtitle>
      </BodySubtitleWrapper>

      <FlatList
        data={basics}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
        }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <BodyBasicSectionItemWrapper item={item}>
            {item === 'peso' ? (
              <BodyBasicSectionItemContent>
                <Text
                  style={{ fontSize: 35, fontWeight: 'bold', color: '#fff' }}
                >
                  72
                </Text>
                <Text style={{ marginBottom: 5, color: '#fff' }}>kg</Text>
              </BodyBasicSectionItemContent>
            ) : (
              <BodyBasicSectionItemContent>
                <Text
                  style={{ fontSize: 35, fontWeight: 'bold', color: '#fff' }}
                >
                  175
                </Text>
                <Text style={{ marginBottom: 5, color: '#fff' }}>cm</Text>
              </BodyBasicSectionItemContent>
            )}
            <Text style={{ marginTop: 10, fontSize: 15, color: '#fff' }}>
              {item === 'peso' ? 'peso' : 'altura'}
            </Text>
          </BodyBasicSectionItemWrapper>
        )}
      />
      <BodyBasicOtherAcademyServicesWrapper>
        <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#fff' }}>
          Krav Maga, dança...
        </Text>
        <Text style={{ marginTop: 10, color: '#fff' }}>
          Outros serviços da academia
        </Text>
      </BodyBasicOtherAcademyServicesWrapper>
    </BodyContainer>
  );
}
