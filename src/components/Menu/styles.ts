import styled from 'styled-components/native';

type TContainer = {
  screenHeight: number;
};

export const Container = styled.View<TContainer>`
  height: ${(props) => props.screenHeight && props.screenHeight - 300};
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
`;

export const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #269ccd;
  padding: 0 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const HeaderTitle = styled.Text`
  font-weight: 600;
  color: #fff;
  font-size: 20px;
`;
