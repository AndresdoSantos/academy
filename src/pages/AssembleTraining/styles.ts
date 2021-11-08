import styled from 'styled-components/native';

export const Container = styled.View``;

export const BackButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Form = styled.View`
  display: flex;
  margin-top: 20px;
`;

type InputWrapperProps = {
  isTwoFields?: boolean;
};

export const InputWrapper = styled.View<InputWrapperProps>`
  display: flex;
  align-items: flex-start;
  height: 60px;
  width: ${(props) => (props.isTwoFields ? '48%' : '100%')};
  margin: 10px 0;
`;

export const Label = styled.Text`
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  padding: 0 10px;
`;

export const TwoInputs = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

type ButtonConfirmTrainingWrapperProps = {
  confirm?: boolean;
  isTwoButtons?: boolean;
};

export const ButtonConfirmTrainingWrapper = styled.TouchableOpacity<ButtonConfirmTrainingWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 50px;
  width: 100%;
  width: ${(props) => (props.isTwoButtons ? '48%' : '100%')};

  background-color: ${(props) => (props.confirm ? '#71ea93' : '#3b82f6')};
  border-radius: 10px;
  margin-top: 20px;
`;
