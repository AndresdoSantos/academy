import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
  height: ${height - 250}px;
  width: 100%;
`;

type TButtonTraining = {
  isActive: boolean;
};

export const ButtonTrainingWrapper = styled.TouchableOpacity<TButtonTraining>`
  background-color: ${(props) => (props.isActive ? '#A7F3D0' : '#F3F4F6')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100px;
  border-radius: 15px;
`;

export const ButtonTrainingText = styled.Text<TButtonTraining>`
  color: ${(props) => (props.isActive ? '#10B981' : '#374151')};
`;

export const SelectTrainingButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #a7f3d0;

  width: 200px;
  height: 40px;
  border-radius: 15px;
`;

export const SelectTrainingButtonText = styled.Text`
  color: #10b981;
  margin-right: 5px;
  font-weight: 700;
`;

export const TrainingSelectedWrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const TrainingSelectedHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BackButtonWrapper = styled.TouchableOpacity`
  border: 1px solid #374151;
  height: 22px;
  width: 22px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const TrainingSelectedTitleWrapper = styled.View`
  border: 1px solid #374151;
  border-radius: 50px;
  height: 22px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrainingSelectedTitleText = styled.Text`
  color: #374151;
  font-size: 13px;
`;
