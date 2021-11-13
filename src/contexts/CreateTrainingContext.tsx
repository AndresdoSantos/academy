import React, { useCallback, ReactNode, useState } from 'react';
import { createContext } from 'use-context-selector';

export type Training = { name: string; repetitions: string; weight: string };

export type CreateTrainingContextData = {
  getTraining(data: Training): void;
  trainingList: Training[] | [];
};

export const CreatingTrainingContext = createContext(
  {} as CreateTrainingContextData
);

export function CreatingTrainingProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [trainingList, setTrainingList] = useState<Training[] | []>([]);

  const getTraining = useCallback((data: Training): void => {
    setTrainingList([...trainingList, data]);
  }, []);

  return (
    <CreatingTrainingContext.Provider
      value={{
        getTraining,
        trainingList,
      }}
    >
      {children}
    </CreatingTrainingContext.Provider>
  );
}
