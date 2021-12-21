import { useContextSelector } from 'use-context-selector';

import {
  TrainingContextData,
  TrainingContext,
} from '../contexts/TrainingContext';

type UseTrainingReturn = TrainingContextData;

export function useTraining(): UseTrainingReturn {
  const getTraining = useContextSelector(
    TrainingContext,
    (training) => training.getTraining
  );

  const trainingList = useContextSelector(
    TrainingContext,
    (training) => training.trainingList
  );

  const handleSelectTraining = useContextSelector(
    TrainingContext,
    (training) => training.handleSelectTraining
  );

  const actualInformationOfTheTrainingSelected = useContextSelector(
    TrainingContext,
    (training) => training.actualInformationOfTheTrainingSelected
  );

  return {
    getTraining,
    trainingList,
    handleSelectTraining,
    actualInformationOfTheTrainingSelected,
  };
}
