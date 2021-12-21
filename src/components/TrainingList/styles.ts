import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  height: 70px;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type DotConcludeProps = {
  isConcluded: boolean;
};

export const DotConclude = styled.View<DotConcludeProps>`
  height: 10px;
  width: 10px;
  border: 1px solid black;
  margin-right: 15px;
  border-radius: 10px;
  background-color: ${(props) => (props.isConcluded ? '#5bd2bb' : '#fff')};
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

type TrainingProgramHeaderWrapperProps = {
  isExpanded: boolean;
};

export const TrainingProgramHeaderWrapper = styled.View<TrainingProgramHeaderWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: ${(props) => (props.isExpanded ? 20 : 0)}px;
  padding: 0 ${(props) => (props.isExpanded ? 15 : 0)}px;
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
