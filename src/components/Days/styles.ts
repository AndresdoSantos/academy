import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  padding: 0 15px;
`;

type TButtonDay = { today?: boolean };

export const ButtonDayWrapper = styled.TouchableOpacity<TButtonDay>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => (props.today ? '#5bd2bb' : '#F9FAFB')};
  width: 50px;
  height: 80px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 15px;
  padding: 10px 0;
`;

export const ButtonDayText = styled.Text<TButtonDay>`
  font-weight: 900;
  color: ${(props) => (props.today ? '#fff' : '#5A6482')};
`;
