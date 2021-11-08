import React, { useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native';

import { Container, ButtonDayText, ButtonDayWrapper } from './styles';

type TDay =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

export function Days(): JSX.Element {
  const [actualDay, setActualDay] = useState<TDay | undefined>(undefined);

  useEffect((): void => {
    switch (new Date().getDay()) {
      case 0:
        setActualDay('sunday');
        break;
      case 1:
        setActualDay('monday');
        break;
      case 2:
        setActualDay('tuesday');
        break;
      case 3:
        setActualDay('wednesday');
        break;
      case 4:
        setActualDay('thursday');
        break;
      case 5:
        setActualDay('friday');
        break;
      case 6:
        setActualDay('saturday');
        break;

      default:
        setActualDay(undefined);
        break;
    }
  }, []);

  const days = useMemo(
    (): TDay[] => [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ],
    []
  );

  return (
    <Container>
      <FlatList
        data={days}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}
        renderItem={({ item }) => (
          <>
            {actualDay === item ? (
              <ButtonDayText today>Hoje</ButtonDayText>
            ) : (
              <ButtonDayWrapper>
                <ButtonDayText>
                  {item === 'sunday' && 'Dom'}
                  {item === 'monday' && 'Seg'}
                  {item === 'tuesday' && 'Ter'}
                  {item === 'wednesday' && 'Qua'}
                  {item === 'thursday' && 'Qui'}
                  {item === 'friday' && 'Sex'}
                  {item === 'saturday' && 'Sáb'}
                </ButtonDayText>
              </ButtonDayWrapper>
            )}
          </>
        )}
      />
    </Container>
  );
}
