import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
`;

export const OnboardingContent = styled.View`
  width: ${width}px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;
