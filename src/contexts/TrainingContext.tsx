import React, { useCallback, ReactNode, useState } from 'react';
import { createContext } from 'use-context-selector';

export type Training = { name: string; repetitions: string; weight: string };

export type TrainingData = {
  id: number;
  name: string;
  wereDoYouExercise: string;
  time: string;
  isConcluded: boolean;
};

export type TrainingContextData = {
  getTraining(data: Training): void;
  trainingList: Training[] | [];

  handleSelectTraining(item?: TrainingData): void;
  actualInformationOfTheTrainingSelected: TrainingData | undefined;
};

export const TrainingContext = createContext({} as TrainingContextData);

export function TrainingProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [trainingList, setTrainingList] = useState<Training[] | []>([]);

  const [
    actualInformationOfTheTrainingSelected,
    setActualInformationOfTheTrainingSelected,
  ] = useState<TrainingData | undefined>(undefined);

  const getTraining = useCallback((data: Training): void => {
    setTrainingList([...trainingList, data]);
  }, []);

  const handleSelectTraining = useCallback((item?: TrainingData): void => {
    setActualInformationOfTheTrainingSelected(item);
  }, []);

  return (
    <TrainingContext.Provider
      value={{
        getTraining,
        trainingList,
        handleSelectTraining,
        actualInformationOfTheTrainingSelected,
      }}
    >
      {children}
    </TrainingContext.Provider>
  );
}
