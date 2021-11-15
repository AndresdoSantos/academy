import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const PaymentsContainer = styled.View`
  padding: 40px 30px;
  height: 100%;
`;

export const PaymentsHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  position: relative;
`;

export const PaymentsSubHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const PaymentsTitle = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #374151;
`;

type InvoiceSituation = {
  isOpen: boolean;
};

export const PaymentsShowInvoiceIsOpenOrClose = styled.View<InvoiceSituation>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.isOpen ? '#D1FAE5' : '#FEE2E2')};
  border: 1px solid ${(props) => (props.isOpen ? '#10B981' : '#EF4444')};
`;

export const PasswordDotsWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 50px;
  margin-top: 25px;
`;

export const PasswordDot = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: #374151;
  margin-right: 15px;
`;

export const PasswordWrapper = styled.View`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PasswordSection = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const PasswordSectionItem = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InvoiceWrapper = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InvoiceContent = styled.View`
  margin-top: 10px;
  flex-direction: row;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const PaymentsAcademyStoreButton = styled.TouchableOpacity`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const PaymentsHistoricTitle = styled.Text`
  margin-top: 50px;
  margin-bottom: 25px;
  color: #374151;
  font-size: 20px;
  font-weight: 700;
`;

export const PaymentsPurchaseWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 40px;
`;

export const PaymentsPurchasePriceWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

export const PaymentsSendExpensesButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: ${width}px;
  background-color: #59bd7d;
`;
