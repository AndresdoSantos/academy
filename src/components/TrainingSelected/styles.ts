import styled from 'styled-components/native';

export const TrainingStartedContainer = styled.View`
  padding: 0 30px 0 30px;
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TrainingStartedHeaderWrapper = styled.View`
  padding: 40px 30px 0 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const TrainingStartedTitle = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #374151;
  margin-bottom: 50px;
`;

export const TrainingStartedMinuteTitle = styled.Text`
  font-size: 50px;
  font-weight: 700;
  color: #374151;
  margin-bottom: 50px;
`;

export const ButtonStartTraining = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  right: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #5bd2bb;
  height: 40px;
  padding: 0 20px;
  transform: rotate(2deg);
`;

export const BackgroundButtonStartTraining = styled.View`
  position: absolute;
  bottom: 40px;
  right: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #5420ff;
  height: 40px;
  width: 150px;
  transform: rotate(-3deg);
`;
