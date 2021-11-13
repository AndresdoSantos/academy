import { useContextSelector } from 'use-context-selector';

import {
  CreateTrainingContextData,
  CreatingTrainingContext,
} from '../contexts/CreateTrainingContext';

type UseTrainingReturn = CreateTrainingContextData;

export function useTraining(): UseTrainingReturn {
  const getTraining = useContextSelector(
    CreatingTrainingContext,
    (training) => training.getTraining
  );

  const trainingList = useContextSelector(
    CreatingTrainingContext,
    (training) => training.trainingList
  );

  return {
    getTraining,
    trainingList,
  };
}
