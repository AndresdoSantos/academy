import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
`;

export const ButtonDayWrapper = styled.TouchableOpacity``;

type TButtonDayText = { today?: boolean };

export const ButtonDayText = styled.Text<TButtonDayText>`
  font-weight: 700;
  color: ${(props) => (props.today ? '#3e62fa' : '#777')};
`;
