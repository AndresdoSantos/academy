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

      <GoalTitle>Goals</GoalTitle>

      <GoalTabWrapper>
        <GoalTabTitle>Gain weight</GoalTabTitle>
      </GoalTabWrapper>

      <GoalSectionWrapper>
        <GoalSectionLeft>
          <GoalSectionLeftTextWrapper>
            <Text style={{ fontSize: 40, color: '#374151' }}>72</Text>
            <Text style={{ fontSize: 16, marginBottom: 5, color: '#374151' }}>
              kg
            </Text>
          </GoalSectionLeftTextWrapper>
          <Text style={{ color: '#9CA3AF' }}>Current</Text>
        </GoalSectionLeft>

        <Ionicons name="arrow-forward" size={20} color="#9CA3AF" />

        <GoalSectionRight>
          <GoalSectionLeftTextWrapper>
            <Text style={{ fontSize: 40, color: '#374151' }}>74</Text>
            <Text style={{ fontSize: 16, marginBottom: 5, color: '#374151' }}>
              kg
            </Text>
          </GoalSectionLeftTextWrapper>
          <Text style={{ color: '#9CA3AF' }}>Goal</Text>
        </GoalSectionRight>
      </GoalSectionWrapper>
    </GoalContainer>
  );
}
