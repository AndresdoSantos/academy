import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ptBrLocale from 'date-fns/locale/pt-BR';

import {
  InvoiceContent,
  InvoiceWrapper,
  PasswordDot,
  PasswordDotsWrapper,
  PasswordSection,
  PasswordSectionItem,
  PasswordWrapper,
  PaymentsAcademyStoreButton,
  PaymentsContainer,
  PaymentsHeaderWrapper,
  PaymentsHistoricTitle,
  PaymentsPurchasePriceWrapper,
  PaymentsPurchaseWrapper,
  PaymentsSendExpensesButton,
  PaymentsShowInvoiceIsOpenOrClose,
  PaymentsSubHeaderWrapper,
  PaymentsTitle,
} from './styles';

export function Payments(): JSX.Element {
  const { goBack } = useNavigation();

  const invoiceIsOpen = true;

  const [password, setPassword] = useState<string[]>([]);
  const [passwordIsConfirmed, setPasswordIsConfirmed] = useState(false);
  const [isHistoric, setIsHistoric] = useState(false);

  const sectionOne = useMemo(() => ['1', '2', '3'], []);
  const sectionTwo = useMemo(() => ['4', '5', '6'], []);
  const sectionTree = useMemo(() => ['7', '8', '9'], []);

  const handlePasswordSubmission = useCallback(
    (passwordItem: string): void => {
      setPassword([...password, passwordItem]);
    },
    [password]
  );

  useEffect((): void => {
    if (password.length === 4) {
      setPasswordIsConfirmed(true);
    } else {
      setPasswordIsConfirmed(false);
    }
  }, [password]);

  const academyPurchases = useMemo(
    () => [
      { id: 1, purhchase: 'Training shirt', price: 45, cents: 58 },
      { id: 2, purhchase: 'Equipment rental', price: 90, cents: 0 },
    ],
    []
  );

  return (
    <PaymentsContainer>
      <PaymentsHeaderWrapper>
        <Ionicons name="chevron-back" size={20} onPress={() => goBack()} />
        {passwordIsConfirmed && (
          <PaymentsShowInvoiceIsOpenOrClose isOpen={invoiceIsOpen}>
            <Text style={{ color: invoiceIsOpen ? '#10B981' : '#EF4444' }}>
              {invoiceIsOpen ? 'aberto' : 'atrasado'}
            </Text>
          </PaymentsShowInvoiceIsOpenOrClose>
        )}
      </PaymentsHeaderWrapper>

      <PaymentsSubHeaderWrapper>
        <PaymentsTitle>Pagamentos</PaymentsTitle>
      </PaymentsSubHeaderWrapper>

      {!passwordIsConfirmed && (
        <>
          <Text style={{ color: '#374151' }}>
            Por favor, entre com a sua senha
          </Text>
          <PasswordDotsWrapper>
            {password[0] && <PasswordDot />}

            {password[1] && <PasswordDot />}

            {password[2] && <PasswordDot />}

            {password[3] && <PasswordDot />}
          </PasswordDotsWrapper>

          <PasswordWrapper>
            <FlatList
              data={sectionOne}
              keyExtractor={(item) => item}
              horizontal
              contentContainerStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                marginTop: 50,
                width: '100%',
                height: 50,
              }}
              renderItem={({ item }) => (
                <PasswordSectionItem
                  onPress={() => handlePasswordSubmission(item)}
                >
                  <Text>{item}</Text>
                </PasswordSectionItem>
              )}
            />

            <FlatList
              data={sectionTwo}
              keyExtractor={(item) => String(item)}
              horizontal
              contentContainerStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                marginTop: 50,
                width: '100%',
                height: 50,
              }}
              renderItem={({ item }) => (
                <PasswordSectionItem
                  onPress={() => handlePasswordSubmission(item)}
                >
                  <Text>{item}</Text>
                </PasswordSectionItem>
              )}
            />

            <FlatList
              data={sectionTree}
              keyExtractor={(item) => String(item)}
              horizontal
              contentContainerStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                marginTop: 50,
                width: '100%',
                height: 50,
              }}
              renderItem={({ item }) => (
                <PasswordSectionItem
                  onPress={() => handlePasswordSubmission(item)}
                >
                  <Text>{item}</Text>
                </PasswordSectionItem>
              )}
            />

            <PasswordSection>
              <PasswordSectionItem
                onPress={() => handlePasswordSubmission('0')}
              >
                <Text>0</Text>
              </PasswordSectionItem>
            </PasswordSection>
          </PasswordWrapper>
        </>
      )}

      {passwordIsConfirmed && (
        <>
          <InvoiceWrapper>
            <View>
              <InvoiceContent>
                <Text
                  style={{
                    color: invoiceIsOpen ? '#59BD7D' : '#EF4444',
                    marginBottom: 25,
                    marginRight: 2,
                  }}
                >
                  R$
                </Text>
                <Text
                  style={{
                    color: invoiceIsOpen ? '#59BD7D' : '#EF4444',
                    fontSize: 45,
                    fontWeight: '700',
                  }}
                >
                  135
                </Text>
                <Text
                  style={{
                    color: invoiceIsOpen ? '#59BD7D' : '#EF4444',
                    marginBottom: 10,
                  }}
                >
                  .58
                </Text>
              </InvoiceContent>

              <Text style={{ color: '#9CA3AF' }}>
                Fatura de {format(new Date(), 'MMMM', { locale: ptBrLocale })}
              </Text>
            </View>

            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['#6666FF', '#79B0C0']}
              style={{
                height: 40,
                paddingHorizontal: 15,
                borderRadius: 80,
                marginTop: 5,
              }}
            >
              <PaymentsAcademyStoreButton>
                <SimpleLineIcons
                  name="handbag"
                  size={15}
                  color="#fff"
                  style={{ marginRight: 10, fontWeight: '700' }}
                />
                <Text style={{ color: '#fff', fontWeight: '700' }}>
                  Ver loja da academia
                </Text>
              </PaymentsAcademyStoreButton>
            </LinearGradient>
          </InvoiceWrapper>

          <PaymentsHistoricTitle>Compras na academia</PaymentsHistoricTitle>

          <FlatList
            data={academyPurchases}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PaymentsPurchaseWrapper>
                <Text>{item.purhchase}</Text>
                <PaymentsPurchasePriceWrapper>
                  <Text style={{ fontSize: 15 }}>R$ {item.price}.</Text>
                  <Text style={{ fontSize: 12, marginTop: 1 }}>
                    {item.cents}
                  </Text>
                </PaymentsPurchasePriceWrapper>
              </PaymentsPurchaseWrapper>
            )}
          />
        </>
      )}

      {passwordIsConfirmed && (
        <PaymentsSendExpensesButton>
          <Text style={{ fontWeight: '700', color: '#fff' }}>
            Enviar despesas
          </Text>
        </PaymentsSendExpensesButton>
      )}
    </PaymentsContainer>
  );
}
