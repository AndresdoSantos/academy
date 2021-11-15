import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
  GoalContainer,
  GoalHeaderWrapper,
  GoalSectionLeft,
  GoalSectionLeftTextWrapper,
  GoalSectionRight,
  GoalSectionWrapper,
  GoalTabTitle,
  GoalTabWrapper,
  GoalTitle,
} from './styles';

export function Goal(): JSX.Element {
  const { goBack } = useNavigation();

  return (
    <GoalContainer>
      <GoalHeaderWrapper>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="chevron-back" size={20} />
        </TouchableOpacity>
      </GoalHeaderWrapper>

      <GoalTitle>Metas</GoalTitle>

      <GoalTabWrapper>
        <GoalTabTitle>Ganhar massa magra</GoalTabTitle>
      </GoalTabWrapper>

      <GoalSectionWrapper>
        <GoalSectionLeft>
          <GoalSectionLeftTextWrapper>
            <Text style={{ fontSize: 40, color: '#374151' }}>72</Text>
            <Text style={{ fontSize: 16, marginBottom: 5, color: '#374151' }}>
              kg
            </Text>
          </GoalSectionLeftTextWrapper>
          <Text style={{ color: '#9CA3AF' }}>Atual</Text>
        </GoalSectionLeft>

        <Ionicons name="arrow-forward" size={20} color="#9CA3AF" />

        <GoalSectionRight>
          <GoalSectionLeftTextWrapper>
            <Text style={{ fontSize: 40, color: '#374151' }}>74</Text>
            <Text style={{ fontSize: 16, marginBottom: 5, color: '#374151' }}>
              kg
            </Text>
          </GoalSectionLeftTextWrapper>
          <Text style={{ color: '#9CA3AF' }}>Objetivo</Text>
        </GoalSectionRight>
      </GoalSectionWrapper>

      <GoalTabWrapper>
        <GoalTabTitle>Perder peso</GoalTabTitle>
      </GoalTabWrapper>

      <GoalSectionWrapper>
        <GoalSectionLeft>
          <GoalSectionLeftTextWrapper>
            <Text style={{ fontSize: 40, color: '#374151' }}>20</Text>
            <Text style={{ fontSize: 16, marginBottom: 5, color: '#374151' }}>
              %
            </Text>
          </GoalSectionLeftTextWrapper>
          <Text style={{ color: '#9CA3AF' }}>Atual</Text>
        </GoalSectionLeft>

        <Ionicons name="arrow-forward" size={20} color="#9CA3AF" />

        <GoalSectionRight>
          <GoalSectionLeftTextWrapper>
            <Text style={{ fontSize: 40, color: '#374151' }}>5</Text>
            <Text style={{ fontSize: 16, marginBottom: 5, color: '#374151' }}>
              %
            </Text>
          </GoalSectionLeftTextWrapper>
          <Text style={{ color: '#9CA3AF' }}>Objetivo</Text>
        </GoalSectionRight>
      </GoalSectionWrapper>
    </GoalContainer>
  );
}
