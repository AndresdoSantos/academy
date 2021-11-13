import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Text } from 'react-native';

import { Container, ButtonDayText, ButtonDayWrapper } from './styles';
import { addDays, format, startOfWeek } from 'date-fns';

export function Days(): JSX.Element {
  const actualDay = useMemo((): number => new Date().getDate(), []);
  const firstDOW = useMemo((): Date => startOfWeek(new Date()), []);

  const firstDOWFormatted = useMemo(
    (): number => Number(format(firstDOW, 'dd')),
    []
  );

  const shortWeekDaysArray = Array.from(Array(7)).map((e, i) =>
    format(addDays(firstDOW, i), 'EEEEEE')
  );

  return (
    <Container>
      <FlatList
        data={shortWeekDaysArray}
        keyExtractor={(item) => String(item)}
        horizontal
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}
        renderItem={({ index }) => (
          <>
            {index === 0 && firstDOWFormatted && (
              <ButtonDayWrapper today={firstDOWFormatted === actualDay}>
                <ButtonDayText today={firstDOWFormatted === actualDay}>
                  SUN
                </ButtonDayText>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: firstDOWFormatted === actualDay ? '#fff' : '#000',
                  }}
                >
                  {firstDOWFormatted}
                </Text>
              </ButtonDayWrapper>
            )}
            {index === 1 && firstDOWFormatted + 1 && (
              <ButtonDayWrapper today={firstDOWFormatted + 1 === actualDay}>
                <ButtonDayText today={firstDOWFormatted + 1 === actualDay}>
                  MON
                </ButtonDayText>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color:
                      firstDOWFormatted + 1 === actualDay ? '#fff' : '#000',
                  }}
                >
                  {firstDOWFormatted + 1}
                </Text>
              </ButtonDayWrapper>
            )}
            {index === 2 && firstDOWFormatted + 2 && (
              <ButtonDayWrapper today={firstDOWFormatted + 2 === actualDay}>
                <ButtonDayText today={firstDOWFormatted + 2 === actualDay}>
                  TUE
                </ButtonDayText>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color:
                      firstDOWFormatted + 2 === actualDay ? '#fff' : '#000',
                  }}
                >
                  {firstDOWFormatted + 2}
                </Text>
              </ButtonDayWrapper>
            )}
            {index === 3 && firstDOWFormatted + 3 && (
              <ButtonDayWrapper today={firstDOWFormatted + 3 === actualDay}>
                <ButtonDayText today={firstDOWFormatted + 3 === actualDay}>
                  WED
                </ButtonDayText>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color:
                      firstDOWFormatted + 3 === actualDay ? '#fff' : '#000',
                  }}
                >
                  {firstDOWFormatted + 3}
                </Text>
              </ButtonDayWrapper>
            )}
            {index === 4 && firstDOWFormatted + 4 && (
              <ButtonDayWrapper today={firstDOWFormatted + 4 === actualDay}>
                <ButtonDayText today={firstDOWFormatted + 4 === actualDay}>
                  THU
                </ButtonDayText>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color:
                      firstDOWFormatted + 4 === actualDay ? '#fff' : '#000',
                  }}
                >
                  {firstDOWFormatted + 4}
                </Text>
              </ButtonDayWrapper>
            )}
            {index === 5 && firstDOWFormatted + 5 && (
              <ButtonDayWrapper today={firstDOWFormatted + 5 === actualDay}>
                <ButtonDayText today={firstDOWFormatted + 5 === actualDay}>
                  FRI
                </ButtonDayText>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color:
                      firstDOWFormatted + 5 === actualDay ? '#fff' : '#000',
                  }}
                >
                  {firstDOWFormatted + 5}
                </Text>
              </ButtonDayWrapper>
            )}
            {index === 6 && (
              <ButtonDayWrapper today={firstDOWFormatted + 6 === actualDay}>
                <ButtonDayText today={firstDOWFormatted + 6 === actualDay}>
                  SAT
                </ButtonDayText>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color:
                      firstDOWFormatted + 6 === actualDay ? '#fff' : '#000',
                  }}
                >
                  {firstDOWFormatted + 6}
                </Text>
              </ButtonDayWrapper>
            )}
          </>
        )}
      />
    </Container>
  );
}
