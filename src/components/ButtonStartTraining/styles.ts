import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #5bd2bb;
  border-radius: 10px;
  height: 50px;
  position: absolute;
  bottom: 5px;
  right: 10px;
  left: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
