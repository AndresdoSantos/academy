import styled from 'styled-components/native';

export const SettingsContainer = styled.View`
  padding: 40px 30px;
`;

export const SettingsHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const SettingsTitle = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #374151;
`;

export const SettingsSubtitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
`;

export const SettingsSubtitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #374151;
`;

export const SettingOptionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

export const SettingOptionLeftContent = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

type SettingOptionIconWrapperProps = {
  item: '#fff' | '#000' | '#e3fcec' | '#fff7e0';
};

export const SettingOptionIconWrapper = styled.View<SettingOptionIconWrapperProps>`
  background-color: ${(props) =>
    props.item === '#e3fcec'
      ? '#e3fcec'
      : props.item === '#fff7e0'
      ? '#fff7e0'
      : '#fff'};
  height: 60px;
  width: 60px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const SettingsButtonNavigateOtherTab = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
