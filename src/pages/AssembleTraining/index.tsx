import React, { useState } from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Formik, useFormik } from 'formik';

import {
  BackButtonWrapper,
  ButtonConfirmTrainingWrapper,
  Container,
  Form,
  Header,
  Input,
  InputWrapper,
  Label,
  TwoInputs,
} from './styles';
import { format } from 'date-fns';
import { useTraining } from '../../hooks/useTraining';

type Training = { name: string; repetitions: string; weight: string };
type BasicInformation = {
  goal: string;
  weekFrequency: string;
  initDate: string;
  exchangeDate: string;
  break: string;
};

export function AssembleTraining(): JSX.Element {
  const { goBack } = useNavigation();
  const { trainingList, getTraining } = useTraining();

  const [basicInformation, setBasicInformation] =
    useState<BasicInformation | null>(null);
  const [isBasicInformation, setIsBasicInformation] = useState(true);

  // console.log('basicInformation', basicInformation);

  return (
    <Container>
      <Header>
        <BackButtonWrapper onPress={() => goBack()}>
          <Ionicons
            name="arrow-back"
            style={{ marginRight: 10, marginTop: 2 }}
          />
          <Text>Montando o treino A</Text>
        </BackButtonWrapper>

        {isBasicInformation && (
          <Text style={{ color: '#3b82f6' }}>Informações básicas</Text>
        )}

        {!isBasicInformation && (
          <Text style={{ color: '#3b82f6' }}>
            Treino {trainingList.length + 1}
          </Text>
        )}
      </Header>

      {isBasicInformation && (
        <Formik
          initialValues={{
            goal: '',
            weekFrequency: '',
            initDate: '',
            exchangeDate: '',
            break: '',
          }}
          onSubmit={(values) => {
            setBasicInformation(values);

            setIsBasicInformation(false);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, resetForm }) => (
            <Form>
              <InputWrapper>
                <Label>Objetivo</Label>
                <Input
                  onChangeText={handleChange('goal')}
                  onBlur={handleBlur('goal')}
                  value={values.goal}
                  placeholder="Ex: Hipertrofia"
                />
              </InputWrapper>

              <TwoInputs>
                <InputWrapper isTwoFields>
                  <Label>Frequência da semana</Label>
                  <Input
                    onChangeText={handleChange('weekFrequency')}
                    onBlur={handleBlur('weekFrequency')}
                    keyboardType="numeric"
                    value={values.weekFrequency}
                    placeholder="Ex: 3"
                  />
                </InputWrapper>
                <InputWrapper isTwoFields>
                  <Label>Intervalo entre treinos</Label>
                  <Input
                    onChangeText={handleChange('break')}
                    onBlur={handleBlur('break')}
                    value={values.break}
                    placeholder="Ex: 1' "
                  />
                </InputWrapper>
              </TwoInputs>

              <TwoInputs>
                <InputWrapper isTwoFields>
                  <Label>Data de início</Label>
                  <Input
                    onChangeText={handleChange('initDate')}
                    onBlur={handleBlur('initDate')}
                    value={values.initDate}
                    placeholder={`Ex: ${format(new Date(), 'dd/MM/yyyy')}`}
                  />
                </InputWrapper>
                <InputWrapper isTwoFields>
                  <Label>Data de troca</Label>
                  <Input
                    onChangeText={handleChange('exchangeDate')}
                    onBlur={handleBlur('exchangeDate')}
                    value={values.exchangeDate}
                    placeholder="Ex: 30/12/2028"
                  />
                </InputWrapper>
              </TwoInputs>

              <ButtonConfirmTrainingWrapper
                onPress={() => {
                  handleSubmit();
                }}
              >
                <MaterialCommunityIcons
                  name="arm-flex"
                  size={24}
                  color="#fff"
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: '#fff' }}>Enviar</Text>
              </ButtonConfirmTrainingWrapper>
            </Form>
          )}
        </Formik>
      )}

      {!isBasicInformation && (
        <Formik
          initialValues={{ name: '', repetitions: '', weight: '' }}
          onSubmit={(values) => getTraining(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, resetForm }) => (
            <Form>
              <InputWrapper>
                <Label>Nome</Label>
                <Input
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Ex: Bíceps martelo"
                />
              </InputWrapper>

              <TwoInputs>
                <InputWrapper isTwoFields>
                  <Label>Repetições</Label>
                  <Input
                    onChangeText={handleChange('repetitions')}
                    onBlur={handleBlur('repetitions')}
                    keyboardType="numeric"
                    value={values.repetitions}
                    placeholder="Ex: 3"
                  />
                </InputWrapper>
                <InputWrapper isTwoFields>
                  <Label>Peso</Label>
                  <Input
                    onChangeText={handleChange('weight')}
                    onBlur={handleBlur('weight')}
                    keyboardType="numeric"
                    value={values.weight}
                    placeholder="Ex: 3"
                  />
                </InputWrapper>
              </TwoInputs>
              <TwoInputs>
                <ButtonConfirmTrainingWrapper
                  isTwoButtons={trainingList.length > 0}
                  onPress={() => handleSubmit()}
                >
                  <MaterialCommunityIcons
                    name="arm-flex"
                    size={24}
                    color="#fff"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ color: '#fff' }}>Enviar</Text>
                </ButtonConfirmTrainingWrapper>

                {trainingList.length > 0 && (
                  <ButtonConfirmTrainingWrapper
                    confirm
                    isTwoButtons
                    onPress={() => goBack()}
                  >
                    <Ionicons
                      name="alarm-sharp"
                      size={24}
                      color="#fff"
                      style={{ marginRight: 5 }}
                    />

                    <Text style={{ color: '#fff' }}>Começar a treinar</Text>
                  </ButtonConfirmTrainingWrapper>
                )}
              </TwoInputs>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
}
