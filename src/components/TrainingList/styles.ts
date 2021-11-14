import styled from 'styled-components/native';

export const CardContainer = styled.View`
  height: 70px;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: #374151;
`;

export const CardSubtitle = styled.Text`
  font-size: 12px;
`;

export const TimeWrapper = styled.View`
  background-color: #e5e7eb;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 2px 4px;
  border-radius: 5px;
`;

export const TimeText = styled.Text`
  font-size: 11px;
  font-weight: bold;
`;
