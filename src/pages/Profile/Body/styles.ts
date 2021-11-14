import styled from 'styled-components/native';

export const BodyContainer = styled.View`
  padding: 40px 30px;
`;

export const BodyHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const BodyTitle = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #374151;
`;

export const BodySubtitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
`;

export const BodySubtitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #374151;
`;

type BodyBasicSectionItemProps = {
  item: 'weight' | 'height';
};

export const BodyBasicSectionItem = styled.View<BodyBasicSectionItemProps>`
  height: 150px;
  width: 170px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.item === 'height' ? '#5420FF' : '#FE6B01'};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
`;
