import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  position: relative;
`;

export const TrainingProgramHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const TrainingProgramHeaderTitle = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: #4b5563;
`;

export const TrainingProgramHeaderOptions = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TrainingProgramHeaderOptionDateWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: 1px solid #6b7280;
  border-radius: 20px;
  height: 30px;
  padding: 0 10px;
`;
